// ─── FLOWS ────────────────────────────────────────────────────────────────────
const FLOWS = {
    iniciante: ['step1', 'step2', 'step3', 'step4', 'step5', 'step-result'],
    atuante: ['step8', 'step9', 'step10', 'step11', 'step-result'],
};

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
    flow: null,
    flowIndex: 0,
    experience: null,
    desejo: null,
    p2: null,
    p3: null,
    p5: null,
    areaAtual: null,
    dor: null,
    perfilValidacao: null,
    ambicao: null,
};

// ─── DADOS ────────────────────────────────────────────────────────────────────
const EXP_MAP = {
    'Executivo': 'elite',
    'Administrativo': 'adm',
    'Atendimento': 'atendimento',
    null: 'sem',
};

const FORMACOES = {
    AP: { label: 'Conheça a Formação AExpert', path: '/formacoes/assistencia-pessoal' },
    AV: { label: 'Formação em Assistência Virtual', path: '/formacoes/assistencia-virtual' },
};

function getFormacao(perfil) {
    return perfil === 'AP' ? FORMACOES.AP : FORMACOES.AV;
}

const RESULTS_ATUANTE = {
    AP: {
        title: "<span>Você pode brilhar como:</span>Assessora Pessoal",
        text: `
            <p>Suas respostas mostram tendência para tomar iniciativa, resolver pendências e ajudar a organizar a rotina de alguém: habilidades indispensáveis para uma Assessora Pessoal.</p>
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
            <p>Ser versátil agora é sua maior vantagem estratégica.</p>
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
    return desejo === 'AP' && calcularPerfil(p2, p3) !== 'AP' && exp !== 'elite' && exp !== 'sem';
}

function processarQuiz(desejo, p2, p3, exp, p5 = null) {
    const perfil = calcularPerfil(p2, p3);
    const redirecionado = precisaDeP5(desejo, p2, p3, exp) && p5 === 'existente';
    const desejoFinal = redirecionado ? perfil : desejo;
    const unanime = p2 === p3;
    const secundario = p2 === perfil ? p3 : p2;

    const incluso = ``;

    let titulo = '';
    let copy = '';

    // ─────────────────────────────────────────────────────────────────────────
    // DESEJO: AP
    // ─────────────────────────────────────────────────────────────────────────
    if (desejoFinal === 'AP') {

        if (exp === 'elite') {
            if (perfil === 'AP' && unanime) {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                <p>Suas respostas mostram inclinação para tomar iniciativa, resolver pendências e organizar a rotina de outras pessoas.</p>
                <p>Somado à sua experiência profissional, seu perfil se encaixa de forma muito natural na Assessoria Pessoal.</p>                

                <p>Essa é a atuação mais estratégica da área, onde você pode atuar como braço direito de empresários e executivos, apoiando em diferentes demandas do dia a dia, como:</p>
                <ul>
                    <li>Organização de agenda e compromissos</li>
                    <li>Pesquisa de viagens, reservas e serviços</li>
                    <li>Resolução de tarefas pessoais e administrativas</li>
                    <li>Acompanhamento de pendências importantes</li>
                    <li>Apoio na priorização de decisões e compromissos</li>
                </ul>
                <p>Por envolver confiança, proximidade e capacidade de execução, essa é considerada a área mais nobre da Assistência Virtual, onde profissionais bem posicionadas conseguem faturar R$ 10.000 mensais ou mais.</p>

                <p class="main-text">O próximo passo para você</p>
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade extremo, onde apenas profissionais de confiança absoluta conseguem se destacar.</p>
                <p>A <strong>Formação AExpert</strong> é a referência máxima no mercado de alto nível, criada exatamente para desenvolver competências, habilidades e técnicas que clientes exigentes realmente valorizam.</p>
                <p>É uma experiência de aprendizado feita para quem deseja atuar com excelência, sofisticação e autoridade, elevando sua carreira ao mais alto padrão do mercado.</p>                
                `;
            } else if (perfil === 'AP' && secundario === 'AA') {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                <p>Suas respostas mostram inclinação para tomar iniciativa, resolver pendências e organizar a rotina de outras pessoas.</p>
                <p>Somado à sua experiência profissional, seu perfil se encaixa de forma muito natural na Assessoria Pessoal.</p>                

                <p>Essa é a atuação mais estratégica da área, onde você pode atuar como braço direito de empresários e executivos, apoiando em diferentes demandas do dia a dia, como:</p>
                <ul>
                    <li>Organização de agenda e compromissos</li>
                    <li>Pesquisa de viagens, reservas e serviços</li>
                    <li>Resolução de tarefas pessoais e administrativas</li>
                    <li>Acompanhamento de pendências importantes</li>
                    <li>Apoio na priorização de decisões e compromissos</li>
                </ul>
                <p>Por envolver confiança, proximidade e capacidade de execução, essa é considerada a área mais nobre da Assistência Virtual, onde profissionais bem posicionadas conseguem faturar R$ 10.000 mensais ou mais.</p>
                <p class="main-text">O próximo passo para você</p>
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde não basta apenas organizar e executar, mas também antecipar, decidir e conduzir prioridades com segurança.</p>
                <p>Para alcançar esse nível de atuação com consistência, é essencial desenvolver e refinar competências ligadas à tomada de decisão, autonomia e visão estratégica no apoio ao cliente.</p>
                <p>A <strong>Formação AExpert</strong> é a referência máxima no mercado de alto nível, criada exatamente para desenvolver essas competências, habilidades e técnicas que clientes exigentes realmente valorizam.</p>
                <p>É uma experiência de aprendizado feita para quem deseja evoluir sua atuação com mais clareza, segurança e autoridade, elevando sua carreira ao mais alto padrão do mercado.</p>                 
                `;
            } else if (perfil === 'AP' && secundario === 'SR') {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                <p>Suas respostas mostram inclinação para tomar iniciativa, resolver pendências e organizar a rotina de outras pessoas.</p>
                <p>Somado à sua experiência profissional, seu perfil se encaixa de forma muito natural na Assessoria Pessoal.</p>                
 
                <p>Essa é a atuação mais estratégica da área, onde você pode atuar como braço direito de empresários e executivos, apoiando em diferentes demandas do dia a dia, como:</p>
                <ul>
                    <li>Organização de agenda e compromissos</li>
                    <li>Pesquisa de viagens, reservas e serviços</li>
                    <li>Resolução de tarefas pessoais e administrativas</li>
                    <li>Acompanhamento de pendências importantes</li>
                    <li>Apoio na priorização de decisões e compromissos</li>
                </ul>
                <p>Por envolver confiança, proximidade e capacidade de execução, essa é considerada a área mais nobre da Assistência Virtual, onde profissionais bem posicionadas conseguem faturar R$ 10.000 mensais ou mais.</p>

                <p class="main-text">O próximo passo para você</p>
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde não basta apenas se comunicar e responder demandas, mas também antecipar, decidir e conduzir prioridades com segurança.</p>
                <p>Para alcançar esse nível de atuação com consistência, é essencial desenvolver maior clareza na priorização, autonomia nas decisões e uma postura mais estratégica no apoio ao cliente.</p>
                <p>A <strong>Formação AExpert</strong> é a referência máxima no mercado de alto nível, criada exatamente para desenvolver essas competências, habilidades e técnicas que clientes exigentes realmente valorizam.</p>
                <p>É uma experiência de aprendizado feita para quem deseja evoluir sua atuação com mais clareza, segurança e autoridade, elevando sua carreira ao mais alto padrão do mercado.</p>
                `;
            } else if (perfil === 'AA' && unanime) {
                titulo = 'Você tem base para trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                <p>Suas respostas mostram um forte interesse em atuar apoiando diretamente pessoas, organizando rotinas e lidando com demandas do dia a dia.</p>
                <p>Somado à sua experiência profissional, existe um alinhamento claro com a atuação em Assessoria Pessoal.</p>                

                <p>Essa é a atuação mais estratégica da área, onde você pode atuar como braço direito de empresários e executivos, apoiando em diferentes demandas do dia a dia, como:</p>
                <ul>
                    <li>Organização de agenda e compromissos</li>
                    <li>Pesquisa de viagens, reservas e serviços</li>
                    <li>Resolução de tarefas pessoais e administrativas</li>
                    <li>Acompanhamento de pendências importantes</li>
                    <li>Apoio na priorização de decisões e compromissos</li>
                </ul>
                <p>Por envolver confiança, proximidade e capacidade de execução, essa é considerada a área mais nobre da Assistência Virtual, onde profissionais bem posicionadas conseguem faturar R$ 10.000 mensais ou mais.</p>

                <p class="main-text">O próximo passo para você</p>
                <p>Sua experiência em secretariado executivo mostra que você já esteve próxima desse nível de atuação, com visão e responsabilidade mais estratégicas.</p>
                <p>Ao mesmo tempo, seu momento atual indica uma atuação mais voltada à organização e execução, o que pode acabar limitando seu posicionamento nesse nível mais alto.</p>
                <p>Para avançar nessa direção, é importante desenvolver novamente a autonomia, a tomada de decisão e a condução de prioridades junto ao cliente.</p>
                <p>A <strong>Formação AExpert</strong> foi criada exatamente para esse movimento, ajudando você a resgatar e estruturar esse posicionamento com mais clareza, segurança e consistência no mercado digital.</p>
                <p>É uma experiência de aprendizado feita para quem deseja voltar a atuar com mais proximidade, confiança e relevância, elevando sua carreira ao mais alto padrão do mercado.</p>
            `;
            } else if (perfil === 'AA' && secundario === 'SR') {
            } else if (perfil === 'SR') {
                titulo = 'Você tem base para trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                    <p>Suas respostas mostram um forte interesse em atuar apoiando diretamente pessoas, organizando rotinas e lidando com demandas do dia a dia.</p>
                    <p>Somado à sua experiência profissional, existe um alinhamento claro com a atuação em Assessoria Pessoal  / Executiva.</p>                

                    <p>Essa é a atuação mais estratégica da área, onde você pode atuar como braço direito de empresários e executivos, apoiando em diferentes demandas do dia a dia, como:</p>
                    <ul>
                        <li>Organização de agenda e compromissos</li>
                        <li>Pesquisa de viagens, reservas e serviços</li>
                        <li>Resolução de tarefas pessoais e administrativas</li>
                        <li>Acompanhamento de pendências importantes</li>
                        <li>Apoio na priorização de decisões e compromissos</li>
                    </ul>

                    <p>Por envolver confiança, proximidade e capacidade de execução, essa é considerada a área mais nobre da Assistência Virtual, onde profissionais bem posicionadas conseguem faturar R$ 10.000 mensais ou mais.</p>
                    <p class="main-text">O próximo passo para você</p>
                    <p>Sua experiência em secretariado executivo mostra que você já esteve próxima desse nível de atuação, com visão e responsabilidade mais estratégicas.</p>
                    <p>Ao mesmo tempo, seu momento atual indica uma atuação com foco em atendimento e resposta a demandas, o que pode acabar te mantendo em uma posição mais reativa no dia a dia.</p>
                    <p>Para retomar uma atuação como Assessora Pessoal / Executiva, é importante avançar novamente para um papel mais próximo do cliente, com autonomia para antecipar, decidir e conduzir prioridades.</p>

                    <p>A <strong>Formação AExpert</strong> foi criada exatamente para esse movimento, ajudando você a resgatar esse posicionamento e transformar sua experiência em uma atuação mais estratégica, valorizada e bem posicionada no mercado digital.</p>
                    <p>É uma experiência de aprendizado feita para quem deseja voltar a atuar com mais proximidade, confiança e relevância, elevando sua carreira ao mais alto padrão do mercado.</p>
                `;
            }

        } else if (exp === 'adm') {

            if (perfil === 'AP' && unanime) {
                copy = `QUER SER AP: experiência adm + perfil de AP →  estruturar para o digital, experiencia com adm é plus`;
            } else if (perfil === 'AP' && secundario === 'AA') {
                copy = `QUER SER AP: experiência adm + perfil de AP com traço administrativo → lapidar perfil, experiencia com adm é plus.`;
            } else if (perfil === 'AP' && secundario === 'SR') {
                copy = `QUER SER AP: experiência adm + perfil de AP com traço de atendimento → lapidar perfil, experiencia com adm é plus.`;
            } else if (perfil === 'AA' && unanime) {
                copy = `QUER SER AP: experiência adm + perfil administrativo → desenvolver perfil, experiencia com adm é plus.`;
            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `QUER SER AP: experiência adm + perfil administrativo/atendimento → desenvolver o perfil, experiencia com adm é plus.`;
            } else if (perfil === 'SR') {
                copy = `QUER SER AP: experiência adm + perfil de atendimento → desenvolver perfil, experiencia com adm é plus.`;
            }

        } else if (exp === 'atendimento') {
            if (perfil === 'AP' && unanime) {
                copy = `QUER SER AP: experiência atendimento + perfil de AP →  estruturar para o digital, experiencia com atendimento é plus`;
            } else if (perfil === 'AP' && secundario === 'AA') {
                copy = `QUER SER AP: experiência atendimento + perfil de AP com traço administrativo → lapidar perfil, experiencia com atendimento é plus.`;
            } else if (perfil === 'AP' && secundario === 'SR') {
                copy = `QUER SER AP: experiência atendimento + perfil de AP com traço de atendimento → lapidar perfil, experiencia com atendimento é plus.`;
            } else if (perfil === 'AA' && unanime) {
                copy = `QUER SER AP: experiência atendimento + perfil administrativo → desenvolver perfil, experiencia com atendimento é plus.`;
            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `QUER SER AP: experiência atendimento + perfil administrativo/atendimento → desenvolver o perfil, experiencia com atendimento é plus.`;
            } else if (perfil === 'SR') {
                copy = `QUER SER AP: experiência atendimento + perfil de atendimento → desenvolver perfil, experiencia com atendimento é plus.`;
            }
        } else if (exp === 'sem') {
            if (perfil === 'AP' && unanime) {
                copy = `QUER SER AP: sem experiência + perfil de AP →  estruturar para o digital`;
            } else if (perfil === 'AP' && secundario === 'AA') {
                copy = `QUER SER AP: sem experiência + perfil de AP com traço administrativo → lapidar perfil`;
            } else if (perfil === 'AP' && secundario === 'SR') {
                copy = `QUER SER AP: sem experiência + perfil de AP com traço de atendimento → lapidar perfil`;
            } else if (perfil === 'AA' && unanime) {
                copy = `QUER SER AP: sem experiência + perfil administrativo → desenvolver perfil.`;
            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `QUER SER AP: sem experiência + perfil administrativo/atendimento → desenvolver o perfil.`;
            } else if (perfil === 'SR') {
                copy = `QUER SER AP: sem experiência + perfil de atendimento → desenvolver perfil.`;
            }
        }
        // ─────────────────────────────────────────────────────────────────────────
        // DESEJO: AA
        // ─────────────────────────────────────────────────────────────────────────
    } else if (desejoFinal === 'AA') {

        if (exp === 'elite') {

            if (perfil === 'AP') {
                // 🔼 Upgrade: elite + perfil AP quer AA → subvaloriza
                copy = `TODO: bagagem elite + perfil AP quer AA → já opera acima do que pede. Tom: AA sólido para começar, mapa do topo na mão.`;

            } else if (perfil === 'AA' && unanime) {
                // ✅ Match total: elite + perfil 100% AA
                copy = `TODO: bagagem elite + perfil unânime AA → bagagem e perfil confirmam. Tom: fortalecer diferencial, posicionar nos bastidores.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                // ✅ Match forte: elite + AA predominante + traço AP reforça
                copy = `TODO: bagagem elite + AA predominante com traço AP → organização + iniciativa complementar. Tom: traço AP torna ainda mais completa.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                // ✅ Match forte: elite + AA predominante + traço SR reforça
                copy = `TODO: bagagem elite + AA predominante com traço SR → organização + comunicação complementar. Tom: combinação rara, fortalecer base técnica.`;

            } else if (perfil === 'SR') {
                // ⚠️ Gap: elite + perfil SR quer AA
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
    return { formacao, titulo, mensagem: copy + incluso };
}

function calcularResultadoAtuante() {
    const votos = [state.dor, state.perfilValidacao, state.ambicao];
    const scores = { AP: 0, AA: 0, SR: 0 };
    votos.forEach(v => { if (v && v in scores) scores[v]++; });
    const { AP, AA, SR } = scores;
    if (AP > AA && AP > SR) return 'AP';
    if (AA > AP && AA > SR) return 'AA';
    if (SR > AP && SR > AA) return 'SR';
    if (AP === SR && AP > AA) return 'AP_SR';
    if (AP === AA && AP > SR) return 'AP_AA';
    if (SR === AA && SR > AP) return 'SR_AA';
    return 'ALL';
}

// ─── NAVEGAÇÃO ────────────────────────────────────────────────────────────────

function startFlow(flowName) {
    state.flow = flowName;
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
    if (path === 'nao-conhece') { showCursoGratis(); return; }
    startFlow(path === 'quer-comecar' ? 'iniciante' : 'atuante');
}

function selectAnswer(value, el) {
    const stepId = FLOWS[state.flow][state.flowIndex];

    if (state.flow === 'iniciante') {
        if (stepId === 'step1') state.experience = value;
        if (stepId === 'step2') state.desejo = value;
        if (stepId === 'step3') state.p2 = value;
        if (stepId === 'step4') state.p3 = value;
        if (stepId === 'step5') state.p5 = value;
    }

    if (state.flow === 'atuante') {
        if (stepId === 'step8') state.areaAtual = value;
        if (stepId === 'step9') state.dor = value;
        if (stepId === 'step10') state.perfilValidacao = value;
        if (stepId === 'step11') state.ambicao = value;
    }

    el.closest('.step').querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
    setTimeout(() => advance(), 150);
}

// ─── RESULTADO ────────────────────────────────────────────────────────────────

function showResult() {
    if (state.flow === 'iniciante') {
        const exp = EXP_MAP[state.experience] ?? 'sem';
        const resultado = processarQuiz(state.desejo, state.p2, state.p3, exp, state.p5);

        document.getElementById('result-title').innerHTML = resultado.titulo;
        document.getElementById('result-text').innerHTML =
            resultado.mensagem
                .split('\n\n')
                .map(p => `<p>${p.replace(/\n/g, '')}</p>`)
                .join('') +
            `<button class="next-btn" onclick="window.location.href=getLink('${resultado.formacao.path}')">
                👉 ${resultado.formacao.label}
             </button>`;

        navigateTo('step6');
    }

    if (state.flow === 'atuante') {
        const key = calcularResultadoAtuante();
        const resultData = RESULTS_ATUANTE[key];
        document.getElementById('result-title-atuante').innerHTML = resultData.title;
        document.getElementById('result-text-atuante').innerHTML = resultData.text;
        navigateTo('step12');
    }
}

function showCursoGratis() {
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById('result-title').innerText = 'Comece do jeito certo!';
    document.getElementById('result-text').innerHTML = `
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
    const utm = getUTMParams();
    const params = new URLSearchParams();

    if (utm.has_utm) {
        const s = getNullableValue(utm.utm_last.utm_source);
        const m = getNullableValue(utm.utm_last.utm_medium);
        const c = getNullableValue(utm.utm_last.utm_campaign);
        const ct = getNullableValue(utm.utm_last.utm_content);
        if (s) params.set('utm_source', s);
        if (m) params.set('utm_medium', m);
        if (c) params.set('utm_campaign', c);
        if (ct) params.set('utm_content', ct);
    } else {
        params.set('utm_source', 'virtap');
        params.set('utm_medium', 'quiz');
        params.set('utm_campaign', 'formacao');
        params.set('utm_content', 'quiz-principal');
    }

    return path + '?' + params.toString();
}

function getFreeCourseLink() {
    return getLink('/curso-assistente-virtual');
}

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