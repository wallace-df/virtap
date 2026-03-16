// ─── FLOWS ────────────────────────────────────────────────────────────────────
// step-result é um ID virtual que dispara showResult() e não existe no HTML.

const FLOWS = {
    iniciante: ['step1', 'step2', 'step3', 'step4', 'step5', 'step-result'],
    atuante:   ['step8', 'step9', 'step10', 'step11', 'step-result'],
};

// ─── STATE ────────────────────────────────────────────────────────────────────

const state = {
    flow:      null,  // 'iniciante' | 'atuante'
    flowIndex: 0,

    // Flow iniciante
    experience: null, // 'Executivo' | 'Administrativo' | 'Atendimento' | null
    desejo:     null, // 'AP' | 'AA' | 'SR'
    p2:         null, // 'AP' | 'AA' | 'SR'
    p3:         null, // 'AP' | 'AA' | 'SR'
    p5:         null, // 'desafio' | 'existente' | null (condicional)

    // Flow atuante
    areaAtual:       null,
    dor:             null,
    perfilValidacao: null,
    ambicao:         null,
};

// ─── DADOS ────────────────────────────────────────────────────────────────────

const EXP_MAP = {
    'Executivo':      'elite',
    'Administrativo': 'adm',
    'Atendimento':    'atendimento',
    null:             'sem',
};

const FORMACOES = {
    AP: { label: 'Conheça a Formação AExpert',      path: '/formacoes/assistencia-pessoal' },
    AV: { label: 'Formação em Assistência Virtual', path: '/formacoes/assistencia-virtual' },
};

function getFormacao(perfil) {
    return perfil === 'AP' ? FORMACOES.AP : FORMACOES.AV;
}

const RESULTS_ATUANTE = {
    AP: {
        title: "<span>Você pode brilhar como:</span>Assessora Pessoal",
        text: `
            <p>Suas respostas mostram facilidade para tomar iniciativa, resolver pendências e ajudar a organizar a rotina de alguém: habilidades indispensáveis para uma Assessora Pessoal.</p>
            <p>A Assessoria Pessoal é uma das áreas mais valorizadas da Assistência Virtual, onde profissionais bem posicionadas podem faturar R$ 10.000 ou mais por mês.</p>
            <p class="main-text">O próximo passo para você</p>
            <p>A <strong>Formação AExpert</strong> é a referência máxima no mercado de alto nível, criada exatamente para desenvolver competências que clientes exigentes realmente valorizam.</p>
            <button class="next-btn" onclick="window.location.href=getLink('/formacoes/assistencia-pessoal')">👉 Conheça a Formação AExpert</button>
        `
    },
    SR: {
        title: "<span>Você pode brilhar como:</span>Secretária Remota",
        text: `
            <p>Suas respostas mostram facilidade para comunicação, atendimento e relacionamento com pessoas.</p>
            <p class="main-text">O próximo passo para você</p>
            <p>Na <strong>Formação em Assistência Virtual</strong> da Virtap, você terá acesso a todas as técnicas e ferramentas essenciais para profissionalizar seu serviço.</p>
            <button class="next-btn" onclick="window.location.href=getLink('/formacoes/assistencia-virtual')">👉 Formação em Assistência Virtual</button>
        `
    },
    AA: {
        title: "<span>Você pode brilhar como:</span>Assistente Administrativa",
        text: `
            <p>Suas respostas mostram forte organização, atenção aos detalhes e facilidade para lidar com rotinas estruturadas.</p>
            <p class="main-text">O próximo passo para você</p>
            <p>Na <strong>Formação em Assistência Virtual</strong> da Virtap, você terá acesso a todas as técnicas e ferramentas essenciais para profissionalizar seu serviço.</p>
            <button class="next-btn" onclick="window.location.href=getLink('/formacoes/assistencia-virtual')">👉 Formação em Assistência Virtual</button>
        `
    },
    AP_SR: {
        title: "<span>Seu perfil:</span>Assistente Pessoal com habilidade em atendimento",
        text: `
            <p>Suas respostas mostram facilidade tanto para resolver tarefas quanto para lidar com pessoas e comunicação.</p>
            <p class="main-text">Próximo passo recomendado</p>
            <button class="next-btn" onclick="window.location.href=getLink('/formacoes/assistencia-virtual')">👉 Formação Assistente Virtual</button>
        `
    },
    AP_AA: {
        title: "<span>Seu perfil:</span>Assistente Executiva com forte organização administrativa",
        text: `
            <p>Suas respostas mostram facilidade para resolver tarefas e também para estruturar processos e organizar informações.</p>
            <p class="main-text">Próximo passo recomendado</p>
            <button class="next-btn" onclick="window.location.href=getLink('/formacoes/assistencia-virtual')">👉 Formação Assistente Executiva</button>
        `
    },
    SR_AA: {
        title: "<span>Seu perfil:</span>Secretária Remota com organização administrativa",
        text: `
            <p>Suas respostas mostram facilidade para comunicação e atendimento, combinada com organização e atenção aos detalhes.</p>
            <p class="main-text">Próximo passo recomendado</p>
            <button class="next-btn" onclick="window.location.href=getLink('/formacoes/assistencia-virtual')">👉 Formação Secretária Remota</button>
        `
    },
    ALL: {
        title: "<span>Você pode brilhar como:</span>Assistente Virtual Versátil",
        text: `
            <p>Suas respostas revelam um perfil dinâmico, com habilidade natural para transitar entre diferentes áreas e resolver problemas de forma ágil.</p>
            <p>Ser versátil agora é sua maior vantagem estratégica. Essa experiência prepara você para o próximo nível: a Assistência Executiva.</p>
            <p class="main-text">O próximo passo para você</p>
            <p>A <strong>Formação Assistente Virtual</strong> entrega as técnicas e ferramentas essenciais para você conquistar seus primeiros clientes com total liberdade e segurança.</p>
            <button class="next-btn" onclick="window.location.href=getLink('/formacoes/assistencia-virtual')">👉 Formação em Assistência Virtual</button>
        `
    },
};

// ─── LÓGICA DO QUIZ ───────────────────────────────────────────────────────────

function calcularPerfil(p2, p3) {
    if (p2 === p3) return p2;
    return ['AP', 'AA', 'SR'].find(p => p === p2 || p === p3);
}

function precisaDeP5(desejo, p2, p3, exp) {
    return desejo === 'AP' && calcularPerfil(p2, p3) !== 'AP' && exp !== 'sem';
}

function processarQuiz(desejo, p2, p3, exp, p5 = null) {
    const perfil        = calcularPerfil(p2, p3);
    const redirecionado = precisaDeP5(desejo, p2, p3, exp) && p5 === 'existente';
    const desejoFinal   = redirecionado ? perfil : desejo;

    const gancho = {
        elite: {
            AP: `Sua trajetória como secretária executiva já te coloca no nível que os grandes players buscam.`,
            AA: `Sua bagagem como secretária executiva vai muito além do que o AA exige — e isso é uma vantagem enorme.`,
            SR: `Sua experiência como secretária executiva te dá um padrão de excelência que poucos profissionais de Suporte têm.`,
        },
        atendimento: {
            AP: `Quem passou por atendimento de verdade sabe ler pessoas — e essa é uma das habilidades mais raras no mundo AP.`,
            AA: `Sua experiência com pessoas e rotinas é exatamente o que as empresas digitais precisam nos bastidores.`,
            SR: `Atendimento é a sua zona natural. No digital, isso vale ouro.`,
        },
        adm: {
            AP: `Sua vivência em processos e rotinas te dá uma visão sistêmica que poucos APs têm — e que todo grande player precisa.`,
            AA: `Processos, organização, controle — você já faz isso. Agora é só trazer para o digital.`,
            SR: `Ter clareza de processos faz de você uma profissional de Suporte muito acima da média.`,
        },
        sem: {
            AP: `Mesmo sem experiência formal, seu perfil revela que você já pensa de forma estratégica e antecipatória.`,
            AA: `Você está começando do zero — e no digital isso significa que não tem nada pra desaprender.`,
            SR: `Todo mundo começa de algum lugar. O seu começo vai ser mais estruturado do que a maioria.`,
        },
    };

    const copies = {
        AP: {
            AP: g => `${g}\n\nVocê já tem o que o mercado de elite procura. O que está faltando não é talento — é estrutura para empacotar isso no digital.\n\nA Formação AP vai pegar tudo que você já construiu e transformar em um posicionamento que os grandes players não conseguem ignorar. Você não começa do zero. Você começa do topo.`,
            AA: g => `${g}\n\nVocê tem organização e precisão — duas qualidades que toda AP precisa. Mas o nível AP exige também antecipar, tomar decisões e operar com autonomia estratégica.\n\nEsse é exatamente o gap que a Formação AP resolve. Você não está longe — está a uma estrutura de distância.`,
            SR: g => `${g}\n\nVocê tem comunicação e empatia — e isso é mais valioso do que parece no mundo AP. Mas existe um gap real entre o Suporte e a Assessoria Pessoal: autonomia, antecipação e gestão estratégica.\n\nA boa notícia? Esse gap é treinável. A Formação AP foi feita exatamente para transformar potencial em competência de elite.`,
        },
        AA: {
            AP: g => `${g}\n\nAA é um caminho sólido — mas seus resultados mostram que você já opera num nível acima do que está pedindo. Você pensa estrategicamente, antecipa problemas e age com autonomia.\n\nVocê entra pelo Administrativo agora, tudo bem. Mas já vai com o mapa do topo na mão — e o próximo passo vai chegar mais rápido do que imagina.`,
            AA: g => `${g}\n\nÉ exatamente isso que as empresas digitais precisam nos bastidores: alguém que chega e coloca tudo em ordem sem que ninguém precise pedir.\n\nA Formação vai fortalecer esse seu diferencial natural e te dar as ferramentas para transformar isso numa carreira real, com clientes que te valorizam de verdade.`,
            SR: g => `${g}\n\nVocê tem facilidade com pessoas e comunicação — uma qualidade real. Mas a Assistência Administrativa exige também um lado técnico: processos, organização, estrutura de bastidores.\n\nEsse é o gap que a Formação resolve. Você vai desenvolver a parte técnica sem perder o que já tem de melhor.`,
        },
        SR: {
            AP: g => `${g}\n\nSuporte é uma porta de entrada direta — mas seus resultados mostram que você já carrega o perfil de quem opera muito acima disso.\n\nVocê vai entrar pelo Suporte agora, tudo bem. Mas vamos lapidar tudo que você já tem. O topo não está longe — está esperando você chegar.`,
            AA: g => `${g}\n\nSua organização e raciocínio técnico te dariam um desempenho excelente no Suporte — e também te abrem portas muito maiores.\n\nA Formação vai te dar clareza sobre onde você pode realmente chegar. Suporte hoje, sim — mas com o mapa completo na mão.`,
            SR: g => `${g}\n\nPessoas que sabem se comunicar e lidar com gente são disputadas no mercado digital. Você tem esse dom de forma natural.\n\nA Formação vai reforçar esse diferencial e te dar estrutura para entrar rápido — sendo a voz em que os clientes confiam e que as marcas brigam para ter.`,
        },
    };

    const copiesRedirecionado = {
        AA: g => `Você decidiu começar com o que já tem — e é uma escolha inteligente.\n\n${g}\n\nEsse é o seu ponto de partida real. A Formação AV Administrativa vai estruturar essas habilidades para o digital e te colocar em movimento rápido. E quando você quiser dar o próximo passo em direção ao AP, o caminho já vai estar aberto.`,
        SR: g => `Você decidiu começar com o que já tem — e é uma escolha inteligente.\n\n${g}\n\nEsse é o seu ponto de partida real. A Formação AV Suporte vai colocar essas habilidades para trabalhar no digital imediatamente. E quando você quiser ir além, a estrutura já estará lá esperando.`,
    };

    const incluso = `\n\nAh, e tem algo importante: na formação, todas as competências estão inclusas — Suporte, Administrativo e AP. Não importa onde você está hoje. Se precisar desenvolver, a gente desenvolve juntas. Se já tiver bagagem, a gente estrutura e potencializa.`;

    const g        = gancho[exp][desejoFinal];
    const copy     = redirecionado ? copiesRedirecionado[desejoFinal](g) : copies[desejoFinal][perfil](g);
    const formacao = getFormacao(desejoFinal);

    return { formacao, mensagem: copy + incluso };
}

function calcularResultadoAtuante() {
    const votos  = [state.dor, state.perfilValidacao, state.ambicao];
    const scores = { AP: 0, AA: 0, SR: 0 };
    votos.forEach(v => { if (v && v in scores) scores[v]++; });
    const { AP, AA, SR } = scores;
    if (AP > AA && AP > SR)   return 'AP';
    if (AA > AP && AA > SR)   return 'AA';
    if (SR > AP && SR > AA)   return 'SR';
    if (AP === SR && AP > AA) return 'AP_SR';
    if (AP === AA && AP > SR) return 'AP_AA';
    if (SR === AA && SR > AP) return 'SR_AA';
    return 'ALL';
}

// ─── NAVEGAÇÃO ────────────────────────────────────────────────────────────────

function startFlow(flowName) {
    state.flow      = flowName;
    state.flowIndex = 0;
    navigateTo(FLOWS[flowName][0]);
}

function navigateTo(stepId) {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById(stepId)?.classList.add('active');
    document.getElementById('header-nav').style.display = stepId === 'step0' ? 'none' : 'flex';
    window.scrollTo(0, 0);
}

function advance() {
    const flow = FLOWS[state.flow];
    state.flowIndex++;
    if (state.flowIndex >= flow.length) return;

    let nextId = flow[state.flowIndex];

    // Pula step5 (P5 condicional) se não se aplicar
    if (nextId === 'step5') {
        const exp = EXP_MAP[state.experience] ?? 'sem';
        if (!precisaDeP5(state.desejo, state.p2, state.p3, exp)) {
            state.flowIndex++;
            if (state.flowIndex >= flow.length) return;
            nextId = flow[state.flowIndex];
        }
    }

    if (nextId === 'step-result') {
        showResult();
        return;
    }

    navigateTo(nextId);
}

function goBack() {
    if (state.flowIndex > 0) {
        state.flowIndex--;

        // Pula step5 para trás se não se aplica
        if (FLOWS[state.flow][state.flowIndex] === 'step5') {
            const exp = EXP_MAP[state.experience] ?? 'sem';
            if (!precisaDeP5(state.desejo, state.p2, state.p3, exp)) {
                state.flowIndex--;
            }
        }

        navigateTo(FLOWS[state.flow][state.flowIndex]);
    } else {
        navigateTo('step0');
    }
}

// ─── HANDLERS ─────────────────────────────────────────────────────────────────

function choosePath(path, el) {
    if (el) {
        el.closest('.step').querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        el.classList.add('selected');
    }
    setTimeout(() => {
        if (path === 'nao-conhece') { showCursoGratis(); return; }
        startFlow(path === 'quer-comecar' ? 'iniciante' : 'atuante');
    }, 150);
}

function selectAnswer(value, el) {
    const stepId = FLOWS[state.flow][state.flowIndex];

    if (state.flow === 'iniciante') {
        if (stepId === 'step1') state.experience = value;
        if (stepId === 'step2') state.desejo     = value;
        if (stepId === 'step3') state.p2         = value;
        if (stepId === 'step4') state.p3         = value;
        if (stepId === 'step5') state.p5         = value;
    }

    if (state.flow === 'atuante') {
        if (stepId === 'step8')  state.areaAtual       = value;
        if (stepId === 'step9')  state.dor             = value;
        if (stepId === 'step10') state.perfilValidacao = value;
        if (stepId === 'step11') state.ambicao         = value;
    }

    el.closest('.step').querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
    setTimeout(() => advance(), 150);
}

// ─── RESULTADO ────────────────────────────────────────────────────────────────

function showResult() {
    if (state.flow === 'iniciante') {
        const exp       = EXP_MAP[state.experience] ?? 'sem';
        const resultado = processarQuiz(state.desejo, state.p2, state.p3, exp, state.p5);

        document.getElementById('result-title').innerHTML = 'Veja o que encontramos para você';
        document.getElementById('result-text').innerHTML  =
            resultado.mensagem
                .split('\n\n')
                .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
                .join('') +
            `<button class="next-btn" onclick="window.location.href=getLink('${resultado.formacao.path}')">
                👉 ${resultado.formacao.label}
             </button>`;

        navigateTo('step6');
    }

    if (state.flow === 'atuante') {
        const key        = calcularResultadoAtuante();
        const resultData = RESULTS_ATUANTE[key];
        document.getElementById('result-title').innerHTML = resultData.title;
        document.getElementById('result-text').innerHTML  = resultData.text;
        navigateTo('step12');
    }
}

function showCursoGratis() {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('result-title').innerText = 'Comece do jeito certo!';
    document.getElementById('result-text').innerHTML  = `
        <p>Se você ainda não conhece a profissão de <strong>Assistente Virtual</strong>, o primeiro passo é entender como ela funciona.</p>
        <p>Para você começar da melhor forma possível, preparamos um <strong>curso 100% gratuito</strong> onde explicamos:</p>
        <ul>
            <li>O que faz uma Assistente Virtual</li>
            <li>O que é preciso para trabalhar</li>
            <li>Quanto é possível ganhar</li>
            <li>Como começar a trabalhar</li>
        </ul>
        <br>
        <button class="next-btn" onclick="window.location.href=getFreeCourseLink()">
            👉 Acessar o Curso Gratuito
        </button>
    `;
    document.getElementById('step6').classList.add('active');
    document.getElementById('header-nav').style.display = 'flex';
}

// ─── UTM ──────────────────────────────────────────────────────────────────────

function getLink(path) {
    const utm    = getUTMParams();
    const params = new URLSearchParams();

    if (utm.has_utm) {
        const s  = getNullableValue(utm.utm_last.utm_source);
        const m  = getNullableValue(utm.utm_last.utm_medium);
        const c  = getNullableValue(utm.utm_last.utm_campaign);
        const ct = getNullableValue(utm.utm_last.utm_content);
        if (s)  params.set('utm_source',   s);
        if (m)  params.set('utm_medium',   m);
        if (c)  params.set('utm_campaign', c);
        if (ct) params.set('utm_content',  ct);
    } else {
        params.set('utm_source',   'virtap');
        params.set('utm_medium',   'quiz');
        params.set('utm_campaign', 'formacao');
        params.set('utm_content',  'quiz-principal');
    }

    return path + '?' + params.toString();
}

function getFreeCourseLink() {
    return getLink('/curso-assistente-virtual');
}

// Mantido para compatibilidade com botões legados no RESULTS_ATUANTE
function getFormacaoAExpertLink() {
    return getLink('/formacoes/assistencia-pessoal');
}

function getNullableValue(val) {
    if (val) {
        val = val.trim();
        if (val.length === 0) val = null;
    }
    return val;
}

function getUTMParams() {
    const params      = new URLSearchParams(window.location.search);
    const utmKeys     = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
    const rawReferrer = getNullableValue(document.referrer);
    const hasUTM      = getNullableValue(params.get('utm_source')) && getNullableValue(params.get('utm_medium'));

    let utmParams = {};
    if (hasUTM) {
        utmKeys.forEach(key => { utmParams[key] = getNullableValue(params.get(key)); });
    }
    utmParams.timestamp    = Date.now();
    utmParams.referral_url = rawReferrer;

    let firstUtmParams = localStorage.getItem('first_visit_utm');
    if (!firstUtmParams) {
        firstUtmParams = utmParams;
        try { localStorage.setItem('first_visit_utm', JSON.stringify(utmParams)); } catch {}
    } else {
        try { firstUtmParams = JSON.parse(firstUtmParams); } catch { firstUtmParams = utmParams; }
    }

    return { utm_first: firstUtmParams, utm_last: utmParams, has_utm: !!hasUTM };
}

try { console.log(getUTMParams()); } catch {}