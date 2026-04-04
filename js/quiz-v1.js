// ─── FLOWS ────────────────────────────────────────────────────────────────────
const FLOWS = {
    iniciante: ['step1', 'step2', 'step3', 'step4', 'step5', 'step-result'],
    atuante: ['step8', 'step9', 'step-result'],
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
    areaAtuante: null,
    dorAtuante: null
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
    AV: { id: 'virtap-club', label: 'Conheça o Virtap Club', path: '/virtap-club' },
};

function getFormacao(perfil) {
    return perfil === 'AP' ? FORMACOES.AP : FORMACOES.AV;
}

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
    let desejoFinal = redirecionado ? perfil : desejo;
    const unanime = p2 === p3;
    const secundario = p2 === perfil ? p3 : p2;

    if (redirecionado && exp === 'sem' && desejoFinal === 'AA' && !unanime) {
        desejoFinal = 'SR';
    }

    if (redirecionado && exp === 'atendimento') {
        desejoFinal = 'SR';
    }

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
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}
                <p>Sua experiência profissional mostra que você tem familiaridade com esse nível de atuação, mas seu momento atual indica uma atuação mais voltada à organização e execução, o que pode acabar te mantendo em uma rotina mais operacional no dia a dia.</p>
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde você precisa assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>                
                ${aexpertPre}
           `;
            } else if (perfil === 'AA' && secundario === 'SR') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}
                <p>Sua experiência profissional mostra que você tem familiaridade com esse nível de atuação, mas seu momento atual indica uma atuação mais voltada à execução de tarefas e resposta a solicitações, o que pode acabar te mantendo em uma rotina mais operacional e reativa no dia a dia.</p>
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade elevado, onde você precisa assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>                
                ${aexpertPre}
                `
            } else if (perfil === 'SR') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
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
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
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
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência com atendimento é um bom ponto de partida, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertPre}
                `;
            } else {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Sua experiência com atendimento é um bom ponto de partida, mas como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde o desafio é sair da reatividade e assumir um papel mais proativo, antecipando problemas e tomando decisões.</p>
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
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas ser organizada e executar tarefas, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
                ${aexpertNew}
                 `;
            } else if (perfil === 'AA' && secundario === 'SR') {
                titulo = 'Você pode trabalhar como:<br/> Assessora Pessoal / Executiva'
                copy = `
                ${expEvl}
                ${infoBlock}                
                <p>Como Assessora Pessoal / Executiva, você atua em um nível de responsabilidade mais elevado, onde não basta apenas executar tarefas e responder a solicitações, mas também antecipar demandas, tomar decisões e conduzir prioridades.</p>
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
        <p>O <strong>Virtap Club</strong> foi feito para te guiar neste caminho, mostrando as habilidades, ferramentas e técnicas essenciais que você precisa dominar, além de como você deve se posicionar, precificar seu trabalho e conquistar seus primeiros clientes.</p>
        <p>E o melhor: você também tem acesso à Plataforma de Vagas da Virtap, onde todos os meses clientes prontos para contratar buscam assistentes exatamente com o seu perfil.</p>
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
            <p>O próximo passo para você é migrar sua experiência para o mercado digital de forma estruturada.</p>
            ${avBlock}
        `;

        } else if (exp === 'adm') {
            titulo = 'Você pode brilhar como:<br/> Assistente Administrativa'
            copy = `
                <p>Sua experiência administrativa se encaixa naturalmente aqui. Você já lida com processos, prazos e rotinas operacionais, exatamente o que clientes buscam para apoiar seus negócios.</p>
                ${infoBlock}
                <p>O próximo passo para você é migrar sua experiência para o mercado digital de forma estruturada.</p>
                ${avBlock}
            `;
        } else if (exp === 'atendimento') {
            titulo = 'Você pode brilhar como:<br/> Secretária Administrativa'
            copy = `
            <p>Sua experiência com atendimento combinada com a atuação administrativa forma um perfil completo e valorizado no mercado: a Secretária Administrativa.</p>
            <p>Como Secretária Administrativa, você atua tanto no relacionamento com clientes quanto na organização interna dos negócios, auxiliando em tarefas como:</p>
            <ul>
                <li>Atendimento e suporte via WhatsApp e outros canais</li>
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
            titulo = 'Você pode começar como:<br/> Assistente Administrativa'
            copy =
                `            
            ${infoBlock}
            <p>O próximo passo para você é desenvolver seu lado técnico e operacional e começar sua carreira no mercado digital com um direcionamento claro.</p>
            <p>O <strong>Virtap Club</strong> foi feito para te guiar neste caminho a partir do zero, mostrando as habilidades, ferramentas e técnicas essenciais que você precisa dominar, além de como você deve se posicionar, precificar seu trabalho e conquistar seus primeiros clientes.</p>
            <p>E o melhor: você também tem acesso à Plataforma de Vagas da Virtap, onde todos os meses clientes prontos para contratar buscam assistentes exatamente com o seu perfil.</p>
            `
        }

        // ─────────────────────────────────────────────────────────────────────────
        // DESEJO: SR
        // ─────────────────────────────────────────────────────────────────────────
    } else if (desejoFinal === 'SR') {
        const avBlock =
            `
        <p>O <strong>Virtap Club</strong> foi feito para te guiar neste caminho, mostrando as habilidades, ferramentas e técnicas essenciais que você precisa dominar, além de como você deve se posicionar, precificar seu trabalho e conquistar seus primeiros clientes.</p>
        <p>E o melhor: você também tem acesso à Plataforma de Vagas da Virtap, onde todos os meses clientes prontos para contratar buscam assistentes exatamente com o seu perfil.</p>
        `;
        let infoBlock =
            `
        <p>Como Secretária Remota, você atua diretamente na comunicação e no relacionamento com clientes, garantindo organização e agilidade no dia a dia, auxiliando em tarefas como:</p>
        <ul>
            <li>Atendimento e suporte via WhatsApp e outros canais</li>
            <li>Agendamento de compromissos e gestão de agenda</li>
            <li>Acompanhamento de demandas e alinhamento com clientes</li>
            <li>Suporte administrativo para manter a rotina organizada</li>
        </ul>
        <p class="main-text">O próximo passo para você</p>
        `;

        if (exp === 'elite') {
            titulo = 'Você pode brilhar como:<br/> Secretária Remota'
            copy =
                `
        <p>Sua experiência mostra que você já tem maturidade profissional e sabe lidar com pessoas, o que é essencial para resolver demandas de clientes no dia a dia.</p>
        ${infoBlock}
        <p>O próximo passo para você é migrar sua experiência para o mercado digital de forma estruturada.</p>
        ${avBlock}
    `;

        } else if (exp === 'adm') {
            titulo = 'Você pode brilhar como:<br/> Secretária Administrativa'
            copy = `
            <p>Sua experiência administrativa, aliada à comunicação com clientes, forma um perfil completo e valorizado no mercado: a Secretária Administrativa.</p>            <p>Como Secretária Administrativa, você atua tanto no relacionamento com clientes quanto na organização interna dos negócios, auxiliando em tarefas como:</p>
            <ul>
                <li>Atendimento e suporte via WhatsApp e outros canais</li>
                <li>Agendamento de compromissos e gestão de agenda</li>
                <li>Organização de arquivos, documentos e planilhas</li>
                <li>Controle de prazos e acompanhamento de tarefas</li>
                <li>Emissão de documentos e suporte administrativo</li>
                <li>Organização de processos internos</li>
            </ul>
            <p class="main-text">O próximo passo para você</p>
            <p>Você já domina o lado técnico e operacional. Agora, o próximo passo é profissionalizar sua comunicação com clientes e adaptar sua experiência ao mercado digital.</p>
            ${avBlock}
            `;
        } else if (exp === 'atendimento') {
            titulo = 'Você pode brilhar como:<br/> Secretária Remota'
            copy = `
        <p>Sua experiência com atendimento é exatamente o que o mercado busca. A Secretária Remota é a profissional responsável por manter a comunicação fluida e organizada no dia a dia dos clientes.</p>
        <p>Nessa atuação, você será responsável por:</p>
        <ul>
            <li>Atendimento e suporte via WhatsApp e outros canais</li>
            <li>Organização da comunicação e respostas aos clientes</li>
            <li>Agendamento de compromissos e gestão de agenda</li>
            <li>Acompanhamento de demandas e alinhamento com clientes</li>
            <li>Suporte administrativo para manter a rotina organizada</li>
        </ul>
        <p class="main-text">O próximo passo para você</p>
        <p>Você já domina a comunicação. Agora, o próximo passo é estruturar essa habilidade para atuar com profissionalismo no mercado digital.</p>
        ${avBlock}
        `;
        } else if (exp === 'sem') {
            titulo = 'Você pode começar como:<br/> Secretária Remota'
            copy =
                `            
        ${infoBlock}
        <p>O próximo passo para você é desenvolver suas habilidades de comunicação e começar sua carreira no mercado digital com um direcionamento claro.</p>
        <p>O <strong>Virtap Club</strong> foi feito para te guiar neste caminho a partir do zero, mostrando as habilidades, ferramentas e técnicas essenciais que você precisa dominar, além de como você deve se posicionar, precificar seu trabalho e conquistar seus primeiros clientes.</p>
        <p>E o melhor: você também tem acesso à Plataforma de Vagas da Virtap, onde todos os meses clientes prontos para contratar buscam assistentes exatamente com o seu perfil.</p>
        `;
        }

    }

    const formacao = getFormacao(desejoFinal);
    return { formacao, titulo, mensagem: copy };
}

function processarQuizAtuante(area, dor) {
    const btnPlataforma = `<button class="next-btn" onclick="window.location.href=getLink('/vagas-assistente-virtual', 'plataforma-vagas', state)">👉 Conheça a Plataforma de Vagas</button>`;
    const btnAexpert = `<button class="next-btn" onclick="window.location.href=getLink('/formacoes/assistencia-pessoal', 'formacao-aexpert', state)">👉 Conheça a Formação AExpert</button>`;
    const btnMastermind = `<button class="next-btn" onclick="window.location='https://docs.google.com/forms/d/e/1FAIpQLSd4d08MvexaQzMcjqUxjwmgrYLvuGqmHXGqkElLeWpSTJlvFg/viewform'">👉 Conheça o Mastermind</button>`;

    let titulo = '';
    let copy = '';
    let btn = '';

    let aexpertPre = `<p>Vamos te orientar em cada etapa desse processo, mostrando quais habilidades desenvolver, como precificar seu trabalho e como adquirir e reter bons clientes.</p>`;
    
    if (area === 'AP' && dor === 'clientes') {
        titulo = 'Seu próximo cliente já está te procurando';
        copy = `
            <p>Você já atua no nível mais estratégico da Assistência Virtual, o que te falta agora é estar no lugar certo para ser encontrada.</p>
            <p>A <strong>Plataforma de Vagas da Virtap</strong> é o melhor lugar para isso: todos os meses, conectamos Assistentes Pessoais a empresários e executivos que já estão procurando exatamente esse perfil.</p>
            <p>Você pula a etapa desgastante de educar e prospectar e vai direto para a negociação com clientes que já sabem que precisam delegar e já estão prontos para contratar.</p>
            <p><strong>E o melhor:</strong> em média, 70% das assistentes ativas na Virtap conseguem fechar contratos nos 3 primeiros meses!</p>
        `;
        btn = btnPlataforma;

    } else if (area === 'AP' && dor === 'escalar') {
        titulo = 'Você está pronta para escalar';
        copy = `
            <p>Você já provou que sabe entregar resultado no nível mais exigente da Assistência Virtual. O desafio agora não é trabalhar mais, e sim construir um modelo que cresça sem depender só das suas horas.</p>
            <p>O <strong>Mastermind da Virtap</strong> reúne Assessoras Pessoais de alto nível para trabalhar posicionamento, precificação e estratégias de crescimento com quem já está no mesmo nível que você.</p>
        `;
        btn = btnMastermind;

    } else if (area === 'SR' && dor === 'clientes') {
        titulo = 'Seu próximo cliente já está te procurando';
        copy = `
            <p>Você já faz o que muitos negócios precisam: atender o público, organizar a agenda e responder as redes sociais para que o negócio não pare. O que te falta agora é estar no lugar certo para ser encontrada.</p>
            <p>A <strong>Plataforma de Vagas da Virtap</strong> é o melhor lugar para isso: todos os meses, empresas e profissionais prontos para contratar buscam assistentes para auxíliar com atendimento, controle de agenda, suporte e outras rotinas administrativas. Você só precisa mostrar como você pode ajudá-los e ir direto para negociação.</p>
            <p><strong>E o melhor:</strong> em média, 70% das assistentes ativas na Virtap conseguem fechar contratos nos 3 primeiros meses!</p>
        `;
        btn = btnPlataforma;

    } else if (area === 'SR' && dor === 'especializar') {
        titulo = 'Você está pronta para o próximo nível';
        copy = `
            <p>Você já tem o que clientes mais difíceis de lidar valorizam: saber se comunicar bem e resolver problemas com pessoas.</p>
            <p>O que você precisa não é trabalhar mais horas ou atender mais clientes, mas se posicionar e prestar um serviço mais estratégico para clientes que paguem bem.</p>
            <p>A <strong>Formação AExpert</strong> foi criada para Assistentes que já atuam e querem se especializar em Assessoria Pessoal: o nível mais valorizado do mercado, onde profissionais bem posicionadas faturam R$ 10.000 ou mais por mês.</p>
            ${aexpertPre}
        `;
        btn = btnAexpert;

    } else if (area === 'AA' && dor === 'clientes') {
        titulo = 'Seu próximo cliente já está te procurando';
        copy = `
            <p>Você já resolve a parte mais crítica e burocrática das empresas: o financeiro e a operação do dia a dia. O que te falta agora é estar no lugar certo para ser encontrada.</p>
            <p>A <strong>Plataforma de Vagas da Virtap</strong> é o melhor lugar para isso: todos os meses, empresas e profissionais prontos para contratar buscam assistentes para auxíliar com atendimento, controle de agenda, suporte e outras rotinas administrativas. Você só precisa mostrar como você pode ajudá-los e ir direto para negociação.</p>
            <p><strong>E o melhor:</strong> em média, 70% das assistentes ativas na Virtap conseguem fechar contratos nos 3 primeiros meses!</p>
        `;
        btn = btnPlataforma;

    } else if (area === 'AA' && dor === 'especializar') {
        titulo = 'Você está pronta para o próximo nível';
        copy = `
            <p>Você já resolve a parte mais crítica e burocrática das empresas: o financeiro e a operação do dia a dia.</p>
            <p>O que te falta não é vender mais horas do seu dia, mas oferecer essa sua expertise em um formato de serviço mais estratégico e lucrativo para quem realmente valoriza.</p>
            <p>A <strong>Formação AExpert</strong> foi criada para Assistentes que já atuam e querem se especializar em Assessoria Pessoal: o nível mais valorizado do mercado, onde profissionais bem posicionadas faturam R$ 10.000 ou mais por mês.</p>
            ${aexpertPre}
        `;
        btn = btnAexpert;

    } else if (area === 'todos' && dor === 'clientes') {
        titulo = 'Seu próximo cliente já está te procurando';
        copy = `
            <p>Ter versatilidade é uma grande vantagem: você consegue atender diferentes tipos de cliente e se adaptar a diferentes demandas. O que te falta agora é estar no lugar certo para ser encontrada.</p>
            <p>A <strong>Plataforma de Vagas da Virtap</strong> é o melhor lugar para isso: todos os meses, empresas e profissionais prontos para contratar buscam assistentes para auxiliar em necessidades, como controle de agenda, compras, atendimento, rotinas administrativas e tarefas do dia a dia. Você só precisa mostrar como você pode ajudá-los e ir direto para negociação.</p>
            <p><strong>E o melhor:</strong> em média, 70% das assistentes ativas na Virtap conseguem fechar contratos nos 3 primeiros meses!</p>
        `;
        btn = btnPlataforma;

    } else if (area === 'todos' && dor === 'especializar') {
        titulo = 'Hora de escolher onde brilhar';
        copy = `
            <p>Versatilidade é ótimo para começar, mas para ganhar mais e atrair clientes melhores, chega um momento em que é preciso se posicionar em uma área específica: a Assessoria Pessoal.</p>
            <p>A <strong>Formação AExpert</strong> foi criada para assistentes que já atuam e querem se especializar no nível mais valorizado do mercado, onde profissionais bem posicionadas faturam R$ 10.000 ou mais por mês.</p>
            ${aexpertPre}
        `;
        btn = btnAexpert;
    }

    return { titulo, mensagem: copy, btn };
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

function updateStep9Content() {
    const [btn1, btn2] = document.querySelectorAll('#step9 .option-btn');
    btn1.textContent = 'Tenho dificuldade em conseguir clientes';
    btn1.onclick = () => selectAnswer('clientes', btn1);

    if (state.areaAtuante === 'AP') {
        btn2.textContent = 'Já tenho clientes, mas quero escalar sem trabalhar mais horas';
        btn2.onclick = () => selectAnswer('escalar', btn2);
    } else {
        btn2.textContent = 'Trabalho muito, mas meu faturamento travou';
        btn2.onclick = () => selectAnswer('especializar', btn2);
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

    if (nextId === 'step9') {
        updateStep9Content();
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
        if (stepId === 'step8') state.areaAtuante = value;
        if (stepId === 'step9') state.dorAtuante = value;
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
        const resultado = processarQuizAtuante(state.areaAtuante, state.dorAtuante);
        document.getElementById('result-title-atuante').innerHTML = resultado.titulo;
        document.getElementById('result-text-atuante').innerHTML = resultado.mensagem + resultado.btn;
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

function getStateTag(state) {
    if (!state) return '';
    if (state.flow === 'atuante') return `-${state.areaAtuante}-${state.dorAtuante}`;
    if (state.p2 || state.p3) {
        return `${state.desejo}-${state.p2}-${state.p3}-${state.exp}`;
    } else {
        return `${state.desejo}-${state.exp}`;
    }
}

function getLink(path, campaign, state) {
    const utm = getUTMParams();
    const params = new URLSearchParams();

    if (utm.has_utm) {
        const s = getNullableValue(utm.utm_last.utm_source);
        const m = getNullableValue(utm.utm_last.utm_medium);
        const c = getNullableValue(utm.utm_last.utm_campaign);
        const ct = getNullableValue(utm.utm_last.utm_content);
        
        let t = getNullableValue(utm.utm_last.utm_term);
        t = t ? t + '-main-quiz-' : 'main-quiz-';
        t += getStateTag(state);

        if (s) params.set('utm_source', s);
        if (m) params.set('utm_medium', m);
        if (c) params.set('utm_campaign', c);
        if (ct) params.set('utm_content', ct);
        if (t) params.set('utm_term', t);
    } else {
        params.set('utm_source', 'virtap');
        params.set('utm_medium', 'site');
        params.set('utm_campaign', campaign);
        params.set('utm_content', 'main-quiz');
        params.set('utm_term', getStateTag(state))
    }

    return path + '?' + params.toString();
}
function getFreeCourseLink() {
    return getLink('/curso-assistente-virtual', 'curso-gratuito');
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