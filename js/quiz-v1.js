let data = {
    quiz: [],
    scores: {
        AP: 0,
        SR: 0,
        AA: 0
    }
};
let currentStep = 0;
let isProcessing = false;

const RESULTS = {

    AP: {
        title: "1️⃣ Resultado: Assistente Pessoal / Executiva (AP)",
        text: `
<p><strong>Seu perfil predominante</strong></p>

<p><strong>Assistente Pessoal / Executiva</strong></p>

<p>Suas respostas mostram facilidade para tomar iniciativa, resolver pendências e ajudar a organizar a rotina de alguém.</p>

<p>Esse perfil costuma se destacar quando trabalha próximo da rotina de um cliente, ajudando a resolver diferentes demandas do dia a dia.</p>

<p><strong>Exemplos de atividades desse perfil</strong></p>

<ul>
<li>organizar agenda e compromissos</li>
<li>pesquisar viagens, reservas ou serviços</li>
<li>resolver tarefas pessoais ou administrativas</li>
<li>acompanhar pendências importantes</li>
<li>ajudar o cliente a priorizar decisões e compromissos</li>
</ul>

<p>Muitas vezes essa profissional se torna um <strong>braço direito do cliente</strong>.</p>

<p><strong>Próximo passo recomendado</strong></p>

<p>Se você quer seguir nessa direção, o próximo passo é aprender como estruturar esse tipo de serviço e trabalhar profissionalmente com clientes.</p>

<p>👉 <strong>Formação Assistente Pessoal / Executiva</strong></p>
`
    },

    SR: {
        title: "2️⃣ Resultado: Secretária Remota (SR)",
        text: `
<p><strong>Seu perfil predominante</strong></p>

<p><strong>Secretária Remota</strong></p>

<p>Suas respostas mostram facilidade para comunicação, organização de atendimentos e relacionamento com pessoas.</p>

<p>Esse perfil costuma se destacar ajudando empresas ou profissionais a manter o contato com clientes organizado e funcionando bem.</p>

<p><strong>Exemplos de atividades desse perfil</strong></p>

<ul>
<li>responder mensagens de clientes</li>
<li>organizar agenda de atendimentos</li>
<li>confirmar compromissos e reuniões</li>
<li>acompanhar solicitações e retornos</li>
<li>garantir que todos os clientes sejam bem atendidos</li>
</ul>

<p>Esse tipo de profissional ajuda o negócio a <strong>funcionar com mais organização e agilidade no atendimento</strong>.</p>

<p><strong>Próximo passo recomendado</strong></p>

<p>Se você quer seguir nessa direção, o próximo passo é aprender como estruturar um serviço de atendimento remoto para clientes.</p>

<p>👉 <strong>Formação Secretária Remota</strong></p>
`
    },

    AA: {
        title: "3️⃣ Resultado: Assistente Administrativa (AA)",
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




function selectAnswer(profile, nextStep, el) {
    if (isProcessing) return;

    const prev = data.quiz[currentStep];

    if (prev) {
        data.scores[prev]--;
    }

    data.quiz[currentStep] = profile;
    data.scores[profile]++;

    // Agora o 'el' está definido e você pode manipular as classes
    el.parentElement.querySelectorAll('.option-btn')
        .forEach(btn => btn.classList.remove('selected'));

    el.classList.add('selected');
    if (nextStep === 7) {
        showResult();
    }

    setTimeout(() => {
        goToStep(nextStep);
    }, 150);
}

function goToStep(s) {
    currentStep = s;

    // Limpa erros residuais de passos anteriores
    document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('input').forEach(el => el.classList.remove('invalid'));

    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
    document.getElementById((s === 'result') ? 'stepResult' : 'step' + s).classList.add('active');
    if (s === 0 || s === 1 || s === 'result') {
        document.getElementById('header-nav').style.display = 'none';
    } else {
        document.getElementById('header-nav').style.display = 'flex';
    }
    document.getElementById('back-btn').style.display = (s === 1 || s === 'result') ? 'none' : 'flex';
    updateVisuals();
    window.scrollTo(0, 0);
}

function goBack() {
    if (currentStep > 0) { // Mudou de 1 para 0
        goToStep(currentStep - 1)
    }
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

    const result = calculateResult();

    const resultData = RESULTS[result];

    document.getElementById("result-title").innerText =
        resultData.title;

    document.getElementById("result-text").innerHTML =
        resultData.text;
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
