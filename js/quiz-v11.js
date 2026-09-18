// ═════════════════════════════════════════════════════════════════════════════
// VIRTAP QUIZ V11
// 3 caminhos: explore | build | build-v2 | growth
// ═════════════════════════════════════════════════════════════════════════════
// ─── CONFIG ───────────────────────────────────────────────────────────────────
const PATHS = {
    cursoGratuito: '/curso-assistente-virtual',
    programa30dias: '/do-zero-ao-primeiro-cliente',
    formacaoAV: '/formacoes/assistencia-virtual',
    acessoVirtap: '/vagas-assistente-virtual/como-acessar',
    mastermind: 'https://docs.google.com/forms/d/e/1FAIpQLSd4d08MvexaQzMcjqUxjwmgrYLvuGqmHXGqkElLeWpSTJlvFg/viewform',
    youtube: 'https://www.youtube.com/@virtapbr',
    // Curso gratuito no YouTube pra quem veio de IA (explore ou build) — vai direto
    // pro vídeo, sem passar por lead capture nem por página interna.
    cursoGratuitoYoutubeIA: 'https://www.youtube.com/watch?v=Ey4k5g8YdNc&list=PLmT3PVFu-ntGYrfWjYUQ1eILXXHSyU1eP&index=2'
};
// Endpoint pra captura de lead nos flows build/growth (antes do resultado)
const LEAD_CAPTURE_ENDPOINT = '/signup-quiz';
// ─── VERSÃO DO BUILD (A/B) ────────────────────────────────────────────────────
// Controla quem cai em 'build' (original) vs 'build-v2' (novo) quando a pessoa
// escolhe a opção "Já sei como funciona e quero começar" no P0.
// - 'v1' / 'v2': força todo mundo pra uma versão específica.
// - 'split': divide por porcentagem (BUILD_V2_PERCENT define a fatia do v2).
// Override manual pra QA/teste de link: ?build=v2 ou ?build=v1 na URL.
const BUILD_VERSION = 'split'; // 'v1' | 'v2' | 'split'
const BUILD_V2_PERCENT = 0.5; // usado só quando BUILD_VERSION === 'split'
function resolveBuildFlow() {
    const params = new URLSearchParams(window.location.search);
    const override = params.get('build');
    if (override === 'v2') return 'build-v2';
    if (override === 'v1') return 'build';
    if (BUILD_VERSION === 'v2') return 'build-v2';
    if (BUILD_VERSION === 'v1') return 'build';
    // split
    return Math.random() < BUILD_V2_PERCENT ? 'build-v2' : 'build';
}
// TODO: revisar a mensagem
const WHATSAPP = {
    numero: '5548988089062',
    mensagens: {
        generalista: 'Olá! Fiz o quiz da Virtap e quero saber mais sobre a Formação AV.',
        assessoria: 'Olá! Fiz o quiz da Virtap e quero saber mais sobre a Especialização em Assessoria Pessoal.',
        growth: 'Olá, já trabalho como AV e quero saber mais sobre a Virtap.',
    },
};
// ─── PREÇOS E ORÇAMENTO (build-v2) ────────────────────────────────────────────
// Preço NUMÉRICO de cada produto associado a `busca` — usado só pra
// comparações matemáticas (cabeNoOrcamento, produtoMaisBaratoQueCabe).
// NUNCA usar isso pra exibir texto — pra isso existe PRECO_EXIBICAO abaixo.
const PRECO_PRODUTO = {
    comecar: 197,
    profissionalizar: 797,
    especializar: 1497,
};
// Texto de exibição de cada preço (o que aparece nas mensagens/corpo) — pode
// ter parcelamento, "à vista", etc. Só pra exibição, nunca pra comparação.
const PRECO_EXIBICAO = {
    comecar: '197',
    profissionalizar: '797 à vista ou 12x de R$ 79,90',
    especializar: '1497 à vista ou 12x de 149,90',
};
// Nome de exibição do produto, usado nas mensagens de WhatsApp e na tela de
// descompasso orçamento x produto pedido.
const NOME_PRODUTO = {
    comecar: 'Programa 30 dias',
    profissionalizar: 'Formação em Assistência Virtual',
    especializar: 'Formação em Assessoria Pessoal (AExpert)',
};
// Artigo definido de cada produto, pra concordância correta nas frases
// (masculino pro Programa, feminino pra Formação/Assessoria).
const ARTIGO_PRODUTO = {
    comecar: 'o',
    profissionalizar: 'a',
    especializar: 'a',
};
// Descrição curta de cada produto, usada pra dar contexto na tela de
// descompasso — ela ainda não conhece nenhum desses produtos.
const DESCRICAO_PRODUTO = {
    comecar: 'um programa prático e direto ao ponto, focado em te ajudar a conquistar seus primeiros trabalhos.',
    profissionalizar: 'uma formação completa pra você se profissionalizar e atuar com diferentes tipos de serviços como Assistente Virtual.',
    especializar: 'uma especialização focada em Assessoria Pessoal, pra atender clientes mais exigentes e conquistar oportunidades mais qualificadas.',
};
// Teto de cada faixa de orçamento (o que ela indicou que pode investir agora).
const TETO_ORCAMENTO = {
    'menos-200': 200,
    'ate-1000': 1000,
    'acima-1000': Infinity,
};
// Cabe no orçamento? Compara o preço NUMÉRICO do produto pedido (busca) com
// o teto da faixa de orçamento escolhida.
function cabeNoOrcamento(state) {
    const preco = PRECO_PRODUTO[state.busca];
    const teto = TETO_ORCAMENTO[state.orcamento];
    return preco <= teto;
}
// Dado um orçamento, qual é o produto mais completo que ainda cabe nele?
// Usada na tela de descompasso, quando ela escolhe "ver opção que cabe" —
// o produto certo depende da faixa (pode ser Programa 30 dias OU Formação
// AV, não é sempre o mais barato de todos).
function produtoMaisBaratoQueCabe(orcamento) {
    const teto = TETO_ORCAMENTO[orcamento];
    if (teto >= PRECO_PRODUTO.especializar) return 'especializar';
    if (teto >= PRECO_PRODUTO.profissionalizar) return 'profissionalizar';
    return 'comecar';
}
// ─── STEPS (questões) ─────────────────────────────────────────────────────────
// Cada step define: title, field (nome no state), e options (estático) ou
// optionsFn(state) (dinâmico baseado em respostas anteriores).
const STEPS = {
    // P0 — Ponto de partida
    p0: {
        title: 'Em qual momento você está?',
        field: 'flow',
        options: [
            { value: 'explore', label: 'Quero entender como funciona a profissão de Assistente Virtual' },
            { value: 'build', label: 'Quero começar a trabalhar como Assistente Virtual' },
            { value: 'growth', label: 'Já trabalho como Assistente Virtual' },
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
            { value: 'administrativo', label: 'Administrativo' },
            { value: 'financeiro', label: 'Financeiro' },
            { value: 'comercial', label: 'Comercial e vendas' },
            { value: 'marketing', label: 'Marketing e redes sociais' },
            { value: 'nenhuma', label: 'Nenhuma dessas' },
        ],
    },
    busca: {
        title: 'Qual desses caminhos faz mais sentido pra você agora?',
        field: 'busca',
        options: [
            { value: 'comecar', label: 'Quero um caminho simples para conseguir meus primeiros trabalhos' },
            { value: 'profissionalizar', label: 'Quero me profissionalizar e atuar com diferentes tipos de serviços' },
            { value: 'especializar', label: 'Quero me especializar em Assessoria Pessoal' },
        ],
    },
    // ─── build-v2: quer investir + quanto pode investir, numa pergunta só ────
    // Substitui o antigo step 'investe' no build-v2 (o growth continua usando
    // 'investe' normalmente). selectOption() trata esse campo de forma especial:
    // preenche state.investe ('quer'/'nao-quer') e state.orcamento juntos.
    investeOrcamento: {
        title: 'Quanto você pode investir para avançar mais rápido na sua carreira?',
        field: 'investeOrcamento',
        options: [
            { value: 'nao-quer', label: 'Não pretendo investir agora' },
            { value: 'menos-200', label: 'Menos de R$ 200' },
            { value: 'ate-1000', label: 'Até R$ 1.000' },
            { value: 'acima-1000', label: 'Acima de R$ 1.000' },
        ],
    },
    // ─── build-v2: tela de descompasso orçamento x produto pedido ───────────
    // Só aparece quando o preço do produto de `busca` não cabe no orçamento
    // (skipFn pula quando cabeNoOrcamento() já é true). Título e corpo dão
    // contexto dos dois produtos (ela ainda não conhece nenhum). As opções
    // já levam o link do destino (opt.link) — clicar navega direto pro LP
    // ou pro WhatsApp, sem passar por uma tela de resultado repetindo tudo.
    confirmaOrcamento: {
        field: 'confirmaOrcamento',
        skipFn: (s) => cabeNoOrcamento(s),
        title: 'Escolha a melhor opção para você',
        corpoFn: (s) => {
            const nomePedido = NOME_PRODUTO[s.busca];
            const artigoPedido = ARTIGO_PRODUTO[s.busca];
            const precoPedido = PRECO_EXIBICAO[s.busca];
            const descPedido = DESCRICAO_PRODUTO[s.busca];
            const produtoCabe = produtoMaisBaratoQueCabe(s.orcamento);
            const nomeCabe = NOME_PRODUTO[produtoCabe];
            const artigoCabe = ARTIGO_PRODUTO[produtoCabe];
            const descCabe = DESCRICAO_PRODUTO[produtoCabe];
            return `
                <p>Pelo que você nos contou, a opção que atende exatamente o que você busca é ${artigoPedido} <strong>${nomePedido}</strong>, ${descPedido}</p>
                <p>O investimento é de <strong>R$ ${precoPedido}</strong>, um pouco além da faixa que você indicou.</p>
                <p>Dentro do valor que você pode investir agora, o caminho recomendado seria ${artigoCabe} <strong>${nomeCabe}</strong>, ${descCabe}</p>
                <p>O que você prefere?</p>
            `;
        },
        optionsFn: (s) => {
            const nomePedido = NOME_PRODUTO[s.busca];
            const artigoPedido = ARTIGO_PRODUTO[s.busca];
            const precoPedido = PRECO_EXIBICAO[s.busca];
            const produtoCabe = produtoMaisBaratoQueCabe(s.orcamento);
            const nomeCabe = NOME_PRODUTO[produtoCabe];
            const artigoCabe = ARTIGO_PRODUTO[produtoCabe];

            // Link de quem topa ver a opção que cabe: Programa 30 dias (LP)
            // ou Formação AV (WhatsApp), depende da faixa de orçamento.
            const linkCabe = produtoCabe === 'profissionalizar'
                ? linkWhatsapp(WHATSAPP.mensagens.generalista)
                : getLink(PATHS.programa30dias, 'primeiro-cliente-av');

            // Link de quem quer o produto pedido mesmo sabendo do valor —
            // sempre WhatsApp, com mensagem de alta intenção.
            const linkMesmoAssim = linkWhatsapp(
                `Olá! Quero saber mais sobre ${artigoPedido} ${nomePedido}.`
            );

            return [
                { label: `Quero conhecer ${artigoCabe} ${nomeCabe}`, link: linkCabe },
                { label: `Quero saber mais sobre ${artigoPedido} ${nomePedido}`, link: linkMesmoAssim },
            ];
        },
    },
    investe: {
        title: 'Já investiu em treinamentos, cursos online ou mentorias?',
        field: 'investe',
        options: [
            { value: 'investiu-quer', label: 'Já investi e pretendo investir novamente' },
            { value: 'nunca-quer', label: 'Nunca investi, mas pretendo investir agora' },
            { value: 'investiu-naoquer', label: 'Já investi, mas não pretendo investir dessa vez' },
            { value: 'nunca-naoquer', label: 'Nunca investi e não pretendo investir' },
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
            { value: 'escala', label: 'Já faturo bem mas quero crescer ainda mais' },
        ],
    },
    investe: {
        title: 'Já investiu em treinamentos, cursos online ou mentorias?',
        field: 'investe',
        options: [
            { value: 'investiu-quer', label: 'Já investi e quero investir novamente' },
            { value: 'nunca-quer', label: 'Nunca investi, mas quero investir agora' },
            { value: 'investiu-naoquer', label: 'Já investi, mas não pretendo investir dessa vez' },
            { value: 'nunca-naoquer', label: 'Nunca investi e não pretendo investir' },
        ],
    },
    faturamento: {
        title: 'Quanto você fatura hoje como Assistente Virtual?',
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
    // build-v2 simplificado: sem sonho/obstaculo/renda/leadCapture. investeOrcamento
    // substitui 'investe' (decide corte + orçamento numa pergunta só) e
    // confirmaOrcamento só aparece quando o produto pedido não cabe no orçamento.
    'build-v2': ['origem', 'situacao', 'area', 'investeOrcamento', 'busca', 'confirmaOrcamento'],
    growth: ['comoComecou', 'areaAV', 'origem', 'incomodaAV', 'investe', 'faturamento', 'leadCapture'],
};
// ─── PROFILE SLUG SCHEMA ──────────────────────────────────────────────────────
// Define a ordem dos campos no slug por flow. Server usa o MESMO schema
// pra parsear ?profile=... em objeto. leadCapture NÃO entra aqui (não é dado de profile).
const PROFILE_SCHEMAS = {
    explore: ['origem', 'situacao', 'area', 'incomoda', 'renda'],
    build: ['origem', 'situacao', 'area', 'sonho', 'obstaculo', 'renda'],
    'build-v2': ['origem', 'situacao', 'area', 'investe', 'busca', 'orcamento'], // sonho/obstaculo/renda saíram
    growth: ['comoComecou', 'area', 'origem', 'incomodaAV', 'faturamento'],
};
const PROFILE_SEP = '_';
const PROFILE_NA = 'na';
// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
    flow: null,         // explore | build | build-v2 | growth
    flowIndex: -1,      // -1 = no P0, 0+ = dentro do flow
    history: [],        // pilha de steps pra voltar
    // Respostas (uma chave por campo capturado)
    origem: null,
    situacao: null,
    area: null,
    incomoda: null,
    busca: null,
    orcamento: null,
    sonho: null,
    obstaculo: null,
    investe: null,
    renda: null,
    comoComecou: null,
    incomodaAV: null,
    faturamento: null,
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
    const title = typeof step.titleFn === 'function'
        ? step.titleFn(state)
        : step.title;
    // Corpo opcional (parágrafos de contexto entre o título e os botões) —
    // usado hoje só pela tela de descompasso orçamento x produto do build-v2.
    const corpo = typeof step.corpoFn === 'function'
        ? step.corpoFn(state)
        : (step.corpo || '');
    // P0: 'build-v2' deve marcar o mesmo botão que 'build' (é a mesma opção visível pro usuário)
    let currentValue = state[step.field];
    if (stepId === 'p0' && currentValue === 'build-v2') currentValue = 'build';
    const buttonsHtml = options.map(opt => {
        // Opção com link: navega direto pro destino (LP ou WhatsApp), sem
        // passar por selectOption/advance nem por uma tela de resultado no
        // meio — usada na tela de descompasso orçamento x produto (build-v2).
        if (opt.link) {
            return `<button class="option-btn" onclick="window.location.href='${opt.link}'">${opt.label}</button>`;
        }
        const selected = currentValue === opt.value ? ' selected' : '';
        return `<button class="option-btn${selected}" onclick="selectOption('${step.field}','${opt.value}',this)">${opt.label}</button>`;
    }).join('');
    document.getElementById('step-content').innerHTML = `
        <h2>${title}</h2>
        ${corpo}
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
            credentials: 'include'
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
    // P0: se escolheu "build", decide entre 'build' e 'build-v2' (A/B)
    if (field === 'flow' && value === 'build') {
        value = resolveBuildFlow();
    }
    // build-v2: uma pergunta só decide se quer investir E o orçamento
    if (field === 'investeOrcamento') {
        state.investe = value === 'nao-quer' ? 'nao-quer' : 'quer';
        state.orcamento = value === 'nao-quer' ? null : value;
    }
    state[field] = value;
    markSelected(el);
    if (advanceTimer) clearTimeout(advanceTimer);
    advanceTimer = setTimeout(advance, 150);
}
// ─── PREDICADO: perfil é de Assistência/Assessoria Pessoal? ─────────────────
// Única fonte de verdade sobre quando o perfil é de Assistência Pessoal.
// Usada em gerarResultado() pra decidir a mensagem certa — esse perfil vai
// pro WhatsApp igual aos outros.
// Só é confiável depois que os campos usados abaixo já foram respondidos
// (busca/investe pro build-v2; area/incomodaAV/investe/faturamento pro growth).
function isAssistenciaPessoal(state) {
    const naoQuerInvestir = ['investiu-naoquer', 'nunca-naoquer'].includes(state.investe);
    if (naoQuerInvestir) return false;
    if (state.flow === 'build-v2') {
        return state.busca === 'especializar';
    }
    if (state.flow === 'growth') {
        if (state.area !== 'assistencia-pessoal') return false;
        const dor = state.incomodaAV;
        const fat = state.faturamento;
        const faturamentoBaixo = ['sem-clientes', 'ate-1800', '1800-2500'].includes(fat);
        // Sem clientes → vai pra Plataforma, não pro perfil de Assistência Pessoal
        if (dor === 'clientes' || ((dor === 'rentabilidade' || dor === 'escala') && faturamentoBaixo)) return false;
        // Faturamento alto + quer escalar → vai pro Mastermind, não pro perfil de Assistência Pessoal
        if (dor === 'escala' && fat === 'acima-5000') return false;
        return true;
    }
    return false;
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

    // GROWTH: se acabou de responder "disposta" com "não" em 'investe', encerra
    // na hora — sem mais perguntas, sem lead capture.
    if (currentStepId === 'investe' && state.flow === 'growth') {
        const naoQuerInvestir = ['investiu-naoquer', 'nunca-naoquer'].includes(state.investe);
        if (naoQuerInvestir) {
            showResult();
            return;
        }
    }
    // BUILD-V2: mesmo corte, mas a pergunta é 'investeOrcamento' (decide
    // investir + orçamento juntos) e o critério é state.investe === 'nao-quer'.
    if (currentStepId === 'investeOrcamento' && state.flow === 'build-v2' && state.investe === 'nao-quer') {
        showResult();
        return;
    }

    state.flowIndex++;
    const flow = FLOWS[state.flow];

    // Pula steps com skipFn true
    while (state.flowIndex < flow.length) {
        const nextId = flow[state.flowIndex];
        const RENDA_ACIMA_3500 = ['3500-5000', 'acima-5000'];

        // BUILD (original) — NINGUÉM passa pelo leadCapture aqui (era o bug):
        // renda baixa/vazia vai direto pro curso gratuito no YouTube, sem
        // captura; renda >= R$ 3.500 vai direto pro curso gratuito no site
        // (resultadoCursoGratuito), também sem captura.
        if (nextId === 'leadCapture' && state.flow === 'build') {
            if (!RENDA_ACIMA_3500.includes(state.renda)) {
                const link = getLink(PATHS.cursoGratuitoYoutubeIA, 'curso-gratuito-build');
                document.getElementById('step-content').innerHTML = `
                <h2 class="text-center">Você já deu o primeiro passo!</h2>
                <div>
                    <p>Agora é hora de entender melhor como esse mercado funciona e conhecer as possibilidades.</p>
                    <p>Preparamos um conteúdo para ajudar você nessa jornada. Ao final, mostramos os próximos passos para iniciar sua carreira.</p>
                    <button class="next-btn" onclick="window.location.href='${link}'">Acessar o conteúdo</button>
                </div>`;
                document.getElementById('header-nav').style.display = 'flex';
                window.scrollTo(0, 0);
                return;
            }
            // Renda alta — direto pro resultado (curso gratuito no site), sem form.
            showResult();
            return;
        }

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
        const RENDA_ACIMA_3500 = ['3500-5000', 'acima-5000'];
        const origemIaOuTiktok = state.origem === 'ia' || state.origem === 'tiktok';

        // explore + origem IA/TikTok com renda < R$ 3.500 → roteia direto pro
        // curso gratuito no YouTube, em vez da página normal do site.
        if (origemIaOuTiktok && !RENDA_ACIMA_3500.includes(state.renda)) {
            return {
                destino: 'curso-gratuito',
                titulo: 'Comece do jeito certo',
                mensagem: `
                    <p>Pelas suas respostas, vale a pena conhecer melhor a profissão de <strong>Assistente Virtual</strong> e entender se ela combina com você.</p>
                    <p>Preparamos algumas aulas pra você entender como funciona o mercado, as atividades, quanto é possível ganhar e o que você precisa para atuar na área.</p>
                    <p>Se você se identificar com a profissão, no final a gente mostra como você pode começar.</p>
                `,
                btn: makeCTA('👉 Acessar as aulas', PATHS.cursoGratuitoYoutubeIA, 'curso-gratuito'),
            };
        }
        return resultadoCursoGratuito(
            'Comece do jeito certo!',
            `
            <p>Pelas suas respostas, vale a pena conhecer melhor a profissão de <strong>Assistente Virtual</strong> e entender se ela combina com você.</p>
            <p>Preparamos algumas aulas pra você entender como funciona o mercado, as atividades, quanto é possível ganhar e o que você precisa para atuar na área.</p>
            <p>Se você se identificar com a profissão, no final a gente mostra como você pode começar.</p>
     `
        );
    }
    // ─── FLOW 2: build (original) ───────────────────────────────────────
    if (state.flow === 'build') {
        return resultadoCursoGratuito(
            'Você já deu o primeiro passo!',
            `
                 <p>Agora é hora de entender melhor como esse mercado funciona e conhecer as possibilidades.</p>
                 <p>Preparamos um conteúdo para ajudar você nessa jornada. Ao final, mostramos os próximos passos para iniciar sua carreira.</p>`
        );
    }
    // ─── FLOW 2b: build-v2 (novo) ────────────────────────────────────────
    // Sem lead capture — só LP (Programa 30 dias) ou WhatsApp. `orcamento`
    // decide até onde ela pode ir; `busca` decide o que ela quer dentro disso.
    if (state.flow === 'build-v2') {
        // Não quer investir agora → conteúdo gratuito (YouTube)
        if (state.investe === 'nao-quer') {
            return resultadoYoutube(
                'Acompanhe nosso canal no YouTube',
                `<p>Acompanhe o conteúdo gratuito que preparamos para você no YouTube.</p>
                 <p>No nosso canal, você vai encontrar aulas, dicas e orientações para te ajudar ao longo da sua jornada como Assistente Virtual.</p>`
            );
        }
        // Caminho rápido → Programa 30 dias (sempre cabe, sempre LP)
        if (state.busca === 'comecar') {
            return resultadoPrograma30Dias(
                'A melhor opção para você',
                `<p>Pelas suas respostas, o que você mais quer agora é destravar seus primeiros clientes, sem enrolação.</p>
     <p>Por isso, o melhor caminho é um programa prático e direto ao ponto, feito pra te ajudar a sair do zero e conquistar seu primeiro cliente como Assistente Virtual.</p>`
            );
        }
        // profissionalizar ou especializar, cabendo no orçamento → resultado normal
        if (cabeNoOrcamento(state)) {
            if (state.busca === 'especializar') {
                const corpo = `
            <p>Quem atua com Assessoria Pessoal não é apenas alguém que executa tarefas. É uma profissional de confiança, que organiza, antecipa necessidades e contribui para que empresários e executivos tenham mais tempo e produtividade.</p>
            <p>Esse nível de atuação exige visão, proatividade, discrição e preparo para lidar com demandas de maior responsabilidade.</p>
            <p>Preparamos um caminho pra te mostrar como funciona essa atuação, do zero até se posicionar como Assessora Pessoal.</p>`;
                return resultadoWhatsapp(
                    'Assessoria Pessoal é um novo nível de atuação',
                    corpo,
                    WHATSAPP.mensagens.assessoria
                );
            }
            // profissionalizar
            const corpo = `
            <p>Pelas suas respostas, ficou claro que você quer construir uma carreira como Assistente Virtual.</p>
            <p>Para isso, mais do que conhecer a profissão, é importante entender como atender clientes, organizar seu trabalho, definir seus serviços e se posicionar no mercado.</p>
            <p>Uma formação estruturada ajuda você a começar pelo caminho certo, evitar erros comuns e acelerar sua evolução na profissão.</p>`;
            return resultadoWhatsapp(
                'Você quer construir uma carreira como Assistente Virtual',
                corpo,
                WHATSAPP.mensagens.generalista
            );
        }
        // Se chegou aqui, não cabia no orçamento — mas isso já foi resolvido
        // direto na tela confirmaOrcamento (os botões ali navegam pro destino
        // sem passar por aqui). Fica só o fallback genérico como rede de segurança.
    }
    // ─── FLOW 3: growth ───────────────────────────────────────────────────
    // Resultados de "formação" (Formação AV, Especialização e Assistência
    // Pessoal) aqui sempre vão pro WhatsApp — nunca LP. Plataforma e
    // Mastermind continuam como antes.
    if (state.flow === 'growth') {
        const dor = state.incomodaAV;
        const fat = state.faturamento;

        const naoQuerInvestir = ['investiu-naoquer', 'nunca-naoquer'].includes(state.investe);
        if (naoQuerInvestir) {
            return resultadoSemFit();
        }

        // Não consigo clientes: dor explícita, OU dor de escala/rentabilidade sem nenhum cliente ainda
        const faturamentoBaixo = ['sem-clientes', 'ate-1800', '1800-2500'].includes(fat);
        if (dor === 'clientes' || ((dor === 'rentabilidade' || dor === 'escala') && faturamentoBaixo)) {
            return resultadoPlataforma(
                'Você precisa de clientes!',
                `<p>Pelas suas respostas, o principal desafio não é mais aprender a profissão, mas encontrar oportunidades e se conectar com clientes com potencial real de contratação.</p>
             <p>A gente consegue te ajudar com isso!</p>`
            );
        }
        // Mastermind
        if (dor === 'escala' && fat === 'acima-5000') {
            return resultadoMastermind(
                'Você está pronta para um novo nível de crescimento',
                `<p>Pelas suas respostas, você já construiu uma base sólida e agora o desafio é estruturar seu crescimento de forma mais estratégica.</p>
            <p>Esse é o momento de pensar em posicionamento, eficiência e expansão, para aumentar resultados sem depender apenas de mais horas de trabalho.</p>
            <p>Participe do nosso grupo exclusivo apenas para AVs que se encontram neste patamar.</p>`
            );
        }
        // Especialização (aqui fat nunca é 'sem-clientes' pra escala/rentabilidade, já foi capturado acima)
        if (dor === 'rentabilidade' || dor === 'escala') {
            if (isAssistenciaPessoal(state)) {
                // Assistência Pessoal — sempre WhatsApp, nunca LP.
                return resultadoWhatsapp(
                    'Alcance um novo patamar',
                    `<p>Pelas suas respostas, o mais importante agora é consolidar conhecimentos, ganhar mais segurança e estruturar melhor sua atuação em Assistência Pessoal.</p>
             <p>Preparamos um caminho pra te mostrar como elevar seu posicionamento e seus ganhos nessa área.</p>`,
                    WHATSAPP.mensagens.growth
                );
            } else {
                // Especialização — flow growth vai sempre pro WhatsApp, nunca LP.
                return resultadoWhatsapp(
                    'O caminho agora é elevar seu posicionamento',
                    `<p>Pelas suas respostas, ficou claro que você já possui experiência e está pronta para atuar em um nível mais estratégico e valorizado.</p>
            <p>Existe uma especialização que pode te preparar para atender clientes mais exigentes e conquistar oportunidades mais qualificadas e ganhos significativamente maiores.</p>`,
                    WHATSAPP.mensagens.growth
                );
            }
        }
        // Fallback: inseguranca, precificacao, profissionalizacao (com ou sem clientes)
        if (isAssistenciaPessoal(state)) {
            // Assistência Pessoal — sempre WhatsApp, nunca LP.
            return resultadoWhatsapp(
                'Alcance um novo patamar',
                `<p>Pelas suas respostas, o mais importante agora é consolidar conhecimentos, ganhar mais segurança e estruturar melhor sua atuação em Assistência Pessoal.</p>
         <p>Preparamos um caminho pra te mostrar o passo certo pra crescer nessa área.</p>`,
                WHATSAPP.mensagens.growth
            );
        } else {
            // Formação AV — flow growth vai sempre pro WhatsApp, nunca LP.
            return resultadoWhatsapp(
                'Alcance um novo patamar',
                `<p>Pelas suas respostas, o mais importante agora é consolidar conhecimentos, ganhar mais segurança e estruturar melhor sua atuação.</p>
         <p>Com a orientação certa, você pode encurtar o caminho, evitar erros e ir para um próximo nível mais rápido.</p>`,
                WHATSAPP.mensagens.growth
            );
        }
    }
    // fallback
    return resultadoCursoGratuito(
        'Existe um caminho que faz sentido para você',
        '<p>Pelas suas respostas, o mais importante agora é seguir um próximo passo claro e alinhado ao momento que você está vivendo.</p>'
    );
}
// ─── TEMPLATES DE RESULTADO ───────────────────────────────────────────────────
function resultadoCursoGratuito(titulo, corpo) {
    return {
        destino: 'curso-gratuito',
        titulo,
        mensagem: corpo,
        btn: makeCTA('👉 Acessar o conteúdo', PATHS.cursoGratuito, 'curso-gratuito'),
    };
}


function resultadoYoutube(titulo, corpo) {
    return {
        destino: 'youtube',
        titulo,
        mensagem: corpo,
        btn: makeCTA('👉 Acessar o canal no YouTube', PATHS.youtube, 'youtube-build-v2'),
    };
}

function resultadoPrograma30Dias(titulo, corpo) {
    return {
        destino: 'programa-30dias',
        titulo,
        mensagem: corpo,
        btn: makeCTA('👉 Conhecer o programa', PATHS.programa30dias, 'primeiro-cliente-av'),
    };
}
function resultadoFormacaoAV(titulo, corpo) {
    return {
        destino: 'formacao',
        titulo,
        mensagem: corpo,
        btn: makeCTA('👉 Quero conhecer a Formação', PATHS.formacaoAV, 'formacao-av'),
    };
}
function resultadoPlataforma(titulo, corpo) {
    return {
        destino: 'plataforma',
        titulo,
        mensagem: corpo,
        btn: makeCTA('👉 Conheça nossa Plataforma de Clientes', PATHS.acessoVirtap, 'plataforma-vagas'),
    };
}
// Monta o link do WhatsApp já com a mensagem certa. build-v2 não tem lead
// capture, então a mensagem carrega o perfil (mesmo formato do slug
// ?profile=... que já vai nos links de LP) pra quem for atender já ter o
// contexto sem perguntar de novo.
function linkWhatsapp(mensagem) {
    const mensagemFinal = state.flow === 'build-v2'
        ? `${mensagem}\#${getProfileSlug()}`
        : mensagem;
    return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensagemFinal)}`;
}
function resultadoWhatsapp(titulo, corpo, mensagem) {
    const link = linkWhatsapp(mensagem);
    return {
        destino: 'whatsapp',
        titulo,
        mensagem: corpo,
        btn: `<button class="next-btn" onclick="window.location.href='${link}'">👉 Fale com a gente no WhatsApp</button>`,
    };
}
function resultadoMastermind(titulo, corpo) {
    return {
        destino: 'mastermind',
        titulo,
        mensagem: corpo,
        btn: makeCTA('👉 Ir para o Grupo', PATHS.mastermind, 'mastermind'),
    };
}

function resultadoSemFit() {
    return {
        destino: 'sem-fit',
        titulo: 'No momento, não temos um programa adequado para o seu perfil',
        mensagem: `<p>Nosso foco é ajudar Assistentes Virtuais que desejam se profissionalizar e investir no próprio crescimento.</p>`,
        btn: '',
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
    // Alguns PATHS (ex: link direto de vídeo do YouTube) já vêm com '?' e outros
    // params na URL — nesse caso usa '&' pra não gerar um '?' duplicado.
    const separator = path.includes('?') ? '&' : '?';
    return path + separator + params.toString();
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