// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Atualize esses caminhos conforme sua estrutura
const PATHS = {
    cursoGratuito: '/curso-assistente-virtual',
    programa30dias: '/do-zero-ao-primeiro-cliente',                  // Programa R$ 97
    formacaoAV: '/formacao-av',      // Formação AV R$ 797
    formacaoAV_CLT_ADM: '/formacao-av-clt-adm',      // Formação AV R$ 797
    formacaoAV_CLT: '/formacao-av-clt',      // Formação AV R$ 797
    formacaoAV_DESEMPREGADA: '/formacao-av-dspg',
    acessoVirtap: '/vagas-assistente-virtual/acesso', // Plataforma
    whatsapp: 'https://wa.me/5548988089062',          // Número do WhatsApp
};

const DESTINO_QUIZ = 'lp'; // 'whatsapp' ou 'lp'
const DESTINO_CLT_ADMIN = 'lp';
const DESTINO_CLT_NON_ADMIN = 'lp';
const DESTINO_DESEMPREGADA_PRONTA = 'lp';

// ─── FLOWS ────────────────────────────────────────────────────────────────────
const FLOWS = {
    descobrindo: ['step-desc-origem', 'step-desc-motivacao', 'step-result'],
    clt: ['step-clt-situacao', 'step-clt-preocupacao', 'step-clt-prontidao', 'step-result'],
    desempregada: ['step-desemp-urgencia', 'step-desemp-preocupacao', 'step-desemp-prontidao', 'step-result'],
    pronta: ['step-pronta-preocupacao', 'step-result'],
    base: ['step-base-situacao', 'step-base-necessidade', 'step-result'],
};

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
    persona: null,          // descobrindo | clt | desempregada | pronta | base
    flow: null,
    flowIndex: 0,
    history: [],            // pilha de steps pra voltar

    // Descobrindo
    origem: null,
    motivacao: null,

    // CLT
    cltArea: null,
    cltSituacao: null,
    cltPreocupacao: null,
    cltProntidao: null,

    // Desempregada
    desempUrgencia: null,
    desempPreocupacao: null,
    desempProntidao: null,

    // Pronta
    prontaPreocupacao: null,

    // Base
    baseSituacao: null,
    baseNecessidade: null,
};

// ─── NAVEGAÇÃO ────────────────────────────────────────────────────────────────

function navigateTo(stepId) {
    const current = document.querySelector('.step.active');
    if (current) {
        state.history.push(current.id);
        current.classList.remove('active');
    }
    document.getElementById(stepId)?.classList.add('active');
    document.getElementById('header-nav').style.display = stepId === 'step0' ? 'none' : 'flex';
    window.scrollTo(0, 0);
}

function goBack() {
    if (state.history.length === 0) return;
    const prev = state.history.pop();
    document.querySelector('.step.active')?.classList.remove('active');
    document.getElementById(prev)?.classList.add('active');
    document.getElementById('header-nav').style.display = prev === 'step0' ? 'none' : 'flex';

    // Ajusta flowIndex
    if (state.flow && state.flowIndex > 0) state.flowIndex--;
    window.scrollTo(0, 0);
}

function startFlow(flowName) {
    state.flow = flowName;
    state.persona = flowName;
    state.flowIndex = 0;
    navigateTo(FLOWS[flowName][0]);
}

function advance() {
    state.flowIndex++;
    const flow = FLOWS[state.flow];
    if (state.flowIndex >= flow.length) return;

    const nextId = flow[state.flowIndex];
    if (nextId === 'step-result') {
        showResult();
        return;
    }
    navigateTo(nextId);
}

// ─── HANDLERS ─────────────────────────────────────────────────────────────────

function choosePath(path, el) {
    markSelected(el);
    if (path === 'nao-conhece') {
        startFlow('descobrindo');
    } else if (path === 'quer-comecar') {
        // vai pra sub-identificação antes de escolher o flow
        state.history.push('step0');
        document.querySelector('.step.active')?.classList.remove('active');
        document.getElementById('step-comecar-momento')?.classList.add('active');
        document.getElementById('header-nav').style.display = 'flex';
        window.scrollTo(0, 0);
    } else if (path === 'ja-trabalha') {
        startFlow('base');
    }
}

function chooseSubPersona(sub, el) {
    markSelected(el);
    setTimeout(() => {
        if (sub === 'clt') {
            startFlow('clt');
        } else if (sub === 'desempregada') {
            startFlow('desempregada');
        } else if (sub === 'fez-curso') {
            // Já fez curso → entra no flow de base com contexto
            state.baseSituacao = 'fez-curso-travou';
            startFlow('base');
            // Pula a primeira pergunta (situação) pq já sabemos
            state.flowIndex = 1;
            navigateTo(FLOWS.base[1]); // vai direto pra necessidade
        } else if (sub === 'pronta') {
            startFlow('pronta');
        }
    }, 150);
}

function saveAndAdvance(key, value, el) {
    state[key] = value;
    markSelected(el);
    setTimeout(() => advance(), 150);
}

function markSelected(el) {
    if (!el) return;
    el.closest('.step')?.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
}

// ─── RESULTADO ────────────────────────────────────────────────────────────────


function showResult() {
    const resultado = gerarResultado();
    if (!resultado) return; // waitlist já navegou sozinha

    document.getElementById('result-title').innerHTML = resultado.titulo;
    document.getElementById('result-text').innerHTML = resultado.mensagem + resultado.btn;
    navigateTo('step-result');
}


function gerarResultado() {
    const p = state.persona;

    // ─── DESCOBRINDO → Curso Gratuito ─────────────────────────────────────
    if (p === 'descobrindo') {
        return {
            destino: 'curso-gratuito',
            titulo: 'Comece do jeito certo!',
            mensagem: `
                <p>Se você ainda não conhece a profissão de <strong>Assistente Virtual</strong>, o primeiro passo é entender como ela funciona.</p>
                <p>Preparamos um <strong>curso 100% gratuito</strong> onde explicamos:</p>
                <ul>
                    <li>O que faz uma Assistente Virtual</li>
                    <li>O que é preciso para trabalhar</li>
                    <li>Quanto é possível ganhar</li>
                    <li>Como começar a trabalhar</li>
                </ul>
                <p>Depois de assistir, gente te ajuda com os próximos passos!</p>
            `,
            btn: makeCTA('👉 Acessar o Curso Gratuito', PATHS.cursoGratuito, 'curso-gratuito'),
        };
    }

    // ─── CLT ──────────────────────────────────────────────────────────────
    if (p === 'clt') {
        const prontidao = state.cltProntidao;

        if (prontidao === 'entender') {
            return resultadoCursoGratuito(
                'O melhor começo é entender a profissão',
                `<p>Boa! Muita gente que trabalha no CLT começa entendendo a profissão, vendo se faz sentido, e só depois decidindo.</p>
                <p>Pra te ajudar, preparamos um <strong>curso 100% gratuito</strong> que explica tudo sobre a profissão de Assistente Virtual: o que faz, quanto ganha, como começar.</p>
                <p>Depois de assistir, a gente te ajuda a traçar o caminho certo pro seu momento.</p>`
            );
        }

        if (prontidao === 'leve') {
            return resultadoPrograma97(
                'Tem um programa feito pro seu momento',
                montarContextoCLT(),
                `<p>A Virtap criou um programa de 30 dias pra quem quer começar como AV sem largar o emprego.</p>
                    <p>Você aprende o essencial, pratica com exercícios reais e sai pronta pra atender seu primeiro cliente.</p>`
            );
        }

        // prontidao === 'agora'
        if (DESTINO_CLT_ADMIN === 'lp' && state.cltArea === 'admin') {
            return {
                destino: 'lp',
                titulo: 'Seu próximo passo tá aqui',
                mensagem: montarContextoCLT() +
                    `<p>A Virtap tem um caminho certo pra você.</p>`,
                btn: makeCTA('👉 Quero ver como funciona', PATHS.formacaoAV_CLT, 'lp-formacao-clt'),
            };
        }
        else if (DESTINO_CLT_NON_ADMIN === 'lp' && state.cltArea !== 'admin') {
            return {
                destino: 'lp',
                titulo: 'Seu próximo passo tá aqui',
                mensagem: montarContextoCLT() +
                    `<p>A Virtap tem um caminho certo pra você.</p>`,
                btn: makeCTA('👉 Quero ver como funciona', PATHS.formacaoAV_CLT, 'lp-formacao-clt'),
            };
        }

        else {
            return resultadoWhatsApp(
                'Vamos montar o melhor caminho pra você',
                montarContextoCLT(),
                `<p>Você já sabe o que quer e tá pronta pra agir. Agora a gente precisa entender melhor o seu momento pra te indicar o caminho mais eficiente.</p>
            <p>A Virtap tem formação completa com acompanhamento de especialistas por 12 meses, e dependendo do seu perfil, acesso a uma plataforma exclusiva com vagas reais toda semana.</p>
            <p>Vamos conversar pra montar o plano certo pra você?</p>`
            );
        }

    }

    // ─── DESEMPREGADA ─────────────────────────────────────────────────────
    if (p === 'desempregada') {
        const prontidao = state.desempProntidao;

        if (prontidao === 'gratuito') {
            return resultadoCursoGratuito(
                'Comece sem investir nada',
                `<p>Entendido! Quer ver se a profissão é pra você antes de investir qualquer coisa, né?</p>
                <p>Sem problemas! A gente tem um <strong>curso gratuito</strong> explica tudo sobre como funciona a Assistência Virtual, quanto dá pra ganhar e como começar.</p>
                <p>Depois de assistir, conta pra gente se você se vê trabalhando como AV!</p>`
            );
        }

        if (prontidao === 'rapido') {
            return resultadoPrograma97(
                'Tem um caminho prático pra você',
                montarContextoDesempregada(),
                `<p>A Virtap tem um programa de 30 dias focado em resultado: você aprende na prática, treina com exercícios reais e sai pronta pra atender seu primeiro cliente.</p>
                <p>É direto ao ponto, feito pra quem não pode esperar.</p>`
            );
        }

        // prontidao === 'completo'
        if (DESTINO_DESEMPREGADA_PRONTA === 'lp') {
            return {
                destino: 'lp',
                titulo: 'Seu próximo passo tá aqui',
                mensagem: montarContextoDesempregada() +
                    `<p>A Virtap tem um caminho certo pra você.</p>`,
                btn: makeCTA('👉 Quero ver como funciona', PATHS.formacaoAV_DESEMPREGADA, 'lp-formacao-clt'),
            };

        } else {
            return resultadoWhatsApp(
                'Vamos construir isso...',
                montarContextoDesempregada(),
                `<p>Você quer fazer direito — e isso mostra maturidade. Construir uma carreira sólida leva um pouco mais de tempo, mas o resultado é muito mais consistente.</p>
                <p>A Virtap tem uma formação completa que te prepara do zero, com acompanhamento de especialistas por 12 meses. E dependendo do seu perfil, acesso a clientes reais pela nossa plataforma.</p>
                <p>Vamos conversar pra entender melhor o seu momento e montar o plano certo?</p>`
            );

        }
    }

    // ─── PRONTA ───────────────────────────────────────────────────────────
    if (p === 'pronta') {
        const preocupacao = state.prontaPreocupacao;

        if (preocupacao === 'primeiro-passo') {
            return resultadoPrograma97(
                'Seu próximo passo tá aqui',
                `<p>Você já se decidiu... agora precisa de um caminho prático pra transformar essa decisão em ação.</p>`,
                `<p>A Virtap tem um programa de 30 dias onde você aprende o essencial, pratica com exercícios reais e sai pronta pra atender seu primeiro cliente.</p>`
            );
        }

        // profissionalizar, acompanhamento, clientes → WhatsApp
        const angulos = {
            profissionalizar: `<p>Você quer construir uma carreira de verdade, não um bico. Super entendemos isso e podemos te ajudar!</p>`,
            acompanhamento: `<p>Você não precisa fazer sozinha. Estamos aqui pra te acompanhar em toda sua jornada.</p>`,
            clientes: `<p>Saber o que fazer é metade do caminho... a outra metade é ter acesso a clientes, né? Boa notícia: podemos facilitar muito isso!</p>`,
        };

        return resultadoWhatsApp(
            'Vamos acelerar seu próximo passo',
            angulos[preocupacao] || '',
            `<p>Vamos conversar pra montar o caminho mais eficiente pro seu momento?</p>`
        );
    }

    // ─── BASE (já trabalha / fez curso) ───────────────────────────────────
    if (p === 'base') {

        // Quer clientes → Plataforma de Vagas direto
        if (state.baseNecessidade === 'clientes') {
            return {
                destino: 'plataforma',
                titulo: 'Existe um caminho que você ainda não viu',
                mensagem: montarContextoBase() +
                    `<p>A Virtap tem uma plataforma exclusiva de vagas pra Assistentes Virtuais... bem diferente de tudo que você já deve ter tentado.</p>`,
                btn: makeCTA('👉 Conhecer a Plataforma de Vagas', PATHS.acessoVirtap, 'plataforma-vagas'),
            };
        }

        // Resto → WhatsApp consultivo
        return resultadoWhatsApp(
            'Vamos acelerar seu próximo passo',
            montarContextoBase(),
            ''
        );
    }

    // fallback
    return resultadoCursoGratuito('Comece por aqui', '<p>Preparamos o melhor caminho pra você.</p>');
}

// ─── HELPERS DE CONTEXTO ──────────────────────────────────────────────────────

function montarContextoCLT() {
    const situacoes = {
        'renda-extra': 'Você quer uma renda extra sem sair do emprego',
        'migrar': 'Você quer migrar pro trabalho remoto com segurança',
        'sair': 'Você já decidiu sair do CLT e precisa se preparar',
    };
    const preocupacoes = {
        'estabilidade': 'e sua maior preocupação é a estabilidade financeira',
        'clientes': 'e sua maior preocupação é conseguir clientes',
        'sozinha': 'e você tem receio de fazer tudo sozinha, sem orientação',
        'remoto': 'e você tem dúvida se consegue se adaptar ao trabalho remoto',
    };
    const s = situacoes[state.cltSituacao] || '';
    const p = preocupacoes[state.cltPreocupacao] || '';
    return s && p ? `<p>${s}, ${p}. A gente entende esse momento.</p>` : '';
}

function montarContextoDesempregada() {
    const urgencias = {
        'alta': 'Você precisa de renda rápido',
        'media': 'Você tem um tempinho pra se preparar',
        'baixa': 'Você tá planejando com calma',
    };
    const preocupacoes = {
        'retorno': 'e sua maior preocupação é investir e não ter retorno',
        'direcao': 'e sua maior preocupação é não saber por onde começar',
        'experiencia': 'e você sente que não tem experiência suficiente',
        'frustrada': 'e você já tentou outras coisas que não deram certo',
    };
    const u = urgencias[state.desempUrgencia] || '';
    const p = preocupacoes[state.desempPreocupacao] || '';
    return u && p ? `<p>${u}, ${p}. Te entendemos... E pensando nisso... </p>` : '';
}

function montarContextoBase() {
    const situacoes = {
        'fez-curso-travou': 'Você já investiu na profissão mas ainda não conseguiu clientes',
        'informal': 'Você já atende alguns clientes mas quer se profissionalizar',
        'profissional': 'Você já atua profissionalmente e quer crescer',
    };
    const necessidades = {
        'clientes': 'O que mais faz falta é acesso a clientes de verdade.',
        'posicionamento': 'Você quer cobrar melhor e se posicionar como profissional.',
        'estrutura': 'Você precisa de estrutura pra formalizar e escalar.',
        'comunidade': 'Você quer fazer parte de uma comunidade e não trabalhar isolada.',
    };
    const s = situacoes[state.baseSituacao] || '';
    const n = necessidades[state.baseNecessidade] || '';
    return `<p>${s}. ${n}</p>`;
}

// ─── TEMPLATES DE RESULTADO ───────────────────────────────────────────────────

function resultadoCursoGratuito(titulo, corpo) {
    return {
        destino: 'curso-gratuito',
        titulo,
        mensagem: corpo,
        btn: makeCTA('👉 Acessar o Curso Gratuito', PATHS.cursoGratuito, 'curso-gratuito'),
    };
}

// function resultadoWhatsApp(titulo, contexto, corpo) {
//     const tags = getStateTag();
//     const whatsappUrl = PATHS.whatsapp + '?text=' + encodeURIComponent('Oi! Quero saber mais sobre a Formação AV da Virtap.\n\n#' + tags);

//     return {
//         destino: 'whatsapp',
//         titulo,
//         mensagem: contexto +
//             `<p>A Virtap tem um caminho alinhado com o que você precisa agora. Mas antes de te indicar qualquer coisa, a gente quer entender melhor o seu momento.</p>
//             <p>Vamos conversar e montar o plano certo pra você?</p>`,
//         btn: `<button class="next-btn" onclick="window.location.href='${whatsappUrl}'">👉 Vamos conversar</button>`,
//     };
// }

function resultadoWhatsApp(titulo, contexto, corpo) {

    if (DESTINO_QUIZ === 'lp') {

        return {
            destino: 'lp',
            titulo: 'Seu próximo passo tá aqui',
            mensagem: contexto +
                `<p>A Virtap tem um caminho alinhado com o que você precisa agora. </p>
                `,
            btn: makeCTA('👉 Quero ver como funciona', PATHS.formacaoAV, 'lp-formacao'),
        };

    }

    const tags = getStateTag();
    const whatsappUrl = PATHS.whatsapp + '?text=' + encodeURIComponent('Oi! Quero saber mais sobre a Formação AV da Virtap.\n\n#' + tags);

    return {
        destino: 'whatsapp',
        titulo,
        mensagem: contexto +
            `<p>A Virtap tem um caminho alinhado com o que você precisa agora. Mas antes de te indicar qualquer coisa, a gente quer entender melhor o seu momento.</p>
            <p>Vamos conversar e montar o plano certo pra você?</p>`,
        btn: `<button class="next-btn" onclick="window.location.href='${whatsappUrl}'">👉 Vamos conversar</button>`,
    };
}

function resultadoPrograma97(titulo, contexto, corpo) {
    return {
        destino: 'lp',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Conhecer o programa', PATHS.programa30dias, 'programa-30dias'),
    };
}

// ─── CTA BUTTON ───────────────────────────────────────────────────────────────

function makeCTA(label, path, campaign) {
    const link = getLink(path, campaign, state);
    return `<button class="next-btn" onclick="window.location.href='${link}'">${label}</button>`;
}



// ─── UTM (mantido do original) ────────────────────────────────────────────────

function getStateTag() {
    const parts = [state.persona];
    if (state.persona === 'clt') parts.push(state.cltSituacao, state.cltPreocupacao, state.cltProntidao);
    if (state.persona === 'desempregada') parts.push(state.desempUrgencia, state.desempPreocupacao, state.desempProntidao);
    if (state.persona === 'pronta') parts.push(state.prontaPreocupacao);
    if (state.persona === 'base') parts.push(state.baseSituacao, state.baseNecessidade);
    if (state.persona === 'descobrindo') parts.push(state.origem, state.motivacao);
    return parts.filter(Boolean).join('-');
}

function getLink(path, campaign) {
    const utm = getUTMParams();
    const params = new URLSearchParams();

    if (utm.has_utm) {
        const s = getNullableValue(utm.utm_last.utm_source);
        const m = getNullableValue(utm.utm_last.utm_medium);
        const c = getNullableValue(utm.utm_last.utm_campaign);
        const ct = getNullableValue(utm.utm_last.utm_content);
        let t = getNullableValue(utm.utm_last.utm_term);
        t = t ? t + '-quiz-' : 'quiz-';
        t += getStateTag();
        if (s) params.set('utm_source', s);
        if (m) params.set('utm_medium', m);
        if (c) params.set('utm_campaign', c);
        if (ct) params.set('utm_content', ct);
        if (t) params.set('utm_term', t);
    } else {
        params.set('utm_source', 'virtap');
        params.set('utm_medium', 'site');
        params.set('utm_campaign', campaign);
        params.set('utm_content', 'quiz');
        params.set('utm_term', getStateTag());
    }

    return path + '?' + params.toString();
}

function getNullableValue(val) {
    if (val) {
        val = val.trim();
        if (val.length === 0) val = null;
    }
    return val;
}

function getUTMParams() {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
    const rawReferrer = getNullableValue(document.referrer);
    const hasUTM = getNullableValue(params.get('utm_source')) && getNullableValue(params.get('utm_medium'));

    let utmParams = {};
    if (hasUTM) {
        utmKeys.forEach(key => { utmParams[key] = getNullableValue(params.get(key)); });
    }
    utmParams.timestamp = Date.now();
    utmParams.referral_url = rawReferrer;

    let firstUtmParams = localStorage.getItem('first_visit_utm');
    if (!firstUtmParams) {
        firstUtmParams = utmParams;
        try { localStorage.setItem('first_visit_utm', JSON.stringify(utmParams)); } catch { }
    } else {
        try { firstUtmParams = JSON.parse(firstUtmParams); } catch { firstUtmParams = utmParams; }
    }

    return { utm_first: firstUtmParams, utm_last: utmParams, has_utm: !!hasUTM };
}

try { console.log(getUTMParams()); } catch { }