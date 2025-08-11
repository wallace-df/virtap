const STORAGE_KEY = 'project-data-v1';
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
            title: "Preciso de alguém para trabalhar...",
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
        }
    ];

    let currentStepIndex = 0;
    let selectedValues = {};
    let activeSteps = [];

    const multiSelectSteps = ['demandas-pessoais', 'demandas-profissionais', 'demandas-pessoais-profissionais'];

    function saveState() {
        const state = {
            currentStepIndex,
            selectedValues,
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
                return true;
            }
        } catch (e) {
            console.warn('Erro ao carregar estado do projeto:', e);
        }
        return false;
    }

    function generateProjectTitle() {
        const type = selectedValues["tipo-demanda"];
        let typeText = type === "personal" ? "Assistente Pessoal" :
            type === "professional" ? "Assistente Executiva" :
                "Assistente Pessoal e Executiva";
        return `Preciso de ${typeText}`;
    }

    function generateProjectDescription() {
        const workloadMap = {
            "full-time": "tempo integral",
            "part-time": "meio período",
            "few-hours": "algumas horas por dia ou semana"
        };
        const workloadValue = selectedValues['volume-trabalho'] || 'part-time';
        const workloadText = workloadMap[workloadValue] || "meio período";

        const taskLabels = [];
        for (const step of activeSteps) {
            if (!step.cards) continue;
            const val = selectedValues[step.id];
            if (!val) continue;

            if (Array.isArray(val)) {
                val.forEach(v => {
                    const card = step.cards.find(c => c.value === v);
                    if (card) taskLabels.push(card.label);
                });
            } else {
                const card = step.cards.find(c => c.value === val);
                if (card) taskLabels.push(card.label);
            }
        }

        return `Preciso de alguém (${workloadText}) para cuidar das seguintes tarefas: ${taskLabels.join(", ")}.`;
    }

    function buildActiveSteps() {
        activeSteps = [allSteps[0]]; // always start with demand type

        const tipo = selectedValues['tipo-demanda'];
        if (tipo === 'personal') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-pessoais'));
        } else if (tipo === 'professional') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-profissionais'));
        } else if (tipo === 'both') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-pessoais-profissionais'));
        }

        // fixed steps
        activeSteps.push(allSteps.find(s => s.id === 'volume-trabalho'));

        // add the final summary step
        activeSteps.push(allSteps.find(s => s.id === 'project-summary'));

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
            const projectTitle = generateProjectTitle();
            const projectDescription = generateProjectDescription();

            const titleVal = selectedValues['project-title'] || projectTitle;
            const descVal = selectedValues['project-description'] || projectDescription;

            const $form = $(`
                <div id="projectSummaryForm" style="text-align:left; max-width:600px; margin: 0 auto;">
                    <label for="projectTitleInput"><strong>Título do projeto</strong></label><br>
                    <input type="text" id="projectTitleInput" value="${titleVal}" style="width: 100%; padding: 8px; font-size: 1.1rem; margin-bottom: 1rem;" />
                    <label for="projectDescriptionTextarea"><strong>Descrição do projeto</strong></label><br>
                    <textarea id="projectDescriptionTextarea" rows="5" style="width: 100%; padding: 8px; font-size: 1rem;">${descVal}</textarea>
                </div>
            `);

            $cardsWrapper.append($form);

            // Bind inputs to selectedValues to save state live
            $('#projectTitleInput').on('input', function () {
                selectedValues['project-title'] = $(this).val();
                saveState();
            });
            $('#projectDescriptionTextarea').on('input', function () {
                selectedValues['project-description'] = $(this).val();
                saveState();
            });

            saveState();
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

    function renderStep(index) {
        if (index < 0 || index >= activeSteps.length) return;
        currentStepIndex = index;
        const step = activeSteps[index];
        $('#stepTitle').text(step.title);

        const $cardsWrapper = $('#cardsWrapper');
        // Only fade on step change (optional)
        $cardsWrapper.fadeOut(150, () => {
            renderCards(step);
            $cardsWrapper.fadeIn(150);
            updateButtons();
            updateSelectedText();
        });
    }

    function updateSelectedText() {
        const step = activeSteps[currentStepIndex];
        const val = selectedValues[step.id];

        if (Array.isArray(val)) {
            if (val.length > 0) {
                const labels = step.cards
                    .filter(c => val.includes(c.value))
                    .map(c => c.label);
                $('#selectedValue').text(labels.join(', '));
            } else {
                $('#selectedValue').text('Nenhum');
            }
        } else {
            if (val) {
                const label = step.cards.find(c => c.value === val)?.label || 'Nenhum';
                $('#selectedValue').text(label);
            } else {
                $('#selectedValue').text('Nenhum');
            }
        }
    }

    function updateButtons() {
        $('#btnPrev').prop('disabled', currentStepIndex === 0);

        const step = activeSteps[currentStepIndex];
        const val = selectedValues[step.id];

        if (multiSelectSteps.includes(step.id)) {
            $('#btnNext').prop('disabled', !Array.isArray(val) || val.length === 0 || currentStepIndex === activeSteps.length - 1);
        } else if (step.id === 'project-summary') {
            // On last step, allow next if title and description filled
            const titleFilled = selectedValues['project-title'] && selectedValues['project-title'].trim().length > 0;
            const descFilled = selectedValues['project-description'] && selectedValues['project-description'].trim().length > 0;
            $('#btnNext').prop('disabled', !(titleFilled && descFilled));
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
            updateSelectedText();

        } else if (step.id === 'tipo-demanda') {
            selectedValues[step.id] = val;
            buildActiveSteps();
            renderCards(step);
            updateButtons();
            updateSelectedText();

        } else {
            selectedValues[step.id] = val;
            renderCards(step);
            updateButtons();
            updateSelectedText();
        }
    });

    $('#btnPrev').on('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            renderStep(currentStepIndex);
        }
    });

    $('#btnNext').on('click', () => {
        if (currentStepIndex < activeSteps.length - 1) {
            currentStepIndex++;
            renderStep(currentStepIndex);
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
