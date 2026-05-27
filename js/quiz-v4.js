// ═════════════════════════════════════════════════════════════════════════════
// VIRTAP QUIZ V4
// 3 caminhos: explore | build | growth
// ═════════════════════════════════════════════════════════════════════════════

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const PATHS = {
    cursoGratuito: '/curso-assistente-virtual',
    programa30dias: '/do-zero-ao-primeiro-cliente',
    formacaoAV: '/formacoes/assistencia-virtual',
    acessoVirtap: '/vagas-assistente-virtual/como-acessar',
    especializacao: '/formacoes/assistencia-pessoal',
    mastermind: 'https://docs.google.com/forms/d/e/1FAIpQLSd4d08MvexaQzMcjqUxjwmgrYLvuGqmHXGqkElLeWpSTJlvFg/viewform'
};

// Endpoint pra captura de lead nos flows build/growth (antes do resultado)
const LEAD_CAPTURE_ENDPOINT = '/signup-quiz';

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
            { value: 'build', label: 'Conheço a profissão e já decidi que quero começar' },
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
            { value: 'secretariado-executivo', label: 'Secretariado Executivo' },
            { value: 'atendimento', label: 'Atendimento e suporte ao cliente' },
            { value: 'administrativo-financeiro', label: 'Administrativo e financeiro' },
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
                    { value: 'renda-insuficiente', label: 'Não ter renda' },
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
            const opts = [
                { value: 'nao-sei-comecar', label: 'Não sei por onde começar' },
            ];

            if (s.situacao === 'desempregada') {
                opts.push({ value: 'sem-investimento', label: 'Não posso investir muito agora' });
            }
            if (s.situacao === 'clt') {
                opts.push({ value: 'medo-instabilidade', label: 'Não posso largar meu emprego agora' });
            }
            if (s.situacao === 'autonoma') {
                opts.push({ value: 'medo-transicao', label: 'Tenho receio de trocar o certo pelo duvidoso' });
            }
            if (s.situacao === 'aposentada') {
                opts.push({ value: 'medo-tecnologia', label: 'Tenho medo de não conseguir acompanhar a tecnologia' });
            }

            opts.push(
                { value: 'medo-clientes', label: 'Tenho medo de não conseguir clientes' },
                { value: 'inseguranca-pratica', label: 'Tenho receio de não conseguir colocar em prática' },
                { value: 'pronta', label: 'Estou pronta, só preciso do caminho certo' }
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
            { value: 'administrativo-financeiro', label: 'Administrativo e financeiro' },
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
// 'leadCapture' é um step especial sem entrada em STEPS — renderiza um form
// em vez de botões e captura nome/email/whatsapp antes do resultado.
const FLOWS = {
    explore: ['origem', 'situacao', 'area', 'incomoda', 'renda'],
    build: ['origem', 'situacao', 'area', 'sonho', 'obstaculo', 'renda', 'leadCapture'],
    growth: ['comoComecou', 'areaAV', 'origem', 'incomodaAV', 'faturamento', 'leadCapture'],
};

// ─── PROFILE SLUG SCHEMA ──────────────────────────────────────────────────────
// Define a ordem dos campos no slug por flow. Server usa o MESMO schema
// pra parsear ?profile=... em objeto. leadCapture NÃO entra aqui (não é dado de profile).
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
    // urgencia: null,  // dormente, ativar se reincluir urgenciaIncomodo/urgenciaSonho nos flows
};

// Instância do intlTelInput, inicializada quando o form de captura é renderizado
let leadIntl = null;

// ─── RENDERIZAÇÃO ─────────────────────────────────────────────────────────────

function renderStep(stepId) {
    // Step especial: captura de lead (form, não botões)
    if (stepId === 'leadCapture') {
        renderLeadCaptureForm();
        return;
    }

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

    const isP0 = stepId === 'p0';
    document.getElementById('header-nav').style.display = isP0 ? 'none' : 'flex';

    window.scrollTo(0, 0);
}

function markSelected(el) {
    if (!el) return;
    el.parentNode.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
}

// ─── LEAD CAPTURE ─────────────────────────────────────────────────────────────

function renderLeadCaptureForm() {
    document.getElementById('step-content').innerHTML = `
        <h2>Quase lá! Para ver seu caminho, preencha abaixo:</h2>
        <form id="lead-capture-form" novalidate>
            <input type="text" placeholder="Nome" id="lead-nome" maxlength="30" aria-label="Seu nome">
            <div class="error-message" id="erro-lead-nome" style="margin-top: -0.2rem"></div>

            <input type="text" placeholder="E-mail" id="lead-email" aria-label="Seu melhor email">
            <div class="error-message" id="erro-lead-email" style="margin-top: -0.2rem"></div>

            <input type="text" placeholder="(99) 99999-9999" id="lead-whatsapp" aria-label="Seu whatsapp">
            <div class="error-message" id="erro-lead-whatsapp"></div>

            <button type="submit" class="next-btn">Revelar meu caminho</button>
        </form>
    `;

    // Inicializa intlTelInput pro campo de whatsapp
    const phoneInput = document.getElementById('lead-whatsapp');
    leadIntl = window.intlTelInput(phoneInput, {
        autoInsertDialCode: true,
        initialCountry: 'BR',
        separateDialCode: true,
    });

    // Bind do submit
    document.getElementById('lead-capture-form').addEventListener('submit', handleLeadCapture);

    document.getElementById('header-nav').style.display = 'flex';
    window.scrollTo(0, 0);
}

async function handleLeadCapture(e) {
    e.preventDefault();

    // Limpa mensagens de erro antigas
    document.getElementById('erro-lead-nome').textContent = '';
    document.getElementById('erro-lead-email').textContent = '';
    document.getElementById('erro-lead-whatsapp').textContent = '';
    document.getElementById('lead-nome').classList.remove('input-error');
    document.getElementById('lead-email').classList.remove('input-error');
    document.getElementById('lead-whatsapp').classList.remove('input-error');

    const nome = document.getElementById('lead-nome').value.trim();
    const email = document.getElementById('lead-email').value.trim().toLowerCase();

    let hasError = false;

    // Validação nome
    if (nome.length < 5) {
        document.getElementById('erro-lead-nome').textContent = 'O nome deve ter pelo menos 5 caracteres.';
        document.getElementById('lead-nome').classList.add('input-error');
        hasError = true;
    }

    // Validação email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('erro-lead-email').textContent = 'Digite um e-mail válido (ex: nome@dominio.com).';
        document.getElementById('lead-email').classList.add('input-error');
        hasError = true;
    }

    // Validação whatsapp
    if (!leadIntl || !leadIntl.isValidNumber()) {
        document.getElementById('erro-lead-whatsapp').textContent = 'Digite um número de WhatsApp válido.';
        document.getElementById('lead-whatsapp').classList.add('input-error');
        hasError = true;
    }

    if (hasError) return;

    // Desabilita inputs e botão durante envio
    const form = e.target;
    const inputs = form.querySelectorAll('input, button');
    const button = form.querySelector('button');
    const originalButtonText = button.textContent;

    inputs.forEach(el => el.disabled = true);
    button.textContent = 'Enviando...';

    const body = {
        nome: nome,
        email: email,
        whatsapp: leadIntl.getNumber(),
        flow: state.flow,
        profile: getProfileSlug(),
        utm_params: getUTMParams(),
    };

    try {
        const response = await fetch(`${window.apiURL}${LEAD_CAPTURE_ENDPOINT}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (response.status === 200 || response.status === 201) {
            showResult();
        } else {
            const data = await response.json().catch(() => ({}));
            if (data && data.errorCode === 'ALREADY_REGISTERED') {
                // Lead já existe — segue pro resultado normalmente
                showResult();
            } else {
                throw data;
            }
        }
    } catch (err) {
        // Reabilita inputs e mostra modal de erro
        inputs.forEach(el => el.disabled = false);
        button.textContent = originalButtonText;
        console.error('Lead capture error:', err);
        showErrorModal();
    }
}

function showErrorModal() {
    document.getElementById('error-modal').style.display = 'flex';
}

function closeErrorModal() {
    document.getElementById('error-modal').style.display = 'none';
}

// ─── NAVEGAÇÃO ────────────────────────────────────────────────────────────────

let advanceTimer = null;

function selectOption(field, value, el) {
    state[field] = value;
    markSelected(el);
    if (advanceTimer) clearTimeout(advanceTimer);
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
        // Guard `step &&` protege steps especiais (ex: leadCapture) que não têm entrada em STEPS
        if (step && step.skipFn && step.skipFn(state)) {
            state[step.field] = null; // limpa stale
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
            `<p>Pelas suas respostas, faz sentido começar conhecendo melhor a profissão de <strong>Assistente Virtual</strong> e entendendo se esse caminho combina com o que você busca.</p>
             <p>Preparamos um conteúdo gratuito  pra você entender como esse trabalho funciona na prática e quais são as possibilidades reais de renda e crescimento.</p>
             <p>Se fizer sentido pra você, a gente te ajuda com os próximos passos!</p>`
        );
    }

    // ─── FLOW 2: build ───────────────────────────────────────────────────
    if (state.flow === 'build') {
        const rendaBaixa = ['ate-1800'].includes(state.renda);
        const desempregada = state.situacao === 'desempregada';

        // Programa 30 Dias
        if (desempregada || rendaBaixa) {
            return resultadoPrograma30Dias(
                'Você já decidiu que quer mudar de vida',
                montarContextoDecidi(),
                `<p>Pelas suas respostas, ficou claro que você não está apenas buscando uma forma de ganhar dinheiro. Você quer construir uma carreira com mais liberdade, segurança e propósito.</p>
            <p>Neste momento, o melhor caminho é começar por algo prático e direto ao ponto, focado em te ajudar a entrar na profissão e conquistar seus primeiros resultados.</p>
            <p>A partir daí, você poderá ganhar confiança e dar passos cada vez maiores na construção da vida que deseja.</p>
            <p>Temos um programa perfeito pra você.</p>`
            );
        }

        // Formação completa
        return resultadoFormacaoAV(
            'Você já decidiu que quer mudar de vida',
            montarContextoDecidi(),
            `<p>Pelas suas respostas, ficou claro que você não está apenas pesquisando uma possibilidade.</p>
     <p>Você quer construir uma carreira que te dê mais liberdade, segurança e a chance de conquistar uma renda que faça sentido para a vida que você deseja.</p>
     <p>Pra alcançar isso, o melhor caminho é ter uma base sólida, com método e acompanhamento, para transformar esse projeto em algo real e duradouro.</p>
     <p>Com a orientação certa, você pode encurtar o caminho, evitar erros e alcançar seu objetivo mais rápido.</p>`
        );
    }

    // ─── FLOW 3: growth ───────────────────────────────────────────────────
    if (state.flow === 'growth') {
        const area = state.area;
        const dor = state.incomodaAV;
        const fat = state.faturamento;

        // Não consigo clientes
        if (dor === 'clientes') {
            return resultadoPlataforma(
                'Você precisa de clientes!',
                montarContextoJaSou(),
                `<p>Pelas suas respostas, o principal desafio não é mais aprender a profissão, mas encontrar oportunidades e se conectar com clientes com potencial real de contratação.</p>
                 <p>A gente consegue te ajudar com isso!</p>`
            );
        }

        // Mastermind
        if (dor === 'escala' && fat === 'acima-5000') {
            return resultadoMastermind(
                'Você está pronta para um novo nível de crescimento',
                montarContextoJaSou(),
                `<p>Pelas suas respostas, você já construiu uma base sólida e agora o desafio é estruturar seu crescimento de forma mais estratégica.</p>
                <p>Esse é o momento de pensar em posicionamento, eficiência e expansão, para aumentar resultados sem depender apenas de mais horas de trabalho.</p>
                <p>Participe do nosso grupo exclusivo apenas para AVs que se encontram neste patamar.</p>`
            );
        }

        // Especialização
        if ((dor === 'rentabilidade' || dor === 'escala') && fat !== 'sem-clientes') {

            if (area === 'assistencia-pessoal') {
                // Formação AP
                return resultadoFormacaoAP(
                    'Alcance um novo patamar',
                    montarContextoJaSou(),
                    `<p>Pelas suas respostas, o mais importante agora é consolidar conhecimentos, ganhar mais segurança e estruturar melhor sua atuação.</p>
                 <p>Com a orientação certa, você pode encurtar o caminho, evitar erros e ir para um próximo nível mais rápido.</p>`
                );

            } else {
                // Especialização
                return resultadoEspecializacao(
                    'O caminho agora é elevar seu posicionamento',
                    montarContextoJaSou(),
                    `<p>Pelas suas respostas, ficou claro que você já possui experiência e está pronta para atuar em um nível mais estratégico e valorizado.</p>
                <p>Existe uma especialização que pode te preparar para atender clientes mais exigentes e conquistar oportunidades mais qualificadas e ganhos significativamente maiores.</p>`
                );
            }
        }

        if (area === 'assistencia-pessoal') {
            // Formação AP
            return resultadoFormacaoAP(
                'Alcance um novo patamar',
                montarContextoJaSou(),
                `<p>Pelas suas respostas, o mais importante agora é consolidar conhecimentos, ganhar mais segurança e estruturar melhor sua atuação.</p>
             <p>Com a orientação certa, você pode encurtar o caminho, evitar erros e ir para um próximo nível mais rápido.</p>`
            );

        } else {
            // Formação AV
            return resultadoFormacaoAV(
                'Alcance um novo patamar',
                montarContextoJaSou(),
                `<p>Pelas suas respostas, o mais importante agora é consolidar conhecimentos, ganhar mais segurança e estruturar melhor sua atuação.</p>
             <p>Com a orientação certa, você pode encurtar o caminho, evitar erros e ir para um próximo nível mais rápido.</p>`
            );
        }
    }

    // fallback
    return resultadoCursoGratuito(
        'Existe um caminho que faz sentido para você',
        '<p>Pelas suas respostas, o mais importante agora é seguir um próximo passo claro e alinhado ao momento que você está vivendo.</p>'
    );
}

// ─── HELPERS DE CONTEXTO ──────────────────────────────────────────────────────

function montarContextoDecidi() {
    return '';
}

function montarContextoJaSou() {
    return '';
}

// ─── TEMPLATES DE RESULTADO ───────────────────────────────────────────────────

function resultadoCursoGratuito(titulo, corpo) {
    return {
        destino: 'curso-gratuito',
        titulo,
        mensagem: corpo,
        btn: makeCTA('👉 Acessar o material gratuito', PATHS.cursoGratuito, 'curso-gratuito'),
    };
}

function resultadoPrograma30Dias(titulo, contexto, corpo) {
    return {
        destino: 'programa-30dias',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Conhecer o programa', PATHS.programa30dias, 'primeiro-cliente-av'),
    };
}

function resultadoFormacaoAV(titulo, contexto, corpo) {
    return {
        destino: 'formacao',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Quero ver como funciona', PATHS.formacaoAV, 'formacao-av'),
    };
}

function resultadoFormacaoAP(titulo, contexto, corpo) {
    return {
        destino: 'formacao',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Quero ver como funciona', PATHS.especializacao, 'formacao-ap'),
    };
}

function resultadoPlataforma(titulo, contexto, corpo) {
    return {
        destino: 'plataforma',
        titulo,
        mensagem: contexto + corpo,
        btn: makeCTA('👉 Conheça nossa Plataforma de Clientes', PATHS.acessoVirtap, 'plataforma-vagas'),
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
        btn: makeCTA('👉 Ir para o Grupo', PATHS.mastermind, 'mastermind'),
    };
}

// ─── CTA BUTTON ───────────────────────────────────────────────────────────────

function makeCTA(label, path, campaign) {
    const link = getLink(path, campaign);
    return `<button class="next-btn" onclick="window.location.href='${link}'">${label}</button>`;
}

// ─── PROFILE SLUG ─────────────────────────────────────────────────────────────
// Formato: <flow>_<campo1>_<campo2>_..._<campoN>
function getProfileSlug() {
    if (!state.flow) return '';

    const schema = PROFILE_SCHEMAS[state.flow];
    if (!schema) return state.flow;

    const parts = [state.flow];
    schema.forEach(field => {
        const value = state[field];
        parts.push(value || PROFILE_NA);
    });

    return parts.join(PROFILE_SEP);
}

// ─── LINK BUILDER (UTM + profile separados) ───────────────────────────────────
function getLink(path, campaign) {
    const utm = getUTMParams();
    const params = new URLSearchParams();
    const profile = getProfileSlug();

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
    }

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

// ─── ERROR MODAL CLICK-OUTSIDE SHAKE ─────────────────────────────────────────
// Quando user clica fora do modal de erro, dá um shake em vez de fechar
window.addEventListener('click', function (event) {
    const modal = document.getElementById('error-modal');
    if (!modal) return;
    const content = modal.querySelector('.modal-content');
    if (modal.style.display === 'flex' && content && !content.contains(event.target)) {
        content.classList.add('shake');
        setTimeout(() => content.classList.remove('shake'), 400);
    }
});

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderStep('p0');
});

try { console.log(getUTMParams()); } catch { }

