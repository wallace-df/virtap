// ═════════════════════════════════════════════════════════════════════════════
// VIRTAP QUIZ V2
// 3 caminhos: explore | build | growth
// ═════════════════════════════════════════════════════════════════════════════

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const PATHS = {
    cursoGratuito: '/curso-assistente-virtual',
    programa30dias: '/do-zero-ao-primeiro-cliente',     
    formacaoAV: '/formacoes/assistencia-virtual',                     
    acessoVirtap: '/vagas-assistente-virtual/acesso',
    especializacao: '/formacoes/assistencia-pessoal',
    mastermind: '/mastermind'
};

// ─── STEPS (questões) ─────────────────────────────────────────────────────────
// Cada step define: title, field (nome no state), e options (estático) ou
// optionsFn(state) (dinâmico baseado em respostas anteriores).
const STEPS = {

    // P0 — Ponto de partida
    p0: {
        title: 'Em qual momento você está?',
        field: 'flow',
        options: [
            { value: 'explore', label: 'Estou descobrindo a profissão de Assistente Virtual' },
            { value: 'build', label: 'Já decidi que quero ser Assistente Virtual' },
            { value: 'growth', label: 'Já sou Assistente Virtual' },
        ],
    },

    // ─── Comuns aos flows 1 e 2 ──────────────────────────────────────────────

    origem: {
        title: 'Como você conheceu a Virtap?',
        field: 'origem',
        options: [
            { value: 'instagram', label: 'Instagram' },
            { value: 'youtube', label: 'YouTube' },
            { value: 'tiktok', label: 'TikTok' },
            { value: 'google', label: 'Google' },
            { value: 'indicacao', label: 'Indicação de conhecido' },
            { value: 'ia', label: 'ChatGPT, Gemini ou outra IA' },
            { value: 'outro', label: 'Outro' },
        ],
    },

    situacao: {
        title: 'Qual é a sua situação atual?',
        field: 'situacao',
        options: [
            { value: 'clt', label: 'Trabalho no CLT' },
            { value: 'autonoma', label: 'Sou autônoma' },
            { value: 'desempregada', label: 'Estou desempregada' },
            { value: 'aposentada', label: 'Sou aposentada' },
        ],
    },

    area: {
        title: 'Em qual área você tem mais experiência?',
        field: 'area',
        options: [
            { value: 'secretariado', label: 'Secretariado Executivo' },
            { value: 'atendimento', label: 'Atendimento e suporte ao cliente' },
            { value: 'adm-fin', label: 'Administrativo e financeiro' },
            { value: 'comercial', label: 'Comercial e vendas' },
            { value: 'marketing', label: 'Marketing e redes sociais' },
            { value: 'nenhuma', label: 'Nenhuma dessas' },
        ],
    },

    renda: {
        title: 'Qual é a sua renda mensal hoje?',
        field: 'renda',
        skipFn: (s) => s.situacao === 'desempregada',
        options: [
            { value: 'ate-1800', label: 'Até R$ 1.800' },
            { value: '1800-2500', label: 'R$ 1.800 a R$ 2.500' },
            { value: '2500-3500', label: 'R$ 2.500 a R$ 3.500' },
            { value: '3500-5000', label: 'R$ 3.500 a R$ 5.000' },
            { value: 'acima-5000', label: 'Acima de R$ 5.000' },
        ],
    },

    // ─── Flow 1: explore ─────────────────────────────────────────────────

    incomoda: {
        title: 'O que mais te incomoda hoje?',
        field: 'incomoda',
        optionsFn: (s) => {
            const opts = {
                desempregada: [
                    { value: 'renda-insuficiente', label: 'Tenho dificuldades financeiras' },
                    { value: 'flexibilidade', label: 'Não quero voltar a ficar presa a horários e local fixo' },
                    { value: 'tempo', label: 'Não quero me afastar da minha família para poder trabalhar' },
                    { value: 'independencia', label: 'Quero recomeçar construindo algo que seja meu' },
                ],
                clt: [
                    { value: 'renda-insuficiente', label: 'Meu salário mal paga minhas contas' },
                    { value: 'flexibilidade', label: 'Odeio depender de horário e local fixo' },
                    { value: 'tempo', label: 'Trabalho tanto que não sobra tempo pra mim e minha família' },
                    { value: 'independencia', label: 'Quero algo que seja meu, não só um emprego' },
                ],
                autonoma: [
                    { value: 'renda-instavel', label: 'Minha renda é imprevisível' },
                    { value: 'renda-insuficiente', label: 'O que eu ganho hoje não é suficiente' },
                    { value: 'tempo', label: 'Trabalho tanto que não sobra tempo pra mim e minha família' },
                    { value: 'independencia', label: 'Quero trabalhar em algo mais sólido e profissional' },
                ],
                aposentada: [
                    { value: 'renda-insuficiente', label: 'Minha aposentadoria não é suficiente' },
                    { value: 'flexibilidade', label: 'Quero continuar ativa, mas no meu ritmo' },
                    { value: 'independencia', label: 'Quero construir algo meu com propósito' },
                ],
            };
            return opts[s.situacao] || [];
        },
    },

    urgenciaIncomodo: {
        title: 'Quão urgente é resolver isso pra você?',
        field: 'urgencia',
        options: [
            { value: 'urgencia-alta', label: 'Preciso resolver agora, não dá pra esperar' },
            { value: 'urgencia-media', label: 'Nos próximos meses, antes que aperte mais' },
            { value: 'urgencia-baixa', label: 'Tenho tempo, mas quero começar a planejar' },
            { value: 'pesquisando', label: 'Sem pressa, ainda explorando' },
        ],
    },

    // ─── Flow 2: Já decidi ───────────────────────────────────────────────────

    sonho: {
        title: 'Qual é o seu maior sonho?',
        field: 'sonho',
        optionsFn: (s) => {
            const opts = {
                desempregada: [
                    { value: 'renda-insuficiente', label: 'Ter minha renda própria' },
                    { value: 'flexibilidade', label: 'Trabalhar de onde eu quiser, nos meus horários' },
                    { value: 'tempo', label: 'Ganhar dinheiro sem me afastar da minha família' },
                    { value: 'independencia', label: 'Recomeçar construindo algo que seja meu' },
                ],
                clt: [
                    { value: 'renda-insuficiente', label: 'Ter mais dinheiro sobrando no fim do mês' },
                    { value: 'flexibilidade', label: 'Trabalhar de onde eu quiser, nos meus horários' },
                    { value: 'tempo', label: 'Ganhar dinheiro sem me afastar da minha família' },
                    { value: 'independencia', label: 'Construir algo que seja meu' },
                ],
                autonoma: [
                    { value: 'renda-instavel', label: 'Ter uma renda com a qual eu possa contar' },
                    { value: 'renda-insuficiente', label: 'Ter mais dinheiro sobrando no fim do mês' },
                    { value: 'tempo', label: 'Ganhar dinheiro sem me afastar da minha família' },
                    { value: 'independencia', label: 'Construir algo mais sólido e profissional' },
                ],
                aposentada: [
                    { value: 'renda-insuficiente', label: 'Ter mais dinheiro sobrando no fim do mês' },
                    { value: 'flexibilidade', label: 'Continuar ativa, mas no meu ritmo' },
                    { value: 'independencia', label: 'Construir algo meu com propósito' },
                ],
            };
            return opts[s.situacao] || [];
        },
    },

    urgenciaSonho: {
        title: 'Em quanto tempo você quer começar a trabalhar como AV?',
        field: 'urgencia',
        options: [
            { value: 'urgencia-alta', label: 'O quanto antes, é minha prioridade agora' },
            { value: 'urgencia-media', label: 'Nos próximos 3 meses' },
            { value: 'urgencia-baixa', label: 'Até o fim do ano' },
            { value: 'pesquisando', label: 'Sem prazo definido, ainda me organizando' },
        ],
    },

    obstaculo: {
        title: 'O que te impede de começar agora como AV?',
        field: 'obstaculo',
        optionsFn: (s) => {
            // Obstáculos específicos por situação
            const opts = [
                { value: 'nao-sei-comecar', label: 'Não sei por onde começar' },
            ];

            // Objeção financeira (apenas para desempregadas)
            if (s.situacao === 'desempregada') {
                opts.push({
                    value: 'sem-investimento',
                    label: 'Não posso investir muito agora'
                });
            }

            // Medo específico para CLT
            if (s.situacao === 'clt') {
                opts.push({
                    value: 'medo-instabilidade',
                    label: 'Não posso largar meu emprego agora'
                });
            }

            // Medo específico para Autônomas
            if (s.situacao === 'autonoma') {
                opts.push({
                    value: 'medo-transicao',
                    label: 'Tenho receio de trocar o certo pelo duvidoso'
                });
            }

            // Medo específico para Aposentadas
            if (s.situacao === 'aposentada') {
                opts.push({
                    value: 'medo-tecnologia',
                    label: 'Tenho medo de não conseguir acompanhar a tecnologia'
                });
            }

            // Obstáculos universais
            opts.push(
                {
                    value: 'medo-clientes',
                    label: 'Tenho medo de não conseguir clientes'
                },
                {
                    value: 'inseguranca-pratica',
                    label: 'Tenho receio de não conseguir colocar em prática'
                },
                {
                    value: 'pronta',
                    label: 'Estou pronta, só preciso do caminho certo'
                }
            );
            return opts;
        },
    },

    // ─── Flow 3: Já sou AV ───────────────────────────────────────────────────

    comoComecou: {
        title: 'Como você começou na Assistência Virtual?',
        field: 'comoComecou',
        options: [
            { value: 'curso', label: 'Fiz um curso de Assistência Virtual' },
            { value: 'sozinha', label: 'Comecei sozinha, aprendendo na prática' },
            { value: 'trabalho-anterior', label: 'Já fazia atividades semelhantes no meu trabalho anterior' },
        ],
    },

    areaAV: {
        // Sem "Nenhuma dessas" no Flow 3 — quem já atua tem uma área.
        title: 'Em qual área você tem mais experiência?',
        field: 'area',
        options: [
            { value: 'secretariado-executivo', label: 'Secretariado Executivo' },
            { value: 'assistencia-pessoal', label: 'Assistência Pessoal' },
            { value: 'atendimento', label: 'Atendimento e suporte ao cliente' },
            { value: 'administrativo-finaceiro', label: 'Administrativo e financeiro' },
            { value: 'outra', label: 'Outra' },
        ],
    },

    incomodaAV: {
        title: 'O que mais te incomoda hoje?',
        field: 'incomodaAV',
        options: [
            { value: 'clientes', label: 'Tenho dificuldades em conseguir clientes' },
            { value: 'inseguranca', label: 'Ainda me sinto insegura para atuar' },
            { value: 'precificacao', label: 'Não sei se estou cobrando corretamente' },
            { value: 'profissionalizacao', label: 'Sinto que preciso me profissionalizar melhor' },
            { value: 'rentabilidade', label: 'Trabalho muito e ganho menos do que gostaria' },
            { value: 'escala', label: 'Quero crescer e escalar minha atuação' },
        ],
    },

    faturamento: {
        title: 'Quanto você fatura hoje como Assistente?',
        field: 'faturamento',
        options: [
            { value: 'sem-clientes', label: 'Ainda não tenho clientes' },
            { value: 'ate-1800', label: 'Até R$ 1.800' },
            { value: '1800-2500', label: 'R$ 1.800 a R$ 2.500' },
            { value: '2500-3500', label: 'R$ 2.500 a R$ 3.500' },
            { value: '3500-5000', label: 'R$ 3.500 a R$ 5.000' },
            { value: 'acima-5000', label: 'Acima de R$ 5.000' },
        ],
    },
};

// ─── FLOWS ────────────────────────────────────────────────────────────────────
// Ordem dos steps por flow. Renda termina o Flow 1 e 2 (cold close).
const FLOWS = {
    explore: ['origem', 'situacao', 'area', 'incomoda', 'renda'],
    build: ['origem', 'situacao', 'area', 'sonho', 'obstaculo', 'renda'],
    'growth': ['comoComecou', 'areaAV', 'origem', 'incomodaAV', 'faturamento'],
};

// ─── PROFILE SLUG SCHEMA ──────────────────────────────────────────────────────
// Define a ordem dos campos no slug por flow. Server usa o MESMO schema
// pra parsear ?profile=... em objeto.
const PROFILE_SCHEMAS = {
    explore: ['origem', 'situacao', 'area', 'incomoda', 'renda'],
    build: ['origem', 'situacao', 'area', 'sonho', 'obstaculo', 'renda'],
    growth: ['comoComecou', 'area', 'origem', 'incomodaAV', 'faturamento'],
};

const PROFILE_SEP = '_';
const PROFILE_NA = 'na';

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
    flow: null,         // explore | build | growth
    flowIndex: -1,      // -1 = no P0, 0+ = dentro do flow
    history: [],        // pilha de steps pra voltar

    // Respostas (uma chave por campo capturado)
    origem: null,
    situacao: null,
    area: null,
    incomoda: null,
    sonho: null,
    obstaculo: null,
    renda: null,
    comoComecou: null,
    incomodaAV: null,
    faturamento: null,
};

// ─── RENDERIZAÇÃO ─────────────────────────────────────────────────────────────

function renderStep(stepId) {
    const step = STEPS[stepId];
    if (!step) {
        console.error('Step não encontrado:', stepId);
        return;
    }

    const options = typeof step.optionsFn === 'function'
        ? step.optionsFn(state)
        : step.options;

    const currentValue = state[step.field];
    const buttonsHtml = options.map(opt => {
        const selected = currentValue === opt.value ? ' selected' : '';
        return `<button class="option-btn${selected}" onclick="selectOption('${step.field}','${opt.value}',this)">${opt.label}</button>`;
    }).join('');

    document.getElementById('step-content').innerHTML = `
        <h2>${step.title}</h2>
        ${buttonsHtml}
    `;

    // Header de voltar: aparece exceto no P0
    const isP0 = stepId === 'p0';
    document.getElementById('header-nav').style.display = isP0 ? 'none' : 'flex';

    window.scrollTo(0, 0);
}

function markSelected(el) {
    if (!el) return;
    el.parentNode.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
}

// ─── NAVEGAÇÃO ────────────────────────────────────────────────────────────────

let advanceTimer = null;

function selectOption(field, value, el) {
    state[field] = value;
    markSelected(el);
    // if (advanceTimer) clearTimeout(advanceTimer);
    advanceTimer = setTimeout(advance, 150);
}
function advance() {
    // P0: começa o flow
    if (state.flowIndex === -1) {
        state.history.push('p0');
        state.flowIndex = 0;
        renderStep(FLOWS[state.flow][0]);
        return;
    }

    // Salva step atual no history e avança
    const currentStepId = FLOWS[state.flow][state.flowIndex];
    state.history.push(currentStepId);

    state.flowIndex++;
    const flow = FLOWS[state.flow];

    // Pula steps com skipFn true
    while (state.flowIndex < flow.length) {
        const nextId = flow[state.flowIndex];
        const step = STEPS[nextId];
        if (step.skipFn && step.skipFn(state)) {
            state[step.field] = null; // ← linha nova: limpa stale
            state.flowIndex++;
            continue;
        }
        renderStep(nextId);
        return;
    }

    // Fim do flow → resultado
    showResult();
}

function goBack() {
    if (state.history.length === 0) return;
    const prev = state.history.pop();

    if (prev === 'p0') {
        // Volta pro ponto de partida: reseta flow
        state.flow = null;
        state.flowIndex = -1;
        renderStep('p0');
        return;
    }

    // Volta um step dentro do flow
    state.flowIndex = FLOWS[state.flow].indexOf(prev);
    renderStep(prev);
}

// ─── RESULTADO ────────────────────────────────────────────────────────────────

function showResult() {
    const r = gerarResultado();
    document.getElementById('step-content').innerHTML = `
        <h2 class="text-center">${r.titulo}</h2>
        <div>${r.mensagem}${r.btn}</div>
    `;
    document.getElementById('header-nav').style.display = 'flex';
    window.scrollTo(0, 0);
}

function gerarResultado() {

    // ─── FLOW 1: explore ────────────────────────────────
    if (state.flow === 'explore') {
        return resultadoCursoGratuito(
            'Comece do jeito certo!',
            `<p>Se você ainda não conhece a profissão de <strong>Assistente Virtual</strong>, o primeiro passo é entender como ela funciona.</p>
             <p>Preparamos um <strong>curso 100% gratuito</strong> onde explicamos:</p>
             <ul>
                <li>O que faz uma Assistente Virtual</li>
                <li>O que é preciso para trabalhar</li>
                <li>Quanto é possível ganhar</li>
                <li>Como começar a trabalhar</li>
             </ul>
             <p>Depois de assistir, a gente te ajuda com os próximos passos!</p>`
        );
    }

    // ─── FLOW 2: build ───────────────────────────────────────────────────
    if (state.flow === 'build') {
        const rendaBaixa = ['ate-1800', '1800-2500'].includes(state.renda);
        const desempregada = state.situacao === 'desempregada';

        // Programa 30 Dias: desempregada OU renda baixa OU urgência alta
        if (desempregada || rendaBaixa) {
            return resultadoPrograma30Dias(
                'Tem um caminho prático pra você',
                montarContextoDecidi(),
                `<p>A Virtap tem um programa de 30 dias focado em resultado: você aprende na prática, treina com exercícios reais e sai pronta pra atender seu primeiro cliente.</p>
                 <p>É direto ao ponto, feito pra quem não pode esperar e não pode investir muito agora.</p>`
            );
        }

        // Senão → Formação completa
        return resultadoFormacao(
            'Seu próximo passo tá aqui',
            montarContextoDecidi(),
            `<p>A Virtap tem uma formação completa que te prepara do zero, com acompanhamento de especialistas por 12 meses.</p>
             <p>É o caminho certo pra quem quer construir uma carreira sólida como AV.</p>`
        );
    }

    // ─── FLOW 3: Já sou AV ───────────────────────────────────────────────────
    if (state.flow === 'growth') {
        const dor = state.incomodaAV;
        const fat = state.faturamento;

        // Não consigo clientes → Plataforma
        if (dor === 'clientes') {
            return resultadoPlataforma(
                'Existe um caminho que você ainda não viu',
                montarContextoJaSou(),
                `<p>A Virtap tem uma plataforma exclusiva de vagas pra Assistentes Virtuais... bem diferente de tudo que você já deve ter tentado.</p>`
            );
        }

        // Quero escalar + já fatura bem → Mastermind
        if (dor === 'escala' && fat === 'acima-5000') {
            return resultadoMastermind(
                'Tá na hora de escalar de verdade',
                montarContextoJaSou(),
                `<p>O <strong>Mastermind Virtap</strong> é pra AVs que já faturam acima de R$ 5.000 e querem estruturar uma operação consistente. Mentoria estratégica, ambiente de pares e visão de longo prazo.</p>`
            );
        }

        // Rentabilidade OU escala (sem fatura R$5k+) + tem clientes → Especialização
        if ((dor === 'rentabilidade' || dor === 'escala') && fat !== 'sem-clientes') {
            return resultadoEspecializacao(
                'Tá na hora de subir seu posicionamento',
                montarContextoJaSou(),
                `<p>A Virtap tem especializações pra AVs que querem cobrar por valor, não por hora. A <strong>Assessoria Pessoal</strong>, em especial, é a porta pra clientes que pagam melhor e exigem mais profundidade.</p>`
            );
        }

        // Resto (insegurança, precificação, profissionalização, sem clientes...) → Formação
        return resultadoFormacao(
            'Vamos consolidar sua base',
            montarContextoJaSou(),
            `<p>A Virtap tem uma formação completa pra AVs que querem se profissionalizar de verdade — com acompanhamento de especialistas por 12 meses e ferramentas práticas pra você atuar com segurança.</p>`
        );
    }

    // fallback
    return resultadoCursoGratuito('Comece por aqui', '<p>Preparamos o melhor caminho pra você.</p>');
}

// ─── HELPERS DE CONTEXTO ──────────────────────────────────────────────────────

function montarContextoDecidi() {
    const situacoes = {
        clt: 'Você trabalha CLT e tá pronta pra construir um caminho novo',
        autonoma: 'Você já trabalha por conta e quer mais solidez',
        desempregada: 'Você tá em transição e quer construir algo seu',
        aposentada: 'Você tá em uma nova fase e quer continuar ativa',
    };
    return `<p>${situacoes[state.situacao] || 'Você decidiu seguir o caminho de AV'}. A gente entende esse momento.</p>`;
}

function montarContextoJaSou() {
    const dores = {
        clientes: 'Você já sabe atender, só falta acesso a cliente de qualidade',
        inseguranca: 'Você quer atuar com mais segurança e fundamento',
        precificacao: 'Você quer cobrar pelo valor que entrega, não pelo tempo',
        profissionalizacao: 'Você quer dar um próximo passo na sua profissionalização',
        rentabilidade: 'Você quer trabalhar menos e ganhar mais',
        escala: 'Você quer crescer e escalar sua atuação',
    };
    return `<p>${dores[state.incomodaAV] || 'Você já atua como AV'}. Faz total sentido procurar o próximo passo.</p>`;
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

function resultadoPrograma30Dias(titulo, contexto, corpo) {
    return {
        destino: 'programa-30dias',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Conhecer o programa', PATHS.programa30dias, 'programa-30dias'),
    };
}

function resultadoFormacao(titulo, contexto, corpo) {
    return {
        destino: 'formacao',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Quero ver como funciona', PATHS.formacaoAV, 'formacao-av'),
    };
}

function resultadoPlataforma(titulo, contexto, corpo) {
    return {
        destino: 'plataforma',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Conhecer a Plataforma de Vagas', PATHS.acessoVirtap, 'plataforma-vagas'),
    };
}

function resultadoEspecializacao(titulo, contexto, corpo) {
    return {
        destino: 'especializacao',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Conhecer a Especialização', PATHS.especializacao, 'especializacao-assessoria-pessoal'),
    };
}

function resultadoMastermind(titulo, contexto, corpo) {
    return {
        destino: 'mastermind',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Conhecer o Mastermind', PATHS.mastermind, 'mastermind'),
    };
}

// ─── CTA BUTTON ───────────────────────────────────────────────────────────────

function makeCTA(label, path, campaign) {
    const link = getLink(path, campaign);
    return `<button class="next-btn" onclick="window.location.href='${link}'">${label}</button>`;
}

// ─── PROFILE SLUG ─────────────────────────────────────────────────────────────
// Formato: <flow>_<campo1>_<campo2>_..._<campoN>
// Separador "_" (underscore) pra não conflitar com hífens dentro dos valores.
// Campos não preenchidos viram "na" pra manter posições estáveis.
function getProfileSlug() {
    if (!state.flow) return '';

    const schema = PROFILE_SCHEMAS[state.flow];
    if (!schema) return state.flow;

    const parts = [state.flow];
    schema.forEach(field => {
        const value = state[field];
        parts.push(value || PROFILE_NA);
    });

    let x = parts.join(PROFILE_SEP);
    let u = parseProfileSlug(x);
    console.log(u);
    return x;
}

// ─── LINK BUILDER (UTM + profile separados) ───────────────────────────────────
function getLink(path, campaign) {
    const utm = getUTMParams();
    const params = new URLSearchParams();
    const profile = getProfileSlug();

    // UTM (acquisition apenas)
    if (utm.has_utm) {
        const s = getNullableValue(utm.utm_last.utm_source);
        const m = getNullableValue(utm.utm_last.utm_medium);
        const c = getNullableValue(utm.utm_last.utm_campaign);
        const ct = getNullableValue(utm.utm_last.utm_content);
        const t = getNullableValue(utm.utm_last.utm_term);
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
        if (profile) {
            // fixme: remove later...
            params.set('utm_term', profile);
        }
    }

    // Profile (param dedicado, separado de UTM)
    if (profile) {
        params.set('profile', profile);
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
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
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

// ─── HANDLER ESPECIAL DO P0 ──────────────────────────────────────────────────
// O P0 escolhe o flow. Quando selecionada, transição pro primeiro step do flow.
// selectOption original já grava em state.flow, depois advance() detecta
// flowIndex === -1 e arranca.

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderStep('p0');
});

try { console.log(getUTMParams()); } catch { }

function parseProfileSlug(slug) {
    function isEmpty(str) {
        return (
            str === undefined ||
            str === null ||
            typeof str !== 'string' ||
            str.trim().length === 0
        );
    }

    const PROFILE_SCHEMAS = {
        explore: ['origin', 'situation', 'area', 'pain', 'income'],
        build: ['origin', 'situation', 'area', 'pain', 'objection', 'income'],
        growth: ['journey', 'area', 'origin', 'pain', 'income'],
    };

    const PROFILE_SEP = '_';
    const PROFILE_NA = 'na';

    try {
        if (isEmpty(slug)) {
            return null;
        }

        const parts = slug.split(PROFILE_SEP);
        const flow = parts[0] && parts[0].trim();

        if (isEmpty(flow)) {
            return null;
        }

        const schema = PROFILE_SCHEMAS[flow];

        if (!schema) {
            return null;
        }

        // Deve ter exatamente: 1 (flow) + N campos
        if (parts.length !== schema.length + 1) {
            return null;
        }

        const profile = {
            flow: flow
        };

        schema.forEach(function (field, index) {
            const value = parts[index + 1] && parts[index + 1].trim();

            profile[field] =
                (value === PROFILE_NA || isEmpty(value))
                    ? null
                    : value;
        });

        return profile;
    } catch (e) {
        return null;
    }
}