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
            title: "Selecione todas aplicáveis e clique em próximo...",
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
            title: "Selecione todas aplicáveis e clique em próximo...",
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
                { value: "low", icon: "fa-turtle", label: "Baixo" },
                { value: "medium", icon: "fa-walking", label: "Médio" },
                { value: "high", icon: "fa-running", label: "Alto" },
            ],
        },
        {
            id: 'idioma',
            title: "Idioma",
            cards: [
                { value: "portuguese", icon: "fa-language", label: "Português" },
                { value: "english", icon: "fa-globe", label: "Inglês" },
                { value: "spanish", icon: "fa-comment", label: "Espanhol" },
            ],
        },
        {
            id: 'prazo',
            title: "Prazo para começar",
            cards: [
                { value: "immediate", icon: "fa-bolt", label: "Imediato" },
                { value: "week", icon: "fa-calendar-week", label: "Dentro de uma semana" },
                { value: "month", icon: "fa-calendar-alt", label: "Dentro de um mês" },
            ],
        },
    ];

    let currentStepIndex = 0;
    let selectedValues = {};
    let activeSteps = [];

    const multiSelectSteps = ['demandas-pessoais', 'demandas-profissionais', 'demandas-pessoais-profissionais'];

    function buildActiveSteps() {
        activeSteps = [allSteps[0]]; // sempre começa com tipo demanda

        const tipo = selectedValues['tipo-demanda'];
        if (tipo === 'personal') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-pessoais'));
        } else if (tipo === 'professional') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-profissionais'));
        } else if (tipo === 'both') {
            activeSteps.push(allSteps.find(s => s.id === 'demandas-pessoais-profissionais'));
        }

        // os demais passos fixos
        activeSteps.push(allSteps.find(s => s.id === 'volume-trabalho'));
        activeSteps.push(allSteps.find(s => s.id === 'idioma'));
        activeSteps.push(allSteps.find(s => s.id === 'prazo'));

        // Limpa seleções que não existem mais
        for (const key in selectedValues) {
            if (!activeSteps.some(s => s.id === key)) {
                delete selectedValues[key];
            }
        }
    }

    function renderCards(step) {
        const $cardsWrapper = $('#cardsWrapper');
        $cardsWrapper.empty();

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
    }

    function renderStep(index) {
        if (index < 0 || index >= activeSteps.length) return;
        currentStepIndex = index;
        const step = activeSteps[index];
        $('#stepTitle').text(step.title);

        const $cardsWrapper = $('#cardsWrapper');
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
        } else {
            $('#btnNext').prop('disabled', !val || currentStepIndex === activeSteps.length - 1);
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
            // selectedValues[step.id] = val;
            // currentStepIndex++;
            // renderStep(currentStepIndex);
            // updateButtons();
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

    // Inicializa passos ativos e renderiza o primeiro
    buildActiveSteps();
    renderStep(currentStepIndex);
});
