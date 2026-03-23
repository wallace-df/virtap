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
    AP: { id: 'formacao-aexpert', label: 'Conheça a Formação AExpert', path: '/formacoes/assistencia-pessoal' },
    AV: { id: 'formacao-av', label: 'Formação em Assistência Virtual', path: '/formacoes/assistencia-virtual' },
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
    return desejo === 'AP' && calcularPerfil(p2, p3) !== 'AP' && exp !== 'elite';
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
        let infoBlock =
            `
        <p>Essa é a atuação mais estratégica da Assistência Virtual, onde você pode atuar como braço direito de empresários e executivos, apoiando em diferentes demandas do dia a dia, como:</p>
        <ul>
            <li>Organização de agenda e compromissos</li>
            <li>Pesquisa de viagens, reservas e serviços</li>
            <li>Resolução de tarefas pessoais e administrativas</li>
            <li>Acompanhamento de pendências importantes</li>
            <li>Apoio na priorização de decisões e compromissos</li>
        </ul>
        <p>Por envolver confiança, proximidade e capacidade de execução, essa é também a área mais valorizada da Assistência Virtual, onde profissionais bem posicionadas conseguem faturar R$ 10.000 mensais ou mais.</p>

        <p class="main-text">O próximo passo para você</p>
        `;
        let aexpertPre =
            `
            <p>O seu próximo passo é consolidar tudo o que você já sabe fazer, aprimorar habilidades indispensáveis, se posicionar e precificar corretamente no mercado digital.</p>
            <p>A <strong>Formação AExpert</strong> te orienta em cada etapa desse processo, mostrando quais habilidades desenvolver, como precificar seu trabalho e como adquirir e reter bons clientes.</p>
            `;
        let aexpertNew = `
            <p>Mesmo começando do zero, é totalmente possível chegar a esse nível desde que você tenha o direcionamento certo.</p>
            <p>A <strong>Formação AExpert</strong> foi criada exatamente para te guiar neste caminho, mostrando quais habilidades desenvolver, quais ferramentas utilizar, como se posicionar no mercado, quanto cobrar pelo seu trabalho e como conquistar e reter bons clientes.</p>

            `;
        if (exp === 'elite') {
            let expPref = `<p>Suas respostas mostram aptidão para tomar iniciativa, resolver pendências e organizar a rotina de outras pessoas.</p><p>Somado à sua experiência profissional, seu perfil se encaixa de forma muito natural na Assessoria Pessoal / Executiva.</p>`;
            let expEvl = `<p>Suas respostas mostram um interesse em atuar apoiando diretamente pessoas, organizando rotinas e lidando com demandas do dia a dia, exatamente o que uma Assessora Pessoal / Executiva faz.</p>`;
            if (perfil === 'AP' && unanime) {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expPref}
                ${infoBlock}                
                <p>Sua experiência profissional e suas respostas mostram que você tem familiaridade com esse nível de atuação, tornando sua transição muito mais natural.</p>
                ${aexpertPre}
            `;
            } else if (perfil === 'AP' && secundario === 'AA') {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expEvl}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde não basta apenas ser organizada e executar tarefas, mas também assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>
                <p>A sua experiência já demonstra familiaridade com esse nível, o que coloca você em uma posição privilegiada para evoluir mais rápido.</p>                
               ${aexpertPre}
            `;
            } else if (perfil === 'AP' && secundario === 'SR') {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expEvl}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde não basta apenas se comunicar bem e responder a solicitações, mas também assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>
                <p>A sua experiência já demonstra familiaridade com esse nível, o que coloca você em uma posição privilegiada para evoluir mais rápido.</p>                
                ${aexpertPre}
                `;
            } else if (perfil === 'AA' && unanime) {
                titulo = 'Você pode  trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}
                <p>Sua experiência profissional mostra que você tem familiaridade com esse nível de atuação, mas seu momento atual indica uma atuação mais voltada à organização e execução, o que pode acabar te mantendo em uma rotina mais operacional no dia a dia.</p>
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde você precisa assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>                
                ${aexpertPre}
           `;
            } else if (perfil === 'AA' && secundario === 'SR') {
                titulo = 'Você pode  trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}
                <p>Sua experiência profissional mostra que você tem familiaridade com esse nível de atuação, mas seu momento atual indica uma atuação mais voltada à execução de tarefas e resposta a solicitações, o que pode acabar te mantendo em uma rotina mais operacional e reativa no dia a dia.</p>
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde você precisa assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>                
                ${aexpertPre}
                `
            } else if (perfil === 'SR') {
                titulo = 'Você pode  trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}
                <p>Sua experiência profissional mostra que você tem familiaridade com esse nível de atuação, mas seu momento atual indica uma atuação com foco em comunicação e resposta a solicitações, o que pode acabar te mantendo em uma posição mais reativa no dia a dia.</p>
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde você precisa assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>                
                ${aexpertPre}
                `;
            }
        } else if (exp === 'adm') {
            let expPref = `<p>Suas respostas mostram aptidão para tomar iniciativa, resolver pendências e organizar a rotina de outras pessoas, características muito alinhadas à atuação em Assessoria Pessoal / Executiva.</p>`;
            let expEvl = `<p>Suas respostas mostram um interesse em atuar apoiando diretamente pessoas, organizando rotinas e lidando com demandas do dia a dia, exatamente o que faz um Assessora Pessoal / Executiva.</p>`;
            if (perfil === 'AP' && (unanime)) {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expPref}
                ${infoBlock}                
                <p>Sua experiência administrativa é uma grande vantagem e suas respostas demostram que você tem a mentalidade certa para atuar como uma Assessora Pessoal / Executiva, onde você atua em um nível de responsabilidade elevado, assumindo um papel proativo, antecipando demandas e tomando decisões.</p>
                ${aexpertPre}
            `;
            } else if (perfil === 'AP' && secundario === 'AA') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência administrativa é uma grande vantagem e amplia suas competências, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertPre}
            `;
            } else if (perfil === 'AP' && secundario === 'SR') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência administrativa é uma grande vantagem e amplia suas competências, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertPre}
                `;
            } else if (perfil === 'AA' && unanime) {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência administrativa é uma grande vantagem e amplia suas competências, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertPre}
                `;
            } else {
                titulo = 'Você pode  trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência administrativa é uma grande vantagem e amplia suas competências, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertPre}
                `;
            }
        } else if (exp === 'atendimento') {
            let expPref = `<p>Suas respostas mostram aptidão para tomar iniciativa, resolver pendências e organizar a rotina de outras pessoas, características muito alinhadas à atuação em Assessoria Pessoal / Executiva.</p>`;
            let expEvl = `<p>Suas respostas mostram um interesse em atuar apoiando diretamente pessoas, organizando rotinas e lidando com demandas do dia a dia, exatamente o que faz um Assessora Pessoal / Executiva.</p>`;
            if (perfil === 'AP' && unanime) {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expPref}
                ${infoBlock}                
                <p>Sua experiência com atendimento é um bom ponto de partida e suas respostas demostram que você tem a mentalidade certa para atuar como uma Assessora Pessoal / Executiva, onde você atua em um nível de responsabilidade elevado, assumindo um papel proativo, antecipando demandas e tomando decisões.</p>
                ${aexpertPre}
            `;
            } else if (perfil === 'AP' && secundario === 'SR') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência com atendimento é um bom ponto de partida, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertPre}
                `;

            } else if (perfil === 'AP' && secundario === 'AA') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência com atendimento é um bom ponto de partida, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertPre}
                `;
            } else if (perfil === 'AA') {
                titulo = 'Você pode  trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência com atendimento é um bom ponto de partida, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertPre}
                `;
            } else {
                titulo = 'Você pode  trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência com atendimento é um bom ponto de partida, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde desafio é sair da reatividade e assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>
                ${aexpertPre}
                `;
            }
        } else if (exp === 'sem') {
            let expPref = `<p>Suas respostas mostram aptidão para tomar iniciativa, resolver pendências e organizar a rotina de outras pessoas, características muito alinhadas à atuação em Assessoria Pessoal / Executiva.</p>`;
            let expEvl = `<p>Suas respostas mostram um interesse em atuar apoiando diretamente pessoas, organizando rotinas e lidando com demandas do dia a dia, exatamente o que faz um Assessora Pessoal / Executiva.</p>`;

            if (perfil === 'AP' && unanime) {
                titulo = 'Você pode brilhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expPref}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde você precisa assumir um papel proativo, antecipando problemas e tomando decisões. Suas respostas mostram que você tem a mentalidade certa para atuar nessa área.</p>                
                ${aexpertNew}
            `;
            } else if (perfil === 'AP' && secundario === 'AA') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expEvl}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde não basta apenas ser organizada e executar tarefas, mas também assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>
                ${aexpertNew}
            `;
            } else if (perfil === 'AP' && secundario === 'SR') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy =
                    `
                ${expEvl}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde não basta apenas se comunicar bem e responder a solicitações, mas também assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>
                ${aexpertNew}
            `;
            } else if (perfil === 'AA' && unanime) {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas  ser organizada e executar tarefas, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertNew}
                 `;
            } else if (perfil === 'AA' && secundario === 'SR') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas  executar tarefas e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertNew}
                 `;
            } else if (perfil === 'SR') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas  se comunicar bem e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertNew}
                 `;
            }
        }
        // ─────────────────────────────────────────────────────────────────────────
        // DESEJO: AA
        // ─────────────────────────────────────────────────────────────────────────
    } else if (desejoFinal === 'AA') {
        const avBlock =
            `
        <p>A <strong>Formação em Assistência Virtual</strong> da Virtap foi feita para te guiar neste caminho, mostrando as habilidades, ferramentas e técnicas essenciais que você precisa dominar, além de como você deve se posicionar, precificar seu trabalho e conquistar seus primeiros clientes.</p>
        `;
        let infoBlock =
            `
            <p>Como Assistente Administrativa, você atua no coração operacional de muitos negócios, auxiliando em tarefas como:</p>
            <ul>
                <li>Organização de arquivos, documentos e planilhas</li>
                <li>Controle de prazos e acompanhamento de tarefas</li>
                <li>Emissão de documentos e suporte administrativo</li>
                <li>Organização de processos internos</li>
                <li>Apoio financeiro e operacional</li>
            </ul>
            <p class="main-text">O próximo passo para você</p>
            `;

        if (exp === 'elite') {
            titulo = 'Você pode brilhar como:<br/> Assistente Administrativa'
            copy =
                `
            <p>Sua experiência profissional aponta que você tem familiaridade com o nível de exigência que bons clientes tem, o que te coloca em enorme vantagem para atuar como braço direito de um negócio.</p>
            ${infoBlock}
            <p>O próximo passo para você é estruturar seu conhecimento para atuar no mercado digital.</p>
            ${avBlock}
        `;

        } else if (exp === 'adm') {
            titulo = 'Você pode brilhar como:<br/> Assistente Administrativa'
            copy = `
                <p>Sua experiência administrativa se encaixa naturalmente aqui. Você já lida com processos, prazos e rotinas operacionais, exatamente o que clientes buscam para apoiar seus negócios.</p>
                ${infoBlock}
                <p>O que te falta agora é adaptar sua experiência profissional para o mercado digital.</p>
                ${avBlock}
            `;
        } else if (exp === 'atendimento') {

            titulo = 'Você pode brilhar como:<br/> Secretária Administrativa'
            copy = `
            <p>Sua experiência com atendimento combinada com a atuação administrativa forma um perfil completo e valorizado no mercado: a Secretária Administrativa.</p>
            <p>Como Secretária Administrativa, você atua tanto no relacionamento com clientes quanto na organização interna dos negócios, auxiliando em tarefas como:</p>
            <ul>
                <li>Atendimento e suporte a clientes via WhatsApp e redes sociais</li>
                <li>Agendamento de compromissos e gestão de agenda</li>
                <li>Organização de arquivos, documentos e planilhas</li>
                <li>Controle de prazos e acompanhamento de tarefas</li>
                <li>Emissão de documentos e suporte administrativo</li>
                <li>Organização de processos internos</li>
            </ul>
            <p class="main-text">O próximo passo para você</p>
            <p>Você já domina a interação com pessoas e a resolução de demandas. Agora, o próximo passo é desenvolver o lado técnico e operacional e adaptar sua experiência ao mercado digital.</p>
            ${avBlock}
            `;
        } else if (exp === 'sem') {

            if (perfil === 'AP') {
                copy = `TODO: sem exp + perfil AP quer AA → já opera acima do que pede.Tom: AA direto, mas perfil pode ir além.`;

            } else if (perfil === 'AA' && unanime) {
                copy = `TODO: sem exp + perfil unânime AA → perfil confirma.Tom: formação constrói base, perfil certo para AA.`;

            } else if (perfil === 'AA' && secundario === 'AP') {
                copy = `TODO: sem exp + AA predominante com traço AP → perfil certo + iniciativa.Tom: formação estrutura, traço AP abre portas.`;

            } else if (perfil === 'AA' && secundario === 'SR') {
                copy = `TODO: sem exp + AA predominante com traço SR → perfil certo + comunicação.Tom: combinação rara para quem está começando.`;

            } else if (perfil === 'SR') {
                copy = `TODO: sem exp + perfil SR quer AA → gap técnico.Tom: comunicação é metade do caminho, formação constrói o resto.`;
            }
        }

        // ─────────────────────────────────────────────────────────────────────────
        // DESEJO: SR
        // ─────────────────────────────────────────────────────────────────────────
    } else if (desejoFinal === 'SR') {

        if (exp === 'elite') {

            if (perfil === 'AP') {
                copy = `TODO: elite + perfil AP quer SR → vai muito além do Suporte básico.Tom: lapidar, porta de entrada mas teto é mais alto.`;

            } else if (perfil === 'AA') {
                copy = `TODO: elite + perfil AA quer SR → organização + histórico forte.Tom: atende bem e mantém tudo estruturado, diferencial raro.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `TODO: elite + perfil unânime SR → histórico + perfil confirmam.Tom: padrão de excelência que poucos no Suporte têm.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `TODO: elite + SR predominante com traço AP → comunicação + iniciativa.Tom: não só responde, resolve antes de escalar.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `TODO: elite + SR predominante com traço AA → comunicação + organização.Tom: atende bem e mantém tudo no lugar, combinação rara.`;
            }

        } else if (exp === 'atendimento') {

            if (perfil === 'AP') {
                copy = `TODO: atendimento + perfil AP quer SR → vai além do Suporte.Tom: entrada sólida, perfil pode ir mais longe.`;

            } else if (perfil === 'AA') {
                copy = `TODO: atendimento + perfil AA quer SR → comunicação + organização técnica.Tom: acima da média no Suporte.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `TODO: atendimento + perfil unânime SR → zona natural confirmada.Tom: fortalecer dom, estruturar para o digital.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `TODO: atendimento + SR predominante com traço AP → comunicação + iniciativa.Tom: não só responde, resolve.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `TODO: atendimento + SR predominante com traço AA → comunicação + organização.Tom: combinação valiosa.`;
            }

        } else if (exp === 'adm') {

            if (perfil === 'AP') {
                copy = `TODO: adm + perfil AP quer SR → clareza de processos + autonomia.Tom: entrada sólida, perfil vai além.`;

            } else if (perfil === 'AA') {
                copy = `TODO: adm + perfil AA quer SR → organização técnica no Suporte.Tom: não só atende, estrutura para não repetir o problema.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `TODO: adm + perfil unânime SR → processos + comunicação.Tom: entrar rápido, combinação forte.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `TODO: adm + SR predominante com traço AP → comunicação + iniciativa.Tom: atende e antecipa, diferencial raro.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `TODO: adm + SR predominante com traço AA → comunicação + organização.Tom: atende bem e mantém tudo no lugar.`;
            }

        } else if (exp === 'sem') {

            if (perfil === 'AP') {
                copy = `TODO: sem exp + perfil AP quer SR → autonomia e iniciativa desde o início.Tom: entrada estruturada, perfil pode ir além.`;

            } else if (perfil === 'AA') {
                copy = `TODO: sem exp + perfil AA quer SR → organização te destaca no Suporte.Tom: acima da média desde o primeiro cliente.`;

            } else if (perfil === 'SR' && unanime) {
                copy = `TODO: sem exp + perfil unânime SR → perfil certo para começar.Tom: formação estrutura o dom natural.`;

            } else if (perfil === 'SR' && secundario === 'AP') {
                copy = `TODO: sem exp + SR predominante com traço AP → comunicação + iniciativa.Tom: mapa para ir além desde o início.`;

            } else if (perfil === 'SR' && secundario === 'AA') {
                copy = `TODO: sem exp + SR predominante com traço AA → comunicação + organização.Tom: combinação rara para quem está começando.`;
            }
        }

        // ─────────────────────────────────────────────────────────────────────────
        // REDIRECIONADO (p5 = 'existente')
        // ─────────────────────────────────────────────────────────────────────────
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

function updateStep5Content() {
    const exp = EXP_MAP[state.experience] ?? 'sem';
    const h2 = document.querySelector('#step5 h2');
    const p = document.querySelector('#step5 p');
    const [btn1, btn2] = document.querySelectorAll('#step5 .option-btn');

    h2.textContent = 'O que faz mais sentido para você agora?';

    if (exp === 'sem') {
        btn1.textContent = 'Quero aumentar meu potencial de ganhos, mesmo assumindo mais responsabilidade e atendendo clientes mais exigentes.';
        btn2.textContent = 'Prefiro começar com mais tranquilidade, menos pressão e uma rotina mais previsível.';
    } else {
        btn1.textContent = 'Quero aumentar meu potencial de ganhos, mesmo assumindo mais responsabilidade e atendendo clientes mais exigentes.';
        btn2.textContent = 'Prefiro começar com mais tranquilidade e menos pressão, usando as habilidades que já tenho e crescer a partir delas.';
    }
}

function advance() {
    const flow = FLOWS[state.flow];
    state.flowIndex++;
    if (state.flowIndex >= flow.length) return;

    const justAnswered = flow[state.flowIndex - 1]; // step que acabou de ser respondido

    // só pula para resultado se acabou de responder o step2 (desejo)
    if (state.flow === 'iniciante' && justAnswered === 'step2' && state.desejo !== 'AP') {
        showResult();
        return;
    }

    let nextId = flow[state.flowIndex];

    if (nextId === 'step5') {
        const exp = EXP_MAP[state.experience] ?? 'sem';
        if (!precisaDeP5(state.desejo, state.p2, state.p3, exp)) {
            state.flowIndex++;
            if (state.flowIndex >= flow.length) return;
            nextId = flow[state.flowIndex];
        }
    }

    if (nextId === 'step5') {
        updateStep5Content();
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
        state.exp = exp;

        document.getElementById('result-title').innerHTML = resultado.titulo;
        document.getElementById('result-text').innerHTML =
            resultado.mensagem
                .split('\n\n')
                .map(p => `<p> ${p.replace(/\n/g, '')}</p > `)
                .join('') +
            `<button class="next-btn" onclick = "window.location.href=getLink('${resultado.formacao.path}', '${resultado.formacao.id}', state)">
                👉 ${resultado.formacao.label}
             </button > `;

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
                    <p> Se você ainda não conhece a profissão de <strong> Assistente Virtual</strong>, o primeiro passo é entender como ela funciona.</p>
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

function getLink(path, campaign, state) {
    const utm = getUTMParams();
    const params = new URLSearchParams();

    if (utm.has_utm) {
        const s = getNullableValue(utm.utm_last.utm_source);
        const m = getNullableValue(utm.utm_last.utm_medium);
        const c = getNullableValue(utm.utm_last.utm_campaign);
        let ct = getNullableValue(utm.utm_last.utm_content);
        if (!ct) {
            ct = 'main-quiz';
        } else {
            ct += '-main-quiz'
        }
        if (state) {
            ct += `-${state.desejo}-${state.p2}-${state.p3}-${state.exp}`;
        }
        if (s) params.set('utm_source', s);
        if (m) params.set('utm_medium', m);
        if (c) params.set('utm_campaign', c);
        if (ct) params.set('utm_content', ct);
    } else {
        params.set('utm_source', 'virtap');
        params.set('utm_medium', 'site');
        params.set('utm_campaign', campaign);
        let c = 'main-quiz';
        if (state) {
            c += `-${state.desejo}-${state.p2}-${state.p3}-${state.exp}`;
        }
        params.set('utm_content', c);
    }

    return path + '?' + params.toString();
}

function getFreeCourseLink() {
    return getLink('/curso-assistente-virtual', 'curso-gratuito');
}

function getFormacaoAExpertLink() {
    return getLink('/formacoes/assistencia-pessoal', 'formacao-aexpert');
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