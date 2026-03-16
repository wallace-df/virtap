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
    const unanime       = p2 === p3;
    const secundario    = p2 === perfil ? p3 : p2;

    const incluso = `\n\nAh, e tem algo importante: na formação, todas as competências estão inclusas — Suporte, Administrativo e AP. Não importa onde você está hoje. Se precisar desenvolver, a gente desenvolve juntas. Se já tiver bagagem, a gente estrutura e potencializa.`;

    let copy = '';

    // ─────────────────────────────────────────────────────────────────────────
    // DESEJO: AP
    // ─────────────────────────────────────────────────────────────────────────
    if (desejoFinal === 'AP') {

        if (exp === 'elite') {

            if (perfil === 'AP' && unanime) {
                // ✅ Match total: bagagem elite + perfil 100% AP
                copy = `TODO: bagagem de secretária executiva confirmada + perfil unânime AP → já tem tudo, só precisa estruturar para o digital. Tom: confirmação e posicionamento no topo.`;

            } else if (perfil === 'AP' && secundario === 'AA') {
                // ✅ Match forte: bagagem elite + AP predominante + traço AA reforça
                copy = `TODO: bagagem de secretária executiva + AP predominante com traço de organização (AA) → base real, traço AA é complementar e reforça o perfil AP. Tom: bagagem confirmada, afinar autonomia estratégica.`;

            } else if (perfil === 'AP' && secundario === 'SR') {
                // ✅ Match forte: bagagem elite + AP predominante + traço SR reforça
                copy = `TODO: bagagem de secretária executiva + AP predominante com traço de comunicação (SR) → base real, traço SR adiciona empatia valiosa. Tom: bagagem confirmada, afinar decisão estratégica.`;

            } else if (perfil === 'AA') {
                // ⚠️ Gap: bagagem elite mas perfil esfriou para AA
                copy = `TODO: bagagem de secretária executiva + perfil atual AA → já operou nesse nível mas esfriou. Tom: reconectar com o perfil que já foi seu, não construir do zero.`;

            } else if (perfil === 'SR') {
                // ⚠️ Gap: bagagem elite mas perfil esfriou para SR
                copy = `TODO: bagagem de secretária executiva + perfil atual SR → já operou nesse nível mas esfriou. Tom: reconectar com o perfil que já foi seu, não construir do zero.`;
            }

        } else if (exp === 'atendimento') {

            if (perfil === 'AP' && unanime) {
                // ✅ Match total: atendimento + perfil 100% AP
                copy = `TODO: experiência em atendimento + perfil unânime AP → sabe ler pessoas e já age com autonomia. Tom: confirmação, estruturar para o digital.`;

            } else if (perfil === 'AP' && secundario === 'AA') {
                // ✅ Match forte: atendimento + AP predominante + traço AA reforça
                copy = `TODO: experiência em atendimento + AP predominante com traço AA → instinto certo + organização complementar. Tom: reforçar autonomia estratégica, traço AA é vantagem.`;

            } else if (perfil === 'AP' && secundario === 'SR') {
                // ✅ Match forte: atendimento + AP predominante + traço SR reforça
                copy = `TODO: experiência em atendimento + AP predominante com traço SR → instinto certo + comunicação complementar. Tom: desenvolver decisão estratégica, traço SR é vantagem.`;

            } else if (perfil === 'AA') {
                // ⚠️ Gap: atendimento + perfil AA → precisa desenvolver autonomia
                copy = `TODO: experiência em atendimento + perfil AA → opera mais em organização do que antecipação. Tom: gap real mas treinável, formação resolve.`;

            } else if (perfil === 'SR') {
                // ⚠️ Gap: atendimento + perfil SR → precisa desenvolver estratégia
                copy = `TODO: experiência em atendimento + perfil SR → opera mais em comunicação do que decisão estratégica. Tom: gap real mas treinável, base de atendimento é vantagem.`;
            }

        } else if (exp === 'adm') {

            if (perfil === 'AP' && unanime) {
                // ✅ Match total: adm + perfil 100% AP
                copy = `TODO: experiência adm + perfil unânime AP → visão sistêmica + autonomia estratégica. Tom: confirmação, estruturar para o digital.`;

            } else if (perfil === 'AP' && secundario === 'AA') {
                // ✅ Match forte: adm + AP predominante + traço AA reforça
                copy = `TODO: experiência adm + AP predominante com traço AA → base técnica + organização complementar. Tom: afinar consistência da antecipação, traço AA é solidez.`;

            } else if (perfil === 'AP' && secundario === 'SR') {
                // ✅ Match forte: adm + AP predominante + traço SR reforça
                copy = `TODO: experiência adm + AP predominante com traço SR → base técnica + comunicação complementar. Tom: afinar autonomia estratégica, traço SR é versatilidade.`;

            } else if (perfil === 'AA') {
                // ⚠️ Gap: adm + perfil AA → tem base técnica mas falta autonomia
                copy = `TODO: experiência adm + perfil AA → base técnica certa, mas opera mais em organização do que antecipação. Tom: gap é a camada de decisão, formação desenvolve isso.`;

            } else if (perfil === 'SR') {
                // ⚠️ Gap: adm + perfil SR → tem base técnica mas falta estratégia
                copy = `TODO: experiência adm + perfil SR → base técnica real, mas opera mais em comunicação do que gestão estratégica. Tom: gap treinável, base técnica já é vantagem.`;
            }

        } else if (exp === 'sem') {

            if (perfil === 'AP' && unanime) {
                // ✅ Match total: sem exp + perfil 100% AP
                copy = `TODO: sem experiência + perfil unânime AP → não tem histórico mas tem o perfil certo. Tom: raridade do perfil sem experiência, formação constrói a estrutura.`;

            } else if (perfil === 'AP' && secundario === 'AA') {
                // ✅ Match forte: sem exp + AP predominante + traço AA
                copy = `TODO: sem experiência + AP predominante com traço AA → perfil certo com organização complementar. Tom: formação constrói estrutura ao redor do instinto certo.`;

            } else if (perfil === 'AP' && secundario === 'SR') {
                // ✅ Match forte: sem exp + AP predominante + traço SR
                copy = `TODO: sem experiência + AP predominante com traço SR → perfil certo com comunicação complementar. Tom: formação desenvolve consistência estratégica.`;

            } else if (perfil === 'AA') {
                // ⚠️ Gap: sem exp + perfil AA → gap real para AP
                copy = `TODO: sem experiência + perfil AA → gap real entre organização e autonomia AP. Tom: desafiador mas treinável, formação constrói do zero.`;

            } else if (perfil === 'SR') {
                // ⚠️ Gap maior: sem exp + perfil SR → maior gap para AP
                copy = `TODO: sem experiência + perfil SR → maior gap para AP. Tom: desafiador, formação constrói do zero, comunicação é ponto de partida.`;
            }
        }

    // ─────────────────────────────────────────────────────────────────────────
    // DESEJO: AA
    // ─────────────────────────────────────────────────────────────────────────
    } else if (desejoFinal === 'AA') {

        if (exp === 'elite') {

            if (perfil === 'AP') {
                // 🔼 Upgrade: elite + perfil AP quer AA → subvaloriza
                copy = `TODO: bagagem elite + perfil AP quer AA → já opera acima do que pede. Tom: AA é sólido para começar, mas mapa do topo já está na mão.`;

            } else if (perfil === 'AA' && unanime) {
                // ✅ Match total: elite + perfil 100% AA
                copy = `TODO: bagagem elite + perfil unânime AA → bagagem confirma e perfil confirma. Tom: fortalecer diferencial, posicionar nos bastidores.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                // ✅ Match forte: elite + AA predominante + traço AP reforça
                copy = `TODO: bagagem elite + AA predominante com traço AP → organização + iniciativa complementar. Tom: traço AP te torna ainda mais completa.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                // ✅ Match forte: elite + AA predominante + traço SR reforça
                copy = `TODO: bagagem elite + AA predominante com traço SR → organização + comunicação complementar. Tom: combinação rara, fortalecer base técnica.`;

            } else if (perfil === 'SR') {
                // ⚠️ Gap: elite + perfil SR quer AA → precisa desenvolver lado técnico
                copy = `TODO: bagagem elite + perfil SR quer AA → opera mais em comunicação do que processos. Tom: desenvolver lado técnico sem perder habilidade de comunicação.`;
            }

        } else if (exp === 'atendimento') {

            if (perfil === 'AP') {
                copy = `TODO: atendimento + perfil AP quer AA → já opera acima do que pede. Tom: AA sólido para começar, mapa do topo na mão.`;

            } else if (perfil === 'AA' && unanime) {
                copy = `TODO: atendimento + perfil unânime AA → experiência e perfil confirmam. Tom: fortalecer diferencial técnico.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                copy = `TODO: atendimento + AA predominante com traço AP → organização + iniciativa. Tom: traço AP torna ainda mais completa.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `TODO: atendimento + AA predominante com traço SR → organização + comunicação. Tom: combinação valiosa nos bastidores.`;

            } else if (perfil === 'SR') {
                copy = `TODO: atendimento + perfil SR quer AA → gap técnico. Tom: desenvolver lado administrativo sem perder facilidade com pessoas.`;
            }

        } else if (exp === 'adm') {

            if (perfil === 'AP') {
                copy = `TODO: adm + perfil AP quer AA → já opera acima do que pede. Tom: AA direto, mas perfil pode ir além.`;

            } else if (perfil === 'AA' && unanime) {
                copy = `TODO: adm + perfil unânime AA → experiência e perfil confirmam. Tom: trazer para o digital, fortalecer.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                copy = `TODO: adm + AA predominante com traço AP → organização + iniciativa. Tom: não só estrutura, previne problemas.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `TODO: adm + AA predominante com traço SR → organização + comunicação. Tom: combinação rara e valiosa.`;

            } else if (perfil === 'SR') {
                copy = `TODO: adm + perfil SR quer AA → gap técnico. Tom: desenvolver lado técnico, comunicação já é vantagem.`;
            }

        } else if (exp === 'sem') {

            if (perfil === 'AP') {
                copy = `TODO: sem exp + perfil AP quer AA → já opera acima do que pede. Tom: AA direto, mas perfil pode ir além.`;

            } else if (perfil === 'AA' && unanime) {
                copy = `TODO: sem exp + perfil unânime AA → perfil confirma. Tom: formação constrói base, perfil certo para AA.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                copy = `TODO: sem exp + AA predominante com traço AP → perfil certo + iniciativa. Tom: formação estrutura, traço AP abre portas.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `TODO: sem exp + AA predominante com traço SR → perfil certo + comunicação. Tom: combinação rara para quem está começando.`;

            } else if (perfil === 'SR') {
                copy = `TODO: sem exp + perfil SR quer AA → gap técnico. Tom: comunicação é metade do caminho, formação constrói o resto.`;
            }
        }

    // ─────────────────────────────────────────────────────────────────────────
    // DESEJO: SR
    // ─────────────────────────────────────────────────────────────────────────
    } else if (desejoFinal === 'SR') {

        if (exp === 'elite') {

            if (perfil === 'AP') {
                copy = `TODO: elite + perfil AP quer SR → vai muito além do Suporte básico. Tom: lapidar, porta de entrada mas teto é mais alto.`;

            } else if (perfil === 'AA') {
                copy = `TODO: elite + perfil AA quer SR → organização + histórico forte. Tom: atende bem e mantém tudo estruturado, diferencial raro.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `TODO: elite + perfil unânime SR → histórico + perfil confirmam. Tom: padrão de excelência que poucos no Suporte têm.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `TODO: elite + SR predominante com traço AP → comunicação + iniciativa. Tom: não só responde, resolve antes de escalar.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `TODO: elite + SR predominante com traço AA → comunicação + organização. Tom: atende bem e mantém tudo no lugar, combinação rara.`;
            }

        } else if (exp === 'atendimento') {

            if (perfil === 'AP') {
                copy = `TODO: atendimento + perfil AP quer SR → vai além do Suporte. Tom: entrada sólida, perfil pode ir mais longe.`;

            } else if (perfil === 'AA') {
                copy = `TODO: atendimento + perfil AA quer SR → comunicação + organização técnica. Tom: acima da média no Suporte.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `TODO: atendimento + perfil unânime SR → zona natural confirmada. Tom: fortalecer dom, estruturar para o digital.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `TODO: atendimento + SR predominante com traço AP → comunicação + iniciativa. Tom: não só responde, resolve.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `TODO: atendimento + SR predominante com traço AA → comunicação + organização. Tom: combinação valiosa.`;
            }

        } else if (exp === 'adm') {

            if (perfil === 'AP') {
                copy = `TODO: adm + perfil AP quer SR → clareza de processos + autonomia. Tom: entrada sólida, perfil vai além.`;

            } else if (perfil === 'AA') {
                copy = `TODO: adm + perfil AA quer SR → organização técnica no Suporte. Tom: não só atende, estrutura para não repetir o problema.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `TODO: adm + perfil unânime SR → processos + comunicação. Tom: entrar rápido, combinação forte.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `TODO: adm + SR predominante com traço AP → comunicação + iniciativa. Tom: atende e antecipa, diferencial raro.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `TODO: adm + SR predominante com traço AA → comunicação + organização. Tom: atende bem e mantém tudo no lugar.`;
            }

        } else if (exp === 'sem') {

            if (perfil === 'AP') {
                copy = `TODO: sem exp + perfil AP quer SR → autonomia e iniciativa desde o início. Tom: entrada estruturada, perfil pode ir além.`;

            } else if (perfil === 'AA') {
                copy = `TODO: sem exp + perfil AA quer SR → organização te destaca no Suporte. Tom: acima da média desde o primeiro cliente.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `TODO: sem exp + perfil unânime SR → perfil certo para começar. Tom: formação estrutura o dom natural.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `TODO: sem exp + SR predominante com traço AP → comunicação + iniciativa. Tom: mapa para ir além desde o início.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `TODO: sem exp + SR predominante com traço AA → comunicação + organização. Tom: combinação rara para quem está começando.`;
            }
        }

    // ─────────────────────────────────────────────────────────────────────────
    // REDIRECIONADO (p5 = 'existente')
    // ─────────────────────────────────────────────────────────────────────────
    } else if (redirecionado) {

        if (desejoFinal === 'AA') {
            copy = `TODO: queria AP mas escolheu começar com o que tem → perfil AA. Tom: escolha inteligente, formação AV Administrativa, caminho para AP fica aberto.`;

        } else if (desejoFinal === 'SR') {
            copy = `TODO: queria AP mas escolheu começar com o que tem → perfil SR. Tom: escolha inteligente, formação AV Suporte, caminho para AP fica aberto.`;
        }
    }

    const formacao = getFormacao(desejoFinal);
    return { formacao, mensagem: copy + incluso };
}

    let copy = '';

    // ─────────────────────────────────────────────────────────────────────────
    // DESEJO: AP
    // ─────────────────────────────────────────────────────────────────────────
    if (desejoFinal === 'AP') {

        // ── exp: elite ───────────────────────────────────────────────────────
        if (exp === 'elite') {

            if (perfil === 'AP' && unanime) {
                // Caso 1: elite + AP unânime → já tem tudo, só estruturar
                copy = `Sua trajetória como secretária executiva fala por si. Você já operou no nível que o mercado de AP exige — responsabilidade real, proximidade com quem decide, autonomia para resolver.\n\nE seus resultados confirmam: seu perfil hoje ainda carrega essa pegada. O que está faltando não é talento nem bagagem. É estrutura para posicionar tudo isso no digital.\n\nA Formação AP vai pegar o que você já construiu e transformar em um posicionamento que os grandes players não conseguem ignorar. Você não começa do zero. Você começa do topo.`;

            } else if (perfil === 'AP' && secundario === 'AA') {
                // Caso 2a: elite + AP predominante + traço AA → reforçar autonomia
                copy = `Sua trajetória como secretária executiva é real — você sabe o que é estar perto de quem decide e ter responsabilidade de verdade.\n\nMas seus resultados mostram algo importante: parte de você ainda opera mais no modo organização e processos do que em antecipação e autonomia estratégica. Sua bagagem é o ponto de partida certo — só que essa habilidade de AP precisa ser reforçada para você atuar com segurança nesse nível.\n\nE tem mais: seus traços de organização te tornam ainda mais completa — as melhores APs não só resolvem, elas estruturam.\n\nÉ exatamente isso que a Formação AP faz: pega quem já tem base e afina o que falta para chegar ao topo com consistência.`;

            } else if (perfil === 'AP' && secundario === 'SR') {
                // Caso 2b: elite + AP predominante + traço SR → reforçar estratégia
                copy = `Sua trajetória como secretária executiva é real — você sabe o que é estar perto de quem decide e ter responsabilidade de verdade.\n\nMas seus resultados mostram algo importante: parte de você ainda opera mais no modo comunicação e atendimento do que em antecipação e decisão estratégica. Sua bagagem é o ponto de partida certo — só que essa habilidade de AP precisa ser reforçada para você atuar com segurança nesse nível.\n\nE tem mais: sua habilidade de se conectar com pessoas te dá uma camada rara de empatia que os grandes players valorizam em quem cuida dos seus bastidores.\n\nÉ exatamente isso que a Formação AP faz: pega quem já tem base e afina o que falta para chegar ao topo com consistência.`;

            } else if (perfil === 'AA') {
                // Caso 3a: elite + perfil AA → esfriou, reconectar via organização
                copy = `Sua trajetória como secretária executiva mostra que você já operou nesse nível — você sabe o que é ter responsabilidade real e estar perto de quem decide.\n\nMas seus resultados mostram que, hoje, seu modo de operação está mais voltado para organização e processos do que para antecipação e autonomia estratégica. Isso acontece. Às vezes a rotina esfria o que a gente tem de melhor.\n\nA Formação AP existe exatamente para isso: não construir do zero, mas reconectar você com um perfil que já é seu — e estruturá-lo para o digital.`;

            } else if (perfil === 'SR') {
                // Caso 3b: elite + perfil SR → esfriou, reconectar via comunicação
                copy = `Sua trajetória como secretária executiva mostra que você já operou nesse nível — você sabe o que é ter responsabilidade real e estar perto de quem decide.\n\nMas seus resultados mostram que, hoje, seu modo de operação está mais voltado para comunicação e atendimento do que para antecipação e decisão estratégica. Isso acontece. Às vezes a rotina direciona a gente para um lado e a gente vai junto.\n\nA Formação AP existe exatamente para isso: não construir do zero, mas reconectar você com um perfil que já é seu — e estruturá-lo para o digital.`;
            }

        // ── exp: atendimento ─────────────────────────────────────────────────
        } else if (exp === 'atendimento') {

            if (perfil === 'AP' && unanime) {
                copy = `Quem passou por atendimento de verdade sabe ler pessoas — e essa é uma das habilidades mais raras no mundo AP.\n\nE seus resultados confirmam que você vai além disso: você antecipa, age com autonomia e resolve antes de ser pedida. Esse é o perfil que os grandes players disputam.\n\nA Formação AP vai estruturar esse talento para o digital e te posicionar no nível em que você já opera.`;

            } else if (perfil === 'AP' && secundario === 'AA') {
                copy = `Quem passou por atendimento de verdade sabe ler pessoas — e essa é uma das habilidades mais raras no mundo AP.\n\nSeus resultados mostram que você tem o instinto certo, e ainda carrega traços de organização que te tornam ainda mais completa. Mas o nível AP exige consistência em antecipação e autonomia estratégica — e é isso que precisa ser desenvolvido.\n\nA Formação AP vai construir essa base sem que você perca o que já tem de melhor.`;

            } else if (perfil === 'AP' && secundario === 'SR') {
                copy = `Quem passou por atendimento de verdade sabe ler pessoas — e essa é uma das habilidades mais raras no mundo AP.\n\nSeus resultados mostram que você tem instinto de resolução, e sua facilidade de comunicação te torna ainda mais completa. Mas o nível AP exige que você vá além do atendimento: antecipação, decisão e gestão estratégica da rotina do cliente.\n\nA Formação AP vai desenvolver essa camada e te posicionar onde você quer chegar.`;

            } else if (perfil === 'AA') {
                copy = `Quem passou por atendimento de verdade sabe ler pessoas — e essa é uma das habilidades mais raras no mundo AP.\n\nMas seus resultados mostram que, hoje, você opera mais no modo organização do que no modo antecipação e autonomia. Isso não é um problema — é o gap que a Formação AP resolve. Você tem o ponto de partida certo. Falta a estrutura para chegar ao nível que você quer.`;

            } else if (perfil === 'SR') {
                copy = `Quem passou por atendimento de verdade sabe ler pessoas — e essa é uma das habilidades mais raras no mundo AP.\n\nMas seus resultados mostram que você ainda opera principalmente no modo comunicação e resposta. Para o nível AP, você precisa desenvolver antecipação, autonomia e gestão estratégica da rotina do cliente.\n\nEsse gap é exatamente o que a Formação AP resolve — e a sua base de atendimento é o melhor ponto de partida para isso.`;
            }

        // ── exp: adm ─────────────────────────────────────────────────────────
        } else if (exp === 'adm') {

            if (perfil === 'AP' && unanime) {
                copy = `Sua vivência em processos e rotinas te dá uma visão sistêmica que poucos APs têm — e que todo grande player precisa.\n\nE seus resultados confirmam: você já pensa de forma estratégica e age com autonomia. Você tem a base técnica e o perfil certo. O que falta é estruturar tudo isso para o digital.\n\nA Formação AP vai fazer exatamente isso — e você vai chegar lá mais rápido do que imagina.`;

            } else if (perfil === 'AP' && secundario === 'AA') {
                copy = `Sua vivência em processos e rotinas te dá uma visão sistêmica que poucos APs têm — e que todo grande player precisa.\n\nSeus resultados mostram que você tem o perfil certo, e seus traços de organização te tornam ainda mais sólida. Mas o nível AP exige que a antecipação e a autonomia sejam consistentes — não só presentes.\n\nA Formação AP vai afinar isso e te posicionar com segurança no mercado de elite.`;

            } else if (perfil === 'AP' && secundario === 'SR') {
                copy = `Sua vivência em processos e rotinas te dá uma visão sistêmica que poucos APs têm — e que todo grande player precisa.\n\nSeus resultados mostram que você tem o perfil certo, e sua facilidade de comunicação te torna ainda mais versátil. Mas o nível AP exige que a antecipação e a autonomia estratégica sejam o seu modo principal de operar.\n\nA Formação AP vai desenvolver essa consistência e te posicionar onde você quer chegar.`;

            } else if (perfil === 'AA') {
                copy = `Sua vivência em processos e rotinas te dá uma visão sistêmica que poucos APs têm — e que todo grande player precisa.\n\nMas seus resultados mostram que, hoje, você opera mais no modo organização do que no modo antecipação e autonomia estratégica. Você tem a base técnica certa — o que falta é desenvolver a camada de decisão e proatividade que o nível AP exige.\n\nÉ exatamente esse o trabalho da Formação AP.`;

            } else if (perfil === 'SR') {
                copy = `Sua vivência em processos e rotinas te dá uma visão sistêmica que poucos APs têm — e que todo grande player precisa.\n\nMas seus resultados mostram que, hoje, você opera mais no modo comunicação e resposta do que em antecipação e gestão estratégica. Para o nível AP, esse gap precisa ser desenvolvido — e a boa notícia é que sua base técnica já coloca você à frente.\n\nA Formação AP vai construir o que falta sem partir do zero.`;
            }

        // ── exp: sem ─────────────────────────────────────────────────────────
        } else if (exp === 'sem') {

            if (perfil === 'AP' && unanime) {
                copy = `Mesmo sem experiência formal, seus resultados revelam algo claro: você já pensa de forma estratégica, antecipa problemas e age com autonomia. Esse é o perfil que os grandes players buscam.\n\nO que você não tem ainda é a bagagem prática e a estrutura para posicionar isso no digital — e é exatamente isso que a Formação AP constrói.\n\nVocê começa sem histórico, mas com o perfil certo. Isso é mais raro do que parece.`;

            } else if (perfil === 'AP' && secundario === 'AA') {
                copy = `Mesmo sem experiência formal, seus resultados mostram que você já pensa de forma estratégica — e ainda carrega traços de organização que te tornam mais completa.\n\nMas o nível AP exige que a antecipação e a autonomia sejam consistentes. Você tem o instinto certo — a Formação AP vai construir a estrutura ao redor dele.\n\nVocê não começa do zero. Você começa com o perfil certo.`;

            } else if (perfil === 'AP' && secundario === 'SR') {
                copy = `Mesmo sem experiência formal, seus resultados mostram que você já pensa de forma estratégica — e ainda tem facilidade de comunicação que te torna ainda mais versátil.\n\nMas o nível AP exige que a antecipação e a autonomia sejam o seu modo principal de operar. A Formação AP vai desenvolver essa consistência e te dar a estrutura para chegar lá.\n\nVocê tem o perfil certo. Falta o caminho — e a gente tem ele.`;

            } else if (perfil === 'AA') {
                copy = `Você está começando do zero — e no digital isso significa que não tem nada pra desaprender.\n\nSeus resultados mostram que você opera mais no modo organização do que em antecipação e autonomia estratégica. Esse gap é real, mas é totalmente treinável.\n\nA Formação AP foi feita para construir esse perfil do zero, com direção certa. Você não precisa estar pronta agora. Só precisa começar.`;

            } else if (perfil === 'SR') {
                copy = `Você está começando do zero — e no digital isso significa que não tem nada pra desaprender.\n\nSeus resultados mostram que você opera mais no modo comunicação e atendimento do que em antecipação e decisão estratégica. Esse é o maior gap para o nível AP — e também o mais trabalhável quando se tem o método certo.\n\nA Formação AP vai construir essa base com você, do começo ao topo.`;
            }
        }

    // ─────────────────────────────────────────────────────────────────────────
    // DESEJO: AA
    // ─────────────────────────────────────────────────────────────────────────
    } else if (desejoFinal === 'AA') {

        if (exp === 'elite') {

            if (perfil === 'AP') {
                copy = `Sua bagagem como secretária executiva vai muito além do que o AA exige — e isso é uma vantagem enorme.\n\nAA é um caminho sólido, mas seus resultados mostram que você já opera num nível acima do que está pedindo. Você pensa estrategicamente, antecipa problemas e age com autonomia.\n\nVocê entra pelo Administrativo agora, tudo bem. Mas já vai com o mapa do topo na mão — e o próximo passo vai chegar mais rápido do que imagina.`;

            } else if (perfil === 'AA' && unanime) {
                copy = `Sua bagagem como secretária executiva vai muito além do que o AA exige — e seus resultados confirmam: você tem o perfil técnico e organizado que os bastidores das empresas digitais precisam.\n\nÉ exatamente isso que a Formação vai fortalecer: sua capacidade de organizar processos, estruturar rotinas e se tornar indispensável nos bastidores de quem decide.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                copy = `Sua bagagem como secretária executiva vai muito além do que o AA exige — e seus resultados confirmam que você tem o perfil técnico certo, com traços de iniciativa que te tornam ainda mais completa.\n\nA Formação vai fortalecer sua base de organização e processos — e quem sabe, com o tempo, esse lado estratégico te leve ainda mais longe.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `Sua bagagem como secretária executiva vai muito além do que o AA exige — e seus resultados mostram que você combina organização com facilidade de comunicação. Essa é uma combinação rara nos bastidores.\n\nA Formação vai fortalecer sua base técnica e te posicionar como a profissional que as empresas digitais disputam.`;

            } else if (perfil === 'SR') {
                copy = `Sua bagagem como secretária executiva traz uma base forte — mas seus resultados mostram que, hoje, você opera mais no modo comunicação e atendimento do que em processos e estrutura administrativa.\n\nEsse é o gap que a Formação resolve. Você vai desenvolver o lado técnico sem perder o que já tem de melhor: a habilidade de se conectar com as pessoas.`;
            }

        } else if (exp === 'atendimento') {

            if (perfil === 'AP') {
                copy = `Sua experiência com pessoas e rotinas é exatamente o que as empresas digitais precisam nos bastidores.\n\nMas seus resultados mostram que você vai além do AA — você já pensa estrategicamente e age com autonomia. AA é um caminho sólido para começar, mas o mapa do topo já está na sua mão.\n\nA Formação vai estruturar essa base e te mostrar até onde você pode chegar.`;

            } else if (perfil === 'AA' && unanime) {
                copy = `Sua experiência com pessoas e rotinas é exatamente o que as empresas digitais precisam nos bastidores.\n\nE seus resultados confirmam: você tem o perfil técnico e organizado para isso. A Formação vai fortalecer esse diferencial e te dar as ferramentas para transformar isso numa carreira real, com clientes que te valorizam de verdade.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                copy = `Sua experiência com pessoas e rotinas é exatamente o que as empresas digitais precisam nos bastidores.\n\nSeus resultados mostram um perfil técnico e organizado, com traços de iniciativa que te tornam ainda mais completa. A Formação vai fortalecer sua base administrativa e quem sabe abrir portas para o próximo nível.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `Sua experiência com pessoas e rotinas é exatamente o que as empresas digitais precisam nos bastidores.\n\nSeus resultados mostram que você combina organização com facilidade de relacionamento — uma combinação rara e valiosa. A Formação vai fortalecer sua parte técnica e te posicionar como referência nos bastidores.`;

            } else if (perfil === 'SR') {
                copy = `Sua experiência com atendimento e pessoas é uma base real — mas seus resultados mostram que você opera mais no modo comunicação do que em processos e estrutura administrativa.\n\nEsse é o gap que a Formação resolve. Você vai desenvolver o lado técnico sem abrir mão do que já tem de melhor: a facilidade de se conectar com as pessoas.`;
            }

        } else if (exp === 'adm') {

            if (perfil === 'AP') {
                copy = `Processos, organização, controle — você já faz isso. Agora é só trazer para o digital.\n\nMas seus resultados mostram que você vai além da parte técnica — você já pensa estrategicamente e age com autonomia. AA é um caminho direto, mas seu perfil pode te levar mais longe do que você imagina.\n\nA Formação vai estruturar o que você já tem e te mostrar as possibilidades.`;

            } else if (perfil === 'AA' && unanime) {
                copy = `Processos, organização, controle — você já faz isso. Agora é só trazer para o digital.\n\nE seus resultados confirmam que você tem exatamente o perfil para isso. A Formação vai fortalecer essa sua habilidade natural e te dar as ferramentas para transformar isso numa carreira real, com clientes que te valorizam de verdade.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                copy = `Processos, organização, controle — você já faz isso. Agora é só trazer para o digital.\n\nSeus resultados mostram um perfil técnico e organizado, com traços de iniciativa que te tornam ainda mais completa. Você não só estrutura — você antecipa. Isso é raro e muito valorizado.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `Processos, organização, controle — você já faz isso. Agora é só trazer para o digital.\n\nSeus resultados mostram que você combina organização com facilidade de comunicação — o que te torna ainda mais valiosa nos bastidores. A Formação vai fortalecer essa base e te posicionar como referência.`;

            } else if (perfil === 'SR') {
                copy = `Sua vivência em processos e rotinas é uma base real para o AA — mas seus resultados mostram que você opera mais no modo comunicação do que em estrutura técnica e organização.\n\nEsse é o gap que a Formação resolve. Você vai desenvolver a parte técnica sem perder sua facilidade de se comunicar — e essa combinação é exatamente o que os bastidores das empresas digitais precisam.`;
            }

        } else if (exp === 'sem') {

            if (perfil === 'AP') {
                copy = `Você está começando do zero — e no digital isso significa que não tem nada pra desaprender.\n\nMas seus resultados mostram que você já pensa estrategicamente e age com autonomia. AA é um caminho direto e sólido, mas seu perfil pode te levar muito além disso.\n\nA Formação vai estruturar sua base e te mostrar até onde você pode chegar.`;

            } else if (perfil === 'AA' && unanime) {
                copy = `Você está começando do zero — e no digital isso significa que não tem nada pra desaprender.\n\nE seus resultados mostram que você tem exatamente o perfil para o AA: organizada, técnica, detalhista. A Formação vai transformar essas características em uma carreira real, com clientes que te valorizam de verdade.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                copy = `Você está começando do zero — e no digital isso significa que não tem nada pra desaprender.\n\nSeus resultados mostram um perfil técnico e organizado, com traços de iniciativa que te tornam ainda mais completa. A Formação vai construir sua base administrativa e te mostrar as possibilidades que esse perfil abre.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `Você está começando do zero — e no digital isso significa que não tem nada pra desaprender.\n\nSeus resultados mostram que você combina organização com facilidade de comunicação — uma combinação rara e muito valorizada. A Formação vai construir sua base técnica e te posicionar nos bastidores onde esse perfil brilha.`;

            } else if (perfil === 'SR') {
                copy = `Você está começando do zero — e no digital isso significa que não tem nada pra desaprender.\n\nSeus resultados mostram que você opera mais no modo comunicação do que em processos e estrutura. Esse gap é real, mas é totalmente treinável — e a boa notícia é que sua facilidade de se conectar com as pessoas já é metade do caminho.\n\nA Formação vai construir o lado técnico que falta para você chegar no AA com segurança.`;
            }
        }

    // ─────────────────────────────────────────────────────────────────────────
    // DESEJO: SR
    // ─────────────────────────────────────────────────────────────────────────
    } else if (desejoFinal === 'SR') {

        if (exp === 'elite') {

            if (perfil === 'AP') {
                copy = `Sua experiência como secretária executiva te dá um padrão de excelência que poucos profissionais de Suporte têm.\n\nE seus resultados mostram que você vai muito além do Suporte básico — você antecipa, age com autonomia e resolve antes de ser pedida. Suporte é uma porta de entrada, mas seu perfil pode te levar muito mais longe.\n\nA Formação vai lapidar tudo isso e te posicionar bem acima da média desde o primeiro cliente.`;

            } else if (perfil === 'AA') {
                copy = `Sua experiência como secretária executiva te dá um padrão de excelência que poucos profissionais de Suporte têm.\n\nSeus resultados mostram que você combina esse histórico com organização e atenção técnica — o que te torna ainda mais valiosa no Suporte. Você não só atende bem, você mantém tudo registrado e no lugar.\n\nA Formação vai fortalecer esse diferencial e te posicionar como referência no atendimento digital.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `Sua experiência como secretária executiva te dá um padrão de excelência que poucos profissionais de Suporte têm.\n\nE seus resultados confirmam: você tem o perfil comunicativo e empático que o mercado de Suporte precisa. A Formação vai fortalecer esse dom e te dar a estrutura para ser a voz em que os clientes confiam.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `Sua experiência como secretária executiva te dá um padrão de excelência que poucos profissionais de Suporte têm.\n\nSeus resultados mostram que você tem o perfil comunicativo certo, com traços de iniciativa que te destacam ainda mais. Você não só atende — você resolve antes que o problema escale.\n\nA Formação vai fortalecer esse diferencial e te posicionar como referência.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `Sua experiência como secretária executiva te dá um padrão de excelência que poucos profissionais de Suporte têm.\n\nSeus resultados mostram que você combina comunicação com organização — uma combinação rara no Suporte. Você atende bem e ainda mantém tudo no lugar.\n\nA Formação vai fortalecer esse perfil e te posicionar como a profissional que as marcas disputam.`;
            }

        } else if (exp === 'atendimento') {

            if (perfil === 'AP') {
                copy = `Atendimento é a sua zona natural. No digital, isso vale ouro.\n\nMas seus resultados mostram que você vai além do Suporte — você antecipa, age com autonomia e resolve antes de ser pedida. Suporte é uma entrada sólida, mas seu perfil pode te levar muito mais longe do que você imagina.\n\nA Formação vai lapidar o que você já tem e te mostrar até onde é possível chegar.`;

            } else if (perfil === 'AA') {
                copy = `Atendimento é a sua zona natural. No digital, isso vale ouro.\n\nE seus resultados mostram que você ainda combina isso com organização e atenção técnica — o que te torna uma profissional de Suporte muito acima da média. Você atende bem e ainda mantém tudo estruturado.\n\nA Formação vai fortalecer esse diferencial e te posicionar como referência no atendimento digital.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `Atendimento é a sua zona natural. No digital, isso vale ouro.\n\nE seus resultados confirmam: você tem exatamente o perfil que o mercado de Suporte precisa. A Formação vai fortalecer esse dom e te dar a estrutura para ser a voz em que os clientes confiam — e que as marcas brigam para ter.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `Atendimento é a sua zona natural. No digital, isso vale ouro.\n\nSeus resultados mostram o perfil comunicativo certo, com traços de iniciativa que te destacam. Você não só responde — você resolve. A Formação vai fortalecer esse diferencial e te posicionar como referência.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `Atendimento é a sua zona natural. No digital, isso vale ouro.\n\nSeus resultados mostram que você combina comunicação com organização — uma combinação rara e muito valorizada no Suporte. A Formação vai fortalecer essa base e te posicionar como a profissional que as marcas disputam.`;
            }

        } else if (exp === 'adm') {

            if (perfil === 'AP') {
                copy = `Ter clareza de processos faz de você uma profissional de Suporte muito acima da média.\n\nMas seus resultados mostram que você vai além — você antecipa, age com autonomia e resolve antes de ser pedida. Suporte é uma entrada sólida, mas seu perfil pode te levar muito mais longe.\n\nA Formação vai lapidar esse potencial e te mostrar até onde é possível chegar.`;

            } else if (perfil === 'AA') {
                copy = `Ter clareza de processos faz de você uma profissional de Suporte muito acima da média.\n\nE seus resultados confirmam: você tem o perfil técnico e organizado que transforma um bom atendimento em um atendimento excelente. Você não só resolve — você estrutura para que o problema não se repita.\n\nA Formação vai fortalecer esse diferencial e te posicionar como referência.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `Ter clareza de processos faz de você uma profissional de Suporte muito acima da média.\n\nE seus resultados confirmam que você tem o perfil comunicativo e empático para isso. A Formação vai fortalecer essa combinação e te dar a estrutura para entrar rápido no mercado — sendo a voz em que os clientes confiam.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `Ter clareza de processos faz de você uma profissional de Suporte muito acima da média.\n\nSeus resultados mostram o perfil comunicativo certo, com traços de iniciativa que te destacam. Você atende, resolve e ainda antecipa o que pode dar errado. A Formação vai fortalecer essa combinação rara.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `Ter clareza de processos faz de você uma profissional de Suporte muito acima da média.\n\nSeus resultados mostram que você combina comunicação com organização — o que te torna ainda mais valiosa. Você atende bem e ainda mantém tudo no lugar. A Formação vai fortalecer esse perfil e te posicionar como referência.`;
            }

        } else if (exp === 'sem') {

            if (perfil === 'AP') {
                copy = `Todo mundo começa de algum lugar. O seu começo vai ser mais estruturado do que a maioria.\n\nSeus resultados mostram que você já pensa estrategicamente e age com autonomia — o que vai te destacar no Suporte desde o início. Mas seu perfil pode te levar bem além disso.\n\nA Formação vai te dar a base para entrar com confiança e te mostrar até onde é possível crescer.`;

            } else if (perfil === 'AA') {
                copy = `Todo mundo começa de algum lugar. O seu começo vai ser mais estruturado do que a maioria.\n\nSeus resultados mostram que você tem organização e atenção técnica — qualidades que vão te destacar no Suporte. Você não só atende, você estrutura. A Formação vai construir sua base e te posicionar acima da média desde o primeiro cliente.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `Todo mundo começa de algum lugar. O seu começo vai ser mais estruturado do que a maioria.\n\nE seus resultados mostram que você tem exatamente o perfil que o mercado de Suporte precisa: comunicativa, empática, boa com pessoas. A Formação vai fortalecer esse dom e te dar a estrutura para entrar rápido no mercado — sendo a voz em que os clientes confiam.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `Todo mundo começa de algum lugar. O seu começo vai ser mais estruturado do que a maioria.\n\nSeus resultados mostram o perfil comunicativo certo, com traços de iniciativa que te tornam ainda mais completa. Você vai entrar no Suporte, mas já com o mapa para ir além. A Formação vai fortalecer esse diferencial.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `Todo mundo começa de algum lugar. O seu começo vai ser mais estruturado do que a maioria.\n\nSeus resultados mostram que você combina comunicação com organização — uma combinação rara para quem está começando. A Formação vai fortalecer essa base e te posicionar com consistência no mercado digital.`;
            }
        }

    // ─────────────────────────────────────────────────────────────────────────
    // REDIRECIONADO (p5 = 'existente'): desejo era AP mas escolheu usar o que tem
    // ─────────────────────────────────────────────────────────────────────────
    } else if (redirecionado) {

        if (desejoFinal === 'AA') {
            copy = `Você decidiu começar com o que já tem — e é uma escolha inteligente.\n\nSua base é real e vai te colocar em movimento rápido. A Formação AV Administrativa vai estruturar essas habilidades para o digital. E quando você quiser dar o próximo passo em direção ao AP, o caminho já vai estar aberto.`;

        } else if (desejoFinal === 'SR') {
            copy = `Você decidiu começar com o que já tem — e é uma escolha inteligente.\n\nSua base é real e vai te colocar em movimento rápido. A Formação AV Suporte vai colocar essas habilidades para trabalhar no digital imediatamente. E quando você quiser ir além, a estrutura já estará lá esperando.`;
        }
    }

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