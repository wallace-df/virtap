const FLOWS = {
    iniciante: [1, 2, 3, 4, 5, 6, 7],
    atuante: [8, 9, 10, 11, 12]
};

let data = {
    quiz: [],
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
        title: "<span>Você pode brilhar como:</span>Assistente Pessoal / Executiva",
        text: `<p>Suas respostas mostram facilidade para tomar iniciativa, resolver pendências e ajudar a organizar a rotina de alguém. </p>

        <p>Este perfil representa a área mais nobre da Assistência Virtual, onde frequentemente a profissional atua como braço direito de grandes empresários e executivos,  ajudando a resolver diferentes demandas do dia a dia, tais como:</p>
<ul>
<li>Organizar agenda e compromissos</li>
<li>Pesquisar viagens, reservas ou serviços</li>
<li>Resolver tarefas pessoais ou administrativas</li>
<li>Acompanhar pendências importantes</li>
<li>Ajudar o cliente a priorizar decisões e compromissos</li>
</ul>

<p>Por ser uma função de alta especialização e confiança, aqui se encontram os maiores potenciais de ganho do mercado, permitindo faturamentos que podem superar R$ 10.000,00 mensais.</p>

<p class="main-text">O próximo passo para você</p>
<p>
Para profissionais que buscam este posicionamento de elite, a recomendação é a <strong>Formação AExpert</strong>.</p><p>Este é o treinamento de referência no mercado, desenvolvido especificamente para capacitar especialistas com as técnicas, ferramentas e habilidades necessárias para atender os clientes de mais alto padrão.</p>

<button class="next-btn" onclick="window.location.href=getFormacaoAExpertLink()">
👉 Formação AExpert
</button>

`
    },

    SR: {
        title: "<span>Você pode brilhar como:</span>Secretária Remota",
        text: `<p>Suas respostas mostram facilidade para comunicação, organização de atendimentos e relacionamento com pessoas.</p>

<p>Esse perfil costuma se destacar ajudando empresas ou profissionais a manter o contato com clientes organizado e funcionando bem.</p>

<p>As principais atividades de uma Secretária Remota incluem:</p>
<ul>
<li>Responder mensagens de clientes</li>
<li>Organizar agenda de atendimentos</li>
<li>Confirmar compromissos e reuniões</li>
<li>Acompanhar solicitações e retornos</li>
<li>Garantir que todos os clientes sejam bem atendidos</li>
</ul>

<p>Esse tipo de profissional ajuda o negócio a funcionar com mais organização e agilidade no atendimento.</p>

<p class="main-text">O próximo passo para você</p>
<p>Para atuar como Secretária Remota, o seu próximo passo é dominar a base operacional do atendimento digital.</p>
<p>Na <strong>Formação em Assistência Virtual</strong> da Virtap, você terá acesso a todas as técnicas e ferramentas essenciais para profissionalizar seu serviço e encantar seus futuros clientes.</p>

<button class="next-btn" onclick="window.location.href=getFormacaoAExpertLink()">
👉 Formação em Assistência Virtual
</button>
`
    },

    AA: {
        title: "Assistente Administrativa (AA)",
        text: `
<p><strong>Seu perfil predominante</strong></p>

<p><strong>Assistente Administrativa</strong></p>

<p>Suas respostas mostram forte organização, atenção aos detalhes e facilidade para lidar com rotinas estruturadas.</p>

<p>Esse perfil costuma se destacar cuidando da parte administrativa e garantindo que informações e processos estejam organizados.</p>

<p><strong>Exemplos de atividades desse perfil</strong></p>

<ul>
<li>organizar planilhas e controles</li>
<li>gerenciar documentos e arquivos</li>
<li>acompanhar prazos administrativos</li>
<li>estruturar processos e rotinas</li>
<li>manter registros e dados organizados</li>
</ul>

<p>Esse tipo de profissional ajuda empresas e profissionais a <strong>manter tudo funcionando de forma organizada</strong>.</p>

<p><strong>Próximo passo recomendado</strong></p>

<p>Se você quer seguir nessa direção, o próximo passo é aprender como estruturar serviços administrativos remotos para clientes.</p>

<p>👉 <strong>Formação Assistente Administrativa</strong></p>
`
    },

    AP_SR: {
        title: "4️⃣ Resultado: Perfil Híbrido (Assistente Pessoal + Secretária Remota)",
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

<p>Esse tipo de profissional costuma atuar ajudando clientes a <strong>ganhar tempo e manter tudo organizado ao mesmo tempo</strong>.</p>

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
        title: "7️⃣ Resultado: Perfil Versátil de Assistente Virtual",
        text: `
<p><strong>Seu perfil predominante</strong></p>

<p><strong>Perfil Versátil de Assistente Virtual</strong></p>

<p>Suas respostas mostram habilidades distribuídas entre organização, resolução de tarefas e comunicação.</p>

<p>Esse é um perfil bastante comum em quem está começando na área de assistência virtual.</p>

<p><strong>Exemplos de atividades desse perfil</strong></p>

<ul>
<li>organização de agenda</li>
<li>atendimento a clientes</li>
<li>controle de planilhas</li>
<li>acompanhamento de tarefas</li>
<li>apoio administrativo geral</li>
</ul>

<p>Profissionais com esse perfil costumam começar oferecendo diferentes tipos de suporte e depois se especializam.</p>

<p><strong>Próximo passo recomendado</strong></p>

<p>O próximo passo é aprender como transformar essas habilidades em um serviço profissional como Assistente Virtual.</p>

<p>👉 <strong>Formação Assistente Virtual</strong></p>
`
    }

};


let userPath = null;
let currentStep = 0;
let currentFlow = [];
let flowIndex = 0;

function choosePath(path) {
    userPath = path;
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

    // 2. Lógica de Separação de Modelos
    if (currentFlow === FLOWS.iniciante) {
        if (prev && data.scores[prev] !== undefined) {
            data.scores[prev]--;
        }
        if (data.scores[profile] !== undefined) {
            data.scores[profile]++;
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

    updateVisuals();
    window.scrollTo(0, 0);
}



function updateVisuals() {
    // 1. Primeiro, limpamos qualquer seleção visual
    document.querySelectorAll('.option-btn')
        .forEach(btn => btn.classList.remove('selected'));

    // 2. Pegamos a resposta salva para o passo ATUAL
    const answer = data.quiz[currentStep];
    if (!answer) return;

    // 3. Buscamos o botão clicado, mas APENAS dentro do passo ativo
    const activeStepEl = document.getElementById('step' + currentStep);

    if (activeStepEl) {
        // Busca o botão que tem o profile correto dentro da div da pergunta atual
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

    if (AP === SR && AP > AA) return "AP_SR";
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

<p>Preparamos um <strong>curso 100% gratuito</strong> onde explicamos:</p>

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

    document.getElementById("step7").classList.add("active");
    document.getElementById('header-nav').style.display = 'flex';

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
