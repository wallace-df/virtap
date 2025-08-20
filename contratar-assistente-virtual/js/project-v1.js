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

    const authUrl = `${window.apiURL}/auth/google/client?popup=1&next=${generatedState}`;
    const popup = window.open(authUrl, 'oauth-popup', 'width=500,height=600');

    let loginHandled = false;
    let ctx = this;

    $(this).prop('disabled', true).addClass('disabled').find('span').text('Entrando...')

    function restoreBtn() {
        $(ctx).prop('disabled', false).removeClass('disabled').find('span').text('Entrar com o Google')

    }

    // 3. Adiciona um 'ouvinte' para mensagens de sucesso/erro da pop-up
    const messageListener = (event) => {
        // Verifica se a origem da mensagem é confiável e se já não foi tratada
        if (event.origin !== location.origin || loginHandled) {
            return;
        }

        const { type, state, name, email, newUser } = event.data;

        // Valida o 'state' para prevenir ataques CSRF
        if (state === generatedState) {
            loginHandled = true;
            restoreBtn();

            if (type === 'oauth_success') {
                currentStepIndex++;
                renderStep(currentStepIndex, false, { name, email, newUser });
            } else if (type === 'oauth_error') {
                showModal();
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
        try {
            if (popup.closed) {
                clearInterval(checkPopupClosed);
                window.removeEventListener('message', messageListener, false);

                if (!loginHandled) {
                    restoreBtn();
                }
            }

        } catch (err) {

        }
    }, 500);
}

const STORAGE_KEY = 'project-data-v1';

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
        title: "Quero delegar as seguintes tarefas...",
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
        title: "Quero delegar as seguintes tarefas...",
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
        title: "Quero delegar as seguintes tarefas...",
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
        title: "Volume de trabalho",
        cards: [
            { value: "full-time", icon: "fa-clock", label: "Full-time (tempo integral)" },
            { value: "part-time", icon: "fa-hourglass-half", label: "Algumas horas" },
            { value: "few-hours", icon: "fa-calendar-day", label: "Não tenho certeza" },
        ],
    },
    {
        id: 'project-summary',
        title: "Resumo do projeto",
        cards: [] // Sem cards, aqui vai o formulário
    },
    {
        id: 'email-confirmation',
        title: "Estamos quase lá",
        cards: [] // Formulário de contato
    },
    {
        id: 'contact-info',
        title: "Publique seu projeto",
        cards: [] // Formulário de contato
    },

];

let currentStepIndex = 0;
let selectedValues = {};
let activeSteps = [];
let project = {}; // <-- Novo campo no estado
let intl = null;

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

    let period = '';
    let vol = selectedValues["volume-trabalho"];
    if (vol === 'full-time') {
        period = ' - Full-time';
    } else if (vol === 'part-time') {
        period = ' - Meio-período';
    }

    return `${typeText}${period}`;
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
    activeSteps.push(allSteps.find(s => s.id === 'email-confirmation'));
    activeSteps.push(allSteps.find(s => s.id === 'contact-info'));

    // clean selections no longer valid
    for (const key in selectedValues) {
        if (!activeSteps.some(s => s && s.id === key)) {
            delete selectedValues[key];
        }
    }
}

function renderCards(step, extra) {
    const $cardsWrapper = $('#cardsWrapper');
    $cardsWrapper.empty();

    $("#right-container").removeClass('full');

    if (step.id === 'project-summary') {
        // Render form inputs for title and description
        const titleVal = project.title.substring(0, 50);
        const descVal = project.description.substring(0, 5000);
        $("#right-container").addClass('full');

        const $form = $(`
                <div id="projectSummaryForm">
                    <label for="projectTitleInput" style="margin-top: 0"><strong>Título do projeto</strong></label>
                    <input class="form-control" type="text" id="projectTitleInput" value="${titleVal}" maxlength="50" />
                    <label for="projectDescriptionTextarea"><strong>Descrição do projeto</strong></label>
                    <textarea class="form-control" id="projectDescriptionTextarea" rows="11" maxlength="5000">${descVal}</textarea>
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

    if (step.id === 'email-confirmation') {
        const $form = $(`
            <div id="contactInfoForm" style="text-align:center;">
                <p>Finalize seu cadastro para publicar seu projeto.<br/> <span class="small">Leva menos de um minuto!</small></p>

                <div class="login-buttons">
                    <a class="btn btn-google" id="btn-google">
                        <img src="/img/google-icon.svg"> <span>Entrar com o Google</span>
                    </a>
                </div>
            </div>
        `);


        if (extra && extra.sessionExpired) {
            $("#stepTitle").html("Sua sessão expirou por segurança");
            $form.find('p').html('Mas não se preocupe: seu projeto ja está salvo!<br/>Por favor, finalize novamente seu cadastro para publicá-lo.<br/>');
        }

        $cardsWrapper.append($form);
        $("#btn-google").off().on('click', handleGoogleLogin);
        return;
    }

    if (step.id === 'contact-info') {
        const name = selectedValues['contact-name'] || extra.name || '';
        const phone = selectedValues['contact-phone'] || '';

        if (extra.newUser === '1') {
            const $form = $(`
            <div id="contactInfoForm" style="text-align:left; max-width: 400px">
                <p class="text-center">Para que você possa receber propostas, complete seus dados abaixo.</p>


                <div class="form-group">
                    <label for="contactNameInput" class="d-block" style="text-align:left">Nome</label>
                    <input type="text" id="contactNameInput" class="form-control" value="${name.substring(0, 30)}" maxlength="30" />
                    <em>Nome deve ter pelo menos 5 caracteres.</em>
                </div>
                
                <div class="form-group">
                    <label for="contactPhoneInput" class="d-block" style="text-align:left">Whatsapp</label>
                    <input type="tel" id="contactPhoneInput" class="form-control" value="${phone}" placeholder="(99) 99999-9999"  />
                    <em>Número incorreto.</em>
                </div>

                <div class="form-group">
                    <label for="contactNameEmail" class="d-block" style="text-align:left">E-mail</label>
                    <input type="text" id="contactEmailInput" class="form-control" value="${extra.email}" readonly />
                </div>

            </div>
            `);

            $cardsWrapper.append($form);

            $("#contactPhoneInput").find('.form-group').removeClass('error');

            intl = window.intlTelInput(document.getElementById('contactPhoneInput'), {
                autoInsertDialCode: true,
                initialCountry: "BR",
                separateDialCode: true,
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
            });

            $("#contactNameInput").off().on('blur', function () {
                let txt = $(this).val();
                if (txt.trim().length < 5) {
                    $(this).closest('.form-group').addClass('error');
                } else {
                    $(this).closest('.form-group').removeClass('error');
                }
            });

            $("#contactPhoneInput").off().on('blur', function () {
                let number = intl.getNumber();
                intl.setNumber(number);
                if (!intl.isValidNumber()) {
                    $(this).closest('.form-group').addClass('error');
                } else {
                    $(this).closest('.form-group').removeClass('error');
                }
            });

            $('#contactNameInput').on('input', function () {
                selectedValues['contact-name'] = $(this).val().trim();
                updateButtons();
            }).trigger('input').trigger('blur');

            $('#contactPhoneInput').on('input', function () {
                selectedValues['contact-phone'] = (intl.isValidNumber() ? intl.getNumber() : "")
                updateButtons();
            }).trigger('input');



        } else {
            const $form = $(`
            <div id="contactInfoForm" data-existing-user style="text-align:center; max-width: 400px">
                <p>Bem-vindo(a) de volta, <strong data-name></strong>!</p>

                <label for="contactNameEmail" class="d-block" style="text-align:left">Seu e-mail:</label>
                <input type="text" id="contactEmailInput" class="form-control" value="${extra.email}" readonly disabled data-lpignore="true" />

                <p class="mt-4">Para publicar seu projeto, clique no botão <strong>Publicar</strong>.<p/>
            </div>
            `);
            $form.find('[data-name]').text(extra.name);
            $cardsWrapper.append($form);

        }
        updateButtons();
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
                    <h5 class="card-title">${card.label}</h5>
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
function renderStep(index, fromNextButton = false, extra) {
    if (index < 0 || index >= activeSteps.length) return;
    currentStepIndex = index;
    const step = activeSteps[index];
    $('#stepTitle').html(step.title);

    if (fromNextButton && step.id === 'project-summary') {
        project = {
            title: generateProjectTitle(),
            description: generateProjectDescription()
        };
        saveState();
    }

    const $cardsWrapper = $('#cardsWrapper');
    setButtonsDisabled(true);
    $cardsWrapper.fadeOut(150, () => {
        renderCards(step, extra);
        $cardsWrapper.fadeIn(150, () => {
            setButtonsDisabled(false);
            updateButtons();
        });

    });
}

function updateButtons() {
    $('#btnPrev').prop('disabled', currentStepIndex === 0);
    $('#btnNext').show();

    const step = activeSteps[currentStepIndex];
    const val = selectedValues[step.id];
    $('#btnNext').find('span').text('Próximo');

    if (multiSelectSteps.includes(step.id)) {
        $('#btnNext').prop('disabled', !Array.isArray(val) || val.length === 0 || currentStepIndex === activeSteps.length - 1);
    } else if (step.id === 'project-summary') {
        let projectTitle = $("#projectTitleInput").val().trim();
        let projectDescription = $("#projectDescriptionTextarea").val().trim();
        $('#btnNext').prop('disabled', projectTitle.length < 10 || projectDescription.length < 50);
    }
    else if (step.id === 'email-confirmation') {
        $('#btnNext').hide();
    } else if (step.id === 'contact-info') {

        let $f = $("#contactInfoForm");
        if ($f.is('[data-existing-user]')) {
            $('#btnNext').prop('disabled', false);
            $('#btnNext').find('span').text('Publicar');

        } else {
            const name = selectedValues['contact-name'] || '';
            const phone = selectedValues['contact-phone'] || '';

            const valid = name.length >= 5 && phone.length > 0;

            $('#btnNext').prop('disabled', !valid);
            $('#btnNext').find('span').text('Publicar');

        }
        return;
    } else {
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
            name: $("#contactNameInput").val(),
            email: $("#contactEmailInput").val(),
            whatsapp: (intl && intl.isValidNumber() ? intl.getNumber() : null),
            project_title: project.title,
            project_description: project.description,
            utm_params: getUTMParams()
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
                if (response.status === 401) {
                    throw {
                        errorCode: 'NOT_AUTHORIZED'
                    }
                } else if (response.status === 400) {
                    throw await response.json();
                } else {
                    const errorText = await response.text();
                    throw new Error(errorText || 'Erro desconhecido');
                }
            }

            let data = await response.json();
            if (!data.responseData) {
                throw new Error("No response data");

            }
            data = data.responseData;
            console.log(data);
            localStorage.removeItem(STORAGE_KEY);

            let url = 'projeto-postado';
            if (data.projectId) {
                url += "?pid=" + data.projectId
            }
            location.href = url;
        } catch (err) {
            console.log(err);
            setContactInputsDisabled(false);
            setButtonsDisabled(false);
            updateButtons();

            if (err && err.errorCode === 'NOT_AUTHORIZED') {
                currentStepIndex--;
                renderStep(currentStepIndex, false, { sessionExpired: true });

            } else {
                showModal();
            }
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
