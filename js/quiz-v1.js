const FLOWS = {
    iniciante: [1, 2, 3, 4, 5, 6, 7, 8],
    atuante: [8, 9, 10, 11, 12]
};

let data = {
    quiz: [],
    experience: null,
    scores: {
        AP: 0,
        SR: 0,
        AA: 0
    },
    intentions: {
        dor: null,
        perfil: null,
        ambicao: null
    }
};

const RESULTS = {

    AP: {
        title: "<span>Você pode brilhar como:</span>Assessora Pessoal",
        text: `
        <p>Suas respostas mostram facilidade para tomar iniciativa, resolver pendências e ajudar a organizar a rotina de alguém: habilidades indispensáveis para uma Assessora Pessoal.</p>
        <p>A Assessoria Pessoal é uma das áreas mais valorizadas da Assistência Virtual, onde profissionais bem posicionadas  podem faturar R$ 10.000 ou mais por mês.</p>
    
        <p> A profissional atua com grande proximidade e confiança junto ao cliente, muitas vezes como um verdadeiro braço direito na organização e resolução de demandas do dia a dia, tais como:</p>
        <ul>
        <li>Organizar agenda e compromissos</li>
        <li>Reservar viagens e hospedagens</li>
        <li>Pesquisar prestadores de serviços</li>
        <li>Fazer pagamentos</li>
        <li>Escolher e comprar presentes</li>
        </ul>
 
        <p class="main-text">O próximo passo para você</p>
        <p>Como Assessora Pessoal, você atua em um nível de responsabilidade extremo, onde apenas profissionais de confiança absoluta conseguem se destacar.</p>
        <p>A <strong>Formação AExpert</strong> é a referência máxima no mercado de alto nível, criada exatamente para desenvolver competências, habilidades e técnicas que clientes exigentes realmente valorizam.</p>
        <p>É uma experiência de aprendizado feita para quem deseja atuar com excelência, sofisticação e autoridade, elevando sua carreira ao mais alto padrão do mercado.</p>
        
        <button class="next-btn" onclick="window.location.href=getFormacaoAExpertLink()">
        👉 Conheça a Formação AExpert
        </button>
    `
    },

    SR: {
        title: "<span>Você pode brilhar como:</span>Secretária Remota",
        text: `
        <p>Suas respostas mostram facilidade para comunicação, atendimento e relacionamento com pessoas.</p>
        <p>Esse perfil costuma se destacar ajudando empresas ou profissionais a manter o contato com clientes organizado e funcionando bem.</p>

        <p>As principais atividades de uma Secretária Remota incluem:</p>
        <ul>
        <li>Responder mensagens de clientes</li>
        <li>Organizar agenda de compromissos</li>
        <li>Acompanhar solicitações e retornos</li>
        <li>Garantir que todos os clientes sejam bem atendidos</li>
        </ul>
        <p>Esse tipo de profissional ajuda o negócio a funcionar com mais organização e agilidade.</p>

        <p class="main-text">O próximo passo para você</p>
        <p>Para atuar como Secretária Remota, o seu próximo passo é dominar a base operacional do atendimento digital.</p>
        <p>Na <strong>Formação em Assistência Virtual</strong> da Virtap, você terá acesso a todas as técnicas e ferramentas essenciais para profissionalizar seu serviço e encantar seus futuros clientes.</p>

        <button class="next-btn" onclick="window.location.href=getFormacaoAExpertLink()">
        👉 Formação em Assistência Virtual
        </button>
    `
    },

    AA: {
        title: "<span>Você pode brilhar como:</span>Assistente Administrativa",
        text: `
        <p>Suas respostas mostram forte organização, atenção aos detalhes e facilidade para lidar com rotinas estruturadas.</p>
        <p>Esse perfil se destaca cuidando da parte administrativa e garantindo que informações e processos estejam sempre organizados.</p>

        <p>Uma Assistente Administrativa atua em tarefas como:</p>
        <ul>
            <li>Organizar planilhas e controles</li>
            <li>Gerenciar documentos e arquivos</li>
            <li>Acompanhar prazos administrativos</li>
            <li>Estruturar processos e rotinas</li>
            <li>Manter registros e dados organizados</li>
        </ul>

        <p class="main-text">O próximo passo para você</p>
        <p>Para atuar como Assistente Administrativa, é essencial aprender a estruturar seus serviços de forma remota e profissional.</p>
        <p>Na <strong>Formação em Assistência Virtual</strong> da Virtap, você terá acesso a todas as técnicas e ferramentas essenciais para profissionalizar seu serviço e encantar seus futuros clientes.</p>
        <button class="next-btn" onclick="window.location.href=getFormacaoAExpertLink()">
        👉 Formação em Assistência Virtual
        </button>
`
    },

    AP_SR: {
        title: "VocêPerfil Híbrido (Assistente Pessoal + Secretária Remota)",
        text: `
<p><strong>Seu perfil predominante</strong></p>

<p><strong>Assistente Pessoal com habilidade em atendimento</strong></p>

<p>Suas respostas mostram facilidade tanto para resolver tarefas quanto para lidar com pessoas e comunicação.</p>

<p>Esse é um perfil bastante comum em quem trabalha como Assistente Virtual.</p>

<p><strong>Exemplos de atividades desse perfil</strong></p>

<ul>
<li>organizar agenda e compromissos</li>
<li>responder clientes e mensagens</li>
<li>acompanhar solicitações e pendências</li>
<li>organizar demandas do dia a dia</li>
<li>ajudar o cliente a manter tudo funcionando</li>
</ul>

        <p>Por ser uma função de alta especialização e confiança, aqui se encontram os maiores potenciais de ganho do mercado, permitindo faturamentos que podem superar R$ 10.000,00 mensais.</p>

<p><strong>Próximo passo recomendado</strong></p>

<p>O próximo passo é aprender como estruturar esses serviços e transformar essas habilidades em um trabalho profissional.</p>

<p>👉 <strong>Formação Assistente Virtual</strong></p>
`
    },

    AP_AA: {
        title: "5️⃣ Resultado: Perfil Híbrido (Assistente Executiva + Administrativa)",
        text: `
<p><strong>Seu perfil predominante</strong></p>

<p><strong>Assistente Executiva com forte organização administrativa</strong></p>

<p>Suas respostas mostram facilidade para resolver tarefas e também para estruturar processos e organizar informações.</p>

<p><strong>Exemplos de atividades desse perfil</strong></p>

<ul>
<li>organizar agenda e compromissos</li>
<li>controlar planilhas e informações</li>
<li>acompanhar prazos e tarefas</li>
<li>organizar documentos importantes</li>
<li>estruturar rotinas administrativas</li>
</ul>

<p>Esse tipo de profissional ajuda o cliente a <strong>manter organização tanto nas tarefas quanto nos processos</strong>.</p>

<p><strong>Próximo passo recomendado</strong></p>

<p>O próximo passo é aprender como estruturar serviços administrativos e executivos para trabalhar com clientes.</p>

<p>👉 <strong>Formação Assistente Executiva</strong></p>
`
    },

    SR_AA: {
        title: "6️⃣ Resultado: Perfil Híbrido (Secretária Remota + Administrativa)",
        text: `
<p><strong>Seu perfil predominante</strong></p>

<p><strong>Secretária Remota com organização administrativa</strong></p>

<p>Suas respostas mostram facilidade para comunicação e atendimento, combinada com organização e atenção aos detalhes.</p>

<p><strong>Exemplos de atividades desse perfil</strong></p>

<ul>
<li>responder clientes e organizar atendimentos</li>
<li>controlar agenda e compromissos</li>
<li>atualizar planilhas e registros</li>
<li>acompanhar solicitações de clientes</li>
<li>manter informações organizadas</li>
</ul>

<p>Esse tipo de profissional ajuda o negócio a <strong>manter atendimento e organização funcionando juntos</strong>.</p>

<p><strong>Próximo passo recomendado</strong></p>

<p>O próximo passo é aprender como estruturar serviços de atendimento e organização administrativa para clientes.</p>

<p>👉 <strong>Formação Secretária Remota</strong></p>
`
    },

    ALL: {
        title: "<span>Você pode brilhar como:</span>Assistente Virtual Versátil",
        text: `

<p>Suas respostas revelam um perfil dinâmico, com uma habilidade natural para transitar entre diferentes áreas e resolver problemas de forma ágil.</p>

<p>Este é o perfil mais versátil e estratégico para o mercado atual. Você atua como o motor de produtividade do cliente, conectando todas as pontas do negócio. Sua facilidade em resolver múltiplas demandas faz de você uma peça indispensável em áreas como:</p>
<ul>
<li>Organização de agendas e compromissos diários</li>
<li>Atendimento e suporte aos clientes do negócio</li>
<li>Controle de planilhas e processos administrativos</li>
<li>Gestão de fluxos de trabalho e prazos internos</li>
<li>Execução de rotinas digitais e tarefas operacionais</li>
<li>Acompanhamento proativo de pendências e projetos</li>
</ul>

<p>Ser versátil agora é sua maior vantagem estratégica. Essa experiência prepara você para o próximo nível: a Assistência Executiva. É nessa transição que você deixa de ser apenas um suporte para se tornar o braço direito de grandes empresários, acessando os maiores ganhos da área.</p>

<p><strong>O próximo passo para você</strong></p>

<p>
Ter um perfil versátil é o seu maior trunfo, mas para faturar alto você precisa de método. A Formação Assistente Virtual entrega as técnicas e ferramentas essenciais para você sair do zero, conquistar seus primeiros clientes e construir uma carreira com total liberdade e segurança.</p>
<button class="next-btn" onclick="window.location.href=getFormacaoAExpertLink()">
👉 Formação em Assistência Virtual
</button>
`
    }

};


let userPath = null;
let currentStep = 0;
let currentFlow = [];
let flowIndex = 0;

function choosePath(path) {
    userPath = path;
    data.quiz[currentStep] = path;
    if (path === 'nao-conhece') {
        showCursoGratis();
        return;
    }
    if (path === 'quer-comecar') {
        currentFlow = FLOWS.iniciante;
    }
    else if (path === 'ja-trabalha') {
        currentFlow = FLOWS.atuante;
    }

    flowIndex = 0;
    goToStep(currentFlow[flowIndex]);
}

function selectAnswer(profile, el) {
    const prev = data.quiz[currentStep];
    data.quiz[currentStep] = profile;

    if (currentFlow === FLOWS.iniciante) {
        if (currentStep === 1) {
            data.experience = profile;
        } else {
            if (prev && data.scores[prev] !== undefined) {
                data.scores[prev]--;
            }
            if (data.scores[profile] !== undefined) {
                data.scores[profile]++;
            }
        }
    }
    else if (currentFlow === FLOWS.atuante) {
        if (currentStep === 8) data.intentions.areaAtual = profile;
        if (currentStep === 9) data.intentions.dor = profile;
        if (currentStep === 10) data.intentions.perfilValidacao = profile;
        if (currentStep === 11) data.intentions.ambicao = profile;
    }

    el.parentElement.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    el.classList.add('selected');

    setTimeout(() => {
        nextStep();
    }, 150);
}

function goBack() {
    if (flowIndex > 0) {
        flowIndex--;
        goToStep(currentFlow[flowIndex]);
    } else {
        goToStep(0);
        document.getElementById('header-nav').style.display = 'none';
    }
}

function nextStep() {
    flowIndex++;
    if (flowIndex >= currentFlow.length) {
        return;
    }

    const nextStepNumber = currentFlow[flowIndex];
    if (flowIndex === currentFlow.length - 1) {
        showResult();
    }

    goToStep(nextStepNumber);
}

function goToStep(s) {
    currentStep = s;

    // Mostra a tela correta
    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    const targetStep = document.getElementById('step' + s);
    if (targetStep) targetStep.classList.add('active');

    const headerNav = document.getElementById('header-nav');
    if (s === 0) {
        if (headerNav) headerNav.style.display = 'none';
    } else {
        if (headerNav) headerNav.style.display = 'flex';
    }

    updateSelection();
    window.scrollTo(0, 0);
}

function updateSelection() {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));

    const answer = data.quiz[currentStep];
    if (!answer) {
        return;
    }

    const activeStepEl = document.getElementById('step' + currentStep);
    if (activeStepEl) {
        const btn = activeStepEl.querySelector(`button[onclick*="'${answer}'"]`);
        if (btn) {
            btn.classList.add('selected');
        }
    }
}

function calculateResult() {

    const { AP, SR, AA } = data.scores;

    if (AP > SR && AP > AA) return "AP";
    if (SR > AP && SR > AA) return "SR";
    if (AA > AP && AA > SR) return "AA";

    if (AP === SR && AP > AA) return "AP";
    if (AP === AA && AP > SR) return "AP_AA";
    if (SR === AA && SR > AP) return "SR_AA";

    return "ALL";
}

function showResult() {
    if (currentFlow === FLOWS.iniciante) {
        const result = calculateResult();
        const resultData = RESULTS[result];
        document.getElementById("result-title").innerHTML = resultData.title;
        document.getElementById("result-text").innerHTML = resultData.text;

    } else {
        // outro flow..
    }
}

function showCursoGratis() {

    // esconde todos os steps
    document.querySelectorAll('.step')
        .forEach(el => el.classList.remove('active'));

    // define título
    document.getElementById("result-title").innerText =
        "Comece do jeito certo!";

    // define conteúdo
    document.getElementById("result-text").innerHTML = `
<p>Se você ainda não conhece a profissão de <strong>Assistente Virtual</strong>, o primeiro passo é entender como ela funciona.</p>

<p>Para você começar da melhor forma possível, preparamos um <strong>curso 100% gratuito</strong> onde explicamos:</p>

<ul>
<li>O que faz uma Assistente Virtual</li>
<li>O que é preciso para trabalhar </li>
<li>Quanto é possível ganhar</li>
<li>Como começar a trabalhar</li>
</ul>

<br>

<button class="next-btn" onclick="window.location.href=getFreeCourseLink()">
👉 Acessar o Curso Gratuito
</button>
`;

    document.getElementById("step8").classList.add("active");
    document.getElementById('header-nav').style.display = 'flex';

}

function getFreeCourseLink() {

    const utm = getUTMParams();

    let params = new URLSearchParams();

    if (utm.has_utm) {

        const source = getNullableValue(utm.utm_last.utm_source);
        const medium = getNullableValue(utm.utm_last.utm_medium);
        const campaign = getNullableValue(utm.utm_last.utm_campaign);
        const content = getNullableValue(utm.utm_last.utm_content);

        if (source) params.set('utm_source', source);
        if (medium) params.set('utm_medium', medium);
        if (campaign) params.set('utm_campaign', campaign);
        if (content) params.set('utm_content', content);

    } else {

        params.set('utm_source', 'virtap');
        params.set('utm_medium', 'quiz');
        params.set('utm_campaign', 'curso-gratuito');
        params.set('utm_content', 'quiz-principal');

    }

    return "/curso-assistente-virtual?" + params.toString();
}

function getFormacaoAExpertLink() {

    const utm = getUTMParams();

    let params = new URLSearchParams();

    if (utm.has_utm) {

        const source = getNullableValue(utm.utm_last.utm_source);
        const medium = getNullableValue(utm.utm_last.utm_medium);
        const campaign = getNullableValue(utm.utm_last.utm_campaign);
        const content = getNullableValue(utm.utm_last.utm_content);

        if (source) params.set('utm_source', source);
        if (medium) params.set('utm_medium', medium);
        if (campaign) params.set('utm_campaign', campaign);
        if (content) params.set('utm_content', content);

    } else {

        params.set('utm_source', 'virtap');
        params.set('utm_medium', 'quiz');
        params.set('utm_campaign', 'formacao-aexpert');
        params.set('utm_content', 'quiz-principal');

    }

    return "/formacoes/assistencia-pessoal?" + params.toString();
}

function getNullableValue(val) {
    if (val) {
        val = val.trim();
        if (val.length === 0) {
            val = null;
        }
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
        for (const key of utmKeys) {
            let value = getNullableValue(params.get(key));
            utmParams[key] = value;
        }
    }
    utmParams['timestamp'] = Date.now();
    utmParams['referral_url'] = rawReferrer;

    let firstUtmParams = localStorage.getItem('first_visit_utm');
    if (!firstUtmParams) {
        firstUtmParams = utmParams;
        try {
            localStorage.setItem('first_visit_utm', JSON.stringify(utmParams));
        } catch { }
    } else {
        try {
            firstUtmParams = JSON.parse(firstUtmParams);
        } catch {
            firstUtmParams = utmParams;
        }
    }


    return {
        utm_first: firstUtmParams,
        utm_last: utmParams,
        has_utm: !!hasUTM
    };
}

try {
    console.log(getUTMParams());
} catch (err) { }
