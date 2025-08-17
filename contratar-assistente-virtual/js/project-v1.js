function getParameterByName(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)",
        regex = new RegExp(regexS),
        results = regex.exec(window.location.search);
    if (results == null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}


function handleGoogleLogin() {
    const generatedState = Math.random().toString(36).substring(2);

       const authUrl = `https://api.virtap.com.br/auth/google/client?popup=1&next=${generatedState}`;
    const popup = window.open(authUrl, 'oauth-popup', 'width=500,height=600');

    let loginHandled = false;
    let ctx = this;

    $(this).prop('disabled', true).addClass('disabled').find('span').text('Confirmando...')

    function restoreBtn() {
        $(ctx).prop('disabled', false).removeClass('disabled').find('span').text('Confirmar com o Google')

    }

    // 3. Adiciona um 'ouvinte' para mensagens de sucesso/erro da pop-up
    const messageListener = (event) => {
        // Verifica se a origem da mensagem é confiável e se já não foi tratada
        if (event.origin !== location.origin || loginHandled) {
            console.log(event.origin, location.origin);
            return;
        }

        const { type, state } = event.data;

        // Valida o 'state' para prevenir ataques CSRF
        if (state === generatedState) {
            loginHandled = true;
            restoreBtn();

            if (type === 'oauth_success') {
                alert('eba!');
            } else if (type === 'oauth_error') {
                alert('poxa!');
            }

            // Garante que a pop-up seja fechada após o processamento
            if (popup && !popup.closed) {
                popup.close();
            }
        }
    };
    window.addEventListener('message', messageListener, false);

    // 4. Inicia um 'ouvinte' para detectar se o pop-up foi fechado pelo usuário
    const checkPopupClosed = setInterval(() => {
        if (popup.closed) {
            clearInterval(checkPopupClosed);
            window.removeEventListener('message', messageListener, false);

            if (!loginHandled) {
                restoreBtn();
                alert('cancelou!');
            }
        }
    }, 500);
}

const STORAGE_KEY = 'project-data-v1';
let loggedEmail = getParameterByName('e');
let loggedName = getParameterByName('n');

$(function () {

    const allSteps = [
        {
            id: 'tipo-demanda',
            title: "Preciso de ajuda com demandas...",
            cards: [
                { value: "personal", icon: "fa-user", label: "Pessoais" },
                { value: "professional", icon: "fa-briefcase", label: "Profissionais" },
                { value: "both", icon: "fa-users", label: "Pessoais e Profissionais" },
            ],
        },
        {
            id: 'demandas-pessoais',
            title: "Para as seguintes tarefas...",
            cards: [
                { value: "organizacao-pessoal", icon: "fa-calendar-check", label: "Organização Pessoal" },
                { value: "compras-presentes", icon: "fa-shopping-cart", label: "Compras e Presentes" },
                { value: "viagens-logistica", icon: "fa-plane", label: "Viagens e Logística" },
                { value: "suporte-administrativo", icon: "fa-file-alt", label: "Suporte Administrativo" },
                { value: "outros-servicos-pessoais", icon: "fa-star", label: "Outros Serviços Pessoais" },
            ],
        },
        {
            id: 'demandas-profissionais',
            title: "Para as seguintes tarefas...",
            cards: [
                { value: "comunicacao-atendimento", icon: "fa-comments", label: "Comunicação e Atendimento" },
                { value: "gestao-administrativa", icon: "fa-tasks", label: "Gestão Administrativa" },
                { value: "producao-conteudo", icon: "fa-file-alt", label: "Produção e Gestão de Conteúdo" },
                { value: "vendas-prospeccao", icon: "fa-chart-line", label: "Vendas e Prospecção" },
                { value: "logistica-operacoes", icon: "fa-truck", label: "Logística e Operações" },
            ],
        },
        {
            id: 'demandas-pessoais-profissionais',
            title: "Para as seguintes tarefas...",
            cards: [
                { value: "organizacao-pessoal", icon: "fa-calendar-check", label: "Organização Pessoal" },
                { value: "suporte-administrativo", icon: "fa-file-alt", label: "Suporte Administrativo" },
                { value: "viagens-logistica", icon: "fa-plane", label: "Viagens e Logística" },
                { value: "comunicacao-atendimento", icon: "fa-comments", label: "Comunicação e Atendimento" },
                { value: "compras-presentes", icon: "fa-shopping-cart", label: "Compras e Presentes" },
            ],
        },
        {
            id: 'volume-trabalho',
            title: "E alguém que trabalhe...",
            cards: [
                { value: "full-time", icon: "fa-clock", label: "Full-time (tempo integral)" },
                { value: "part-time", icon: "fa-hourglass-half", label: "Part-time (meio período)" },
                { value: "few-hours", icon: "fa-calendar-day", label: "Algumas horas por dia ou semana" },
            ],
        },
        {
            id: 'project-summary',
            title: "Resumo do projeto",
            cards: [] // Sem cards, aqui vai o formulário
        },
        {
            id: 'contact-info',
            title: "Seu projeto foi salvo com sucesso!",
            cards: [] // Formulário de contato
        }
    ];

    let currentStepIndex = 0;
    let selectedValues = {};
    let activeSteps = [];
    let project = {}; // <-- Novo campo no estado
    const multiSelectSteps = ['demandas-pessoais', 'demandas-profissionais', 'demandas-pessoais-profissionais'];

    function saveState() {
        const state = {
            currentStepIndex,
            selectedValues,
            project: project // objeto com title e description
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function loadState() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return false;

        try {
            const state = JSON.parse(saved);
            if (state && typeof state === 'object') {
                selectedValues = state.selectedValues || {};
                currentStepIndex = state.currentStepIndex || 0;
                project = state.project || {}; // <-- Carrega projeto salvo
                return true;
            }
        } catch (e) {
            console.warn('Erro ao carregar estado do projeto:', e);
        }
        return false;
    }

    // Função para salvar com atraso (debounce)
    let debounceTimer = null;
    function saveProjectDebounced() {
        updateButtons();
        if (debounceTimer) {
            clearTimeout(debounceTimer);
            debounceTimer = null;
        }
        debounceTimer = setTimeout(() => {
            project = {
                title: $("#projectTitleInput").val().trim(),
                description: $("#projectDescriptionTextarea").val().trim()
            };
            saveState();
        }, 400);
    }


    // ====== Auto-generate project title & description ======
    function generateProjectTitle() {
        const type = selectedValues["tipo-demanda"];
        let typeText = type === "personal" ? "Assistente Pessoal" :
            type === "professional" ? "Assistente Administrativo" :
                "Assistente Pessoal e Administrativo";

        let period = 'Algumas horas por dia';
        let vol = selectedValues["volume-trabalho"];
        if (vol === 'full-time') {
            period = 'Full-time';
        } else if (vol === 'part-time') {
            period = 'Meio-período';
        }

        return `${typeText} - ${period}`;
    }

    function generateProjectDescription() {
        const tasks = [];
        for (const step of activeSteps) {
            if (step.cards) {
                const val = selectedValues[step.id];
                if (val) {
                    if (Array.isArray(val)) {
                        tasks.push(...val);
                    } else {
                        tasks.push(val);
                    }
                }
            }
        }

        return `Preciso de alguém para cuidar das seguintes tarefas:\n\n• ${tasks.join("\n• ")}.`;
    }

    function buildActiveSteps() {
        activeSteps = [allSteps[0]];

        const tipo = selectedValues['tipo-demanda'];
        if (tipo === 'personal') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-pessoais'));
        } else if (tipo === 'professional') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-profissionais'));
        } else if (tipo === 'both') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-pessoais-profissionais'));
        }

        activeSteps.push(allSteps.find(s => s.id === 'volume-trabalho'));
        activeSteps.push(allSteps.find(s => s.id === 'project-summary'));
        activeSteps.push(allSteps.find(s => s.id === 'contact-info'));

        // clean selections no longer valid
        for (const key in selectedValues) {
            if (!activeSteps.some(s => s && s.id === key)) {
                delete selectedValues[key];
            }
        }
    }

    function renderCards(step) {
        const $cardsWrapper = $('#cardsWrapper');
        $cardsWrapper.empty();

        if (step.id === 'project-summary') {
            // Render form inputs for title and description
            const titleVal = project.title;
            const descVal = project.description;

            const $form = $(`
                <div id="projectSummaryForm">
                    <label for="projectTitleInput"><strong>Título do projeto</strong></label>
                    <input class="form-control" type="text" id="projectTitleInput" value="${titleVal}" />
                    <label for="projectDescriptionTextarea"><strong>Descrição do projeto</strong></label>
                    <textarea class="form-control" id="projectDescriptionTextarea" rows="5">${descVal}</textarea>
                </div>
            `);

            $cardsWrapper.append($form);

            // Bind inputs to selectedValues to save state live
            $('#projectTitleInput').off().on('input', function () {
                saveProjectDebounced();
            });
            $('#projectDescriptionTextarea').off().on('input', function () {
                saveProjectDebounced();
            });

            saveState();
            return;
        }
        if (step.id === 'contact-info') {
            const name = selectedValues['contact-name'] || '';
            const email = selectedValues['contact-email'] || '';
            const phone = selectedValues['contact-phone'] || '';

            const $form = $(`
                <div id="contactInfoForm" style="text-align:left;">
                <p>Para publicar seu projeto e receber propostas, precisamos confirmar seu email<p/>

                <div class="login-buttons">
                    <a class="btn btn-google" id="btn-google">
                        <img src="/img/google-icon.svg"> <span>Confirmar com o Google</span>
                    </a>
                </div>

                <!--
                    <label for="contactNameInput"><strong>Nome completo</strong></label><br>
                    <input type="text" id="contactNameInput" class="form-control" value="${name}" />
                    
                    <label for="contactEmailInput"><strong>E-mail</strong></label><br>
                    <input type="email" id="contactEmailInput" class="form-control" value="${email}" />
                    
                    <label for="contactPhoneInput"><strong>Telefone</strong></label><br>
                    <input type="tel" id="contactPhoneInput" class="form-control" value="${phone}"  />-->
                </div>
            `);

            $cardsWrapper.append($form);

            $('#contactNameInput').off().on('input', function () {
                selectedValues['contact-name'] = $(this).val().trim();
                saveState();
                updateButtons();
            });

            $('#contactEmailInput').off().on('input', function () {
                selectedValues['contact-email'] = $(this).val().trim();
                saveState();
                updateButtons();
            });

            $('#contactPhoneInput').off().on('input', function () {
                selectedValues['contact-phone'] = $(this).val().trim();
                saveState();
                updateButtons();
            });


            if (loggedName && loggedName.trim().length > 0) {
                $form.find('#contactNameInput').val(loggedName).trigger('input');;
            }

            if (loggedEmail && loggedEmail.trim().length > 0) {
                $form.find('#contactEmailInput').val(loggedEmail).trigger('input');
            }

            updateButtons();

            $("#btn-google").off().on('click', handleGoogleLogin);

            return;
        }
        const isMulti = multiSelectSteps.includes(step.id);

        step.cards.forEach(card => {
            let isSelected = false;
            if (isMulti) {
                isSelected = Array.isArray(selectedValues[step.id]) && selectedValues[step.id].includes(card.value);
            } else {
                isSelected = selectedValues[step.id] === card.value;
            }

            const indicatorClass = isMulti ? 'checkbox-indicator' : 'radio-indicator';

            const $card = $(`
                <div class="card-custom${isSelected ? ' selected' : ''}" data-value="${card.value}">
                    <div class="${indicatorClass}${isSelected ? ' checked' : ''}"></div>
                    <i class="fa-solid ${card.icon}"></i>
                    <h5 class="card-title mt-2">${card.label}</h5>
                </div>
            `);
            $cardsWrapper.append($card);
        });
        saveState();
    }

    // Validação simples de email
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function setContactInputsDisabled(disabled) {
        $('#contactNameInput, #contactEmailInput, #contactPhoneInput').prop('disabled', disabled);
    }

    function setButtonsDisabled(disabled, sending = false) {
        $('#btnPrev').prop('disabled', disabled);
        $('#btnNext').prop('disabled', disabled);
        if (sending) {
            $('#btnNext').find('span').text('Enviando...');
        } else {
            $('#btnNext').find('span').text(currentStepIndex === activeSteps.length - 1 ? 'Enviar' : 'Próximo');
        }
    }
    function renderStep(index, fromNextButton = false) {
        if (index < 0 || index >= activeSteps.length) return;
        currentStepIndex = index;
        const step = activeSteps[index];
        $('#stepTitle').html(step.title);

        // 🚀 Só gera projeto se for último passo e vier pelo botão "Próximo"
        if (fromNextButton && step.id === 'project-summary') {
            project = {
                title: generateProjectTitle(),
                description: generateProjectDescription()
            };
            saveState();
        }

        const $cardsWrapper = $('#cardsWrapper');
        $cardsWrapper.fadeOut(150, () => {
            renderCards(step);
            $cardsWrapper.fadeIn(150);
            updateButtons();

        });
    }

    function updateButtons() {
        $('#btnPrev').prop('disabled', currentStepIndex === 0);

        const step = activeSteps[currentStepIndex];
        const val = selectedValues[step.id];
        $('#btnNext').find('span').text('Próximo');

        if (multiSelectSteps.includes(step.id)) {
            $('#btnNext').prop('disabled', !Array.isArray(val) || val.length === 0 || currentStepIndex === activeSteps.length - 1);
        } else if (step.id === 'project-summary') {
            let projectTitle = $("#projectTitleInput").val().trim();
            let projectDescription = $("#projectDescriptionTextarea").val().trim();
            $('#btnNext').find('span').text('Postar projeto');
            $('#btnNext').prop('disabled', projectTitle.length === 0 || projectDescription.length === 0);
        }
        else if (step.id === 'contact-info') {
            const name = selectedValues['contact-name'] || '';
            const email = selectedValues['contact-email'] || '';
            const phone = selectedValues['contact-phone'] || '';

            const valid = name.length > 0 && isValidEmail(email) && phone.length > 0;

            $('#btnNext').prop('disabled', !valid);
            $('#btnNext').find('span').text('Enviar');
            return;
        }

        else {
            $('#btnNext').prop('disabled', !val);
        }
    }

    $('#cardsWrapper').on('click', '.card-custom', function () {
        const val = $(this).data('value');
        const step = activeSteps[currentStepIndex];

        if (multiSelectSteps.includes(step.id)) {
            if (!Array.isArray(selectedValues[step.id])) {
                selectedValues[step.id] = [];
            }

            const index = selectedValues[step.id].indexOf(val);
            if (index === -1) {
                selectedValues[step.id].push(val);
            } else {
                selectedValues[step.id].splice(index, 1);
            }

            renderCards(step);
            updateButtons();

        } else if (step.id === 'tipo-demanda') {
            selectedValues[step.id] = val;
            buildActiveSteps();
            renderCards(step);
            updateButtons();

        } else {
            selectedValues[step.id] = val;
            renderCards(step);
            updateButtons();
        }
    });

    $('#btnPrev').on('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            renderStep(currentStepIndex);
        }
    });

    $('#btnNext').on('click', async () => {
        const step = activeSteps[currentStepIndex];
        if (currentStepIndex < activeSteps.length - 1) {
            currentStepIndex++;
            renderStep(currentStepIndex, true);
        } else if (step.id === 'contact-info') {
            // Botão enviar - enviar dados para API
            setContactInputsDisabled(true);
            setButtonsDisabled(true, true);

            const dataToSend = {
                name: selectedValues['contact-name'],
                email: selectedValues['contact-email'],
                whatsapp: selectedValues['contact-phone'],
                project_title: project.title,
                project_description: project.description
            };

            try {
                const response = await fetch(`${window.apiURL}/post-project`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify(dataToSend)
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(errorText || 'Erro desconhecido');
                }

                let data = await response.json();
                if (!data.responseData) {
                    throw new Error("No response data");

                }
                data = data.responseData;
                console.log(data);
                localStorage.removeItem(STORAGE_KEY);

                if (data.loggedIn) {
                    let url = 'projeto-postado?r=1';
                    if (data.projectId) {
                        url += "&pid=" + data.projectId
                    }
                    location.href = url;

                } else {
                    let url = 'projeto-postado?e=' + dataToSend.email;
                    if (data.resetPasswordToken) {
                        url += `&p=1&h=${data.resetPasswordToken.h}&t=${data.resetPasswordToken.t}&n=${data.resetPasswordToken.n}`;
                    }
                    if (data.projectId) {
                        url += "&pid=" + data.projectId
                    }
                    location.href = url;
                }
            } catch (err) {
                console.log(err);
                setContactInputsDisabled(false);
                setButtonsDisabled(false);
                updateButtons();
                showModal();
            }
        }
    });

    // Tenta carregar estado salvo, se não carregar inicia padrão
    // localStorage.removeItem('project-data-v1');
    // localStorage.removeItem('project-data-v2');
    // localStorage.removeItem('project-data-v3');
    if (loadState()) {
        buildActiveSteps();
        renderStep(currentStepIndex);
    } else {
        buildActiveSteps();
        renderStep(0);
    }
});



function showModal() {
    document.getElementById('error-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('error-modal').style.display = 'none';
}


window.addEventListener('click', function (event) {
    const modal = document.getElementById('error-modal');
    const content = document.querySelector('.modal-content');

    if (modal.style.display === 'flex' && !content.contains(event.target)) {
        // Em vez de fechar, dá shake
        content.classList.add('shake');
        setTimeout(() => {
            content.classList.remove('shake');
        }, 400); // tempo da animação
    }
});
