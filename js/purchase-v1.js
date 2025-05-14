
function handleSuccess() {
  $("#loading").html('<div><h1>Compra realizada com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
  $("#loading").show();
  $("#sign_up").hide();
}

function handleError(response) {
  console.log(response);
  let showGenericError = true;
  $("#loading").hide();
  $("#sign_up").hide();

  if (response) {

    if (response.errorCode === 'ALREADY_PURCHASED') {
      $("#loading").html('<div><h1>Você já adquiriu este curso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
      $("#loading").show();
      showGenericError = false;
    } else if (response.errorCode === 'INVALID_ASSISTANT_STATUS') {
      if (response.errorData.status === 1) {
        $("#sign_up").show();
        $("#under-review-profile").show();
        $("#under-review-profile").find('[data-email]').text(response.errorData.email).show();

        showGenericError = false;
      } else if (response.errorData.status === 3) {
        $("#sign_up").show();
        $("#inactive-profile").show();
        $("#inactive-profile").find('[data-email]').text(response.errorData.email).show();

        showGenericError = false;
      }
    }
  }

  if (showGenericError) {
    $("#loading-error").show();
  }

}

function showPaymentForm(initialDetails, getTitleFunc, getButtonLabelFunc, prepareFormDataFunc, purchaseEndpoint, successHandler, errorHandler) {
  let hasEmail = (initialDetails.email && initialDetails.email.trim().length > 0 ? true : false);

  let $cardContainer = $('[data-card-container');
  $cardContainer.CardJs();

  let $cardNumber = $(".card-number-wrapper");
  let $cardName = $(".name-wrapper");
  let $cardExpiration = $(".expiry-wrapper");
  let $cardCVC = $(".cvc-wrapper");

  $cardNumber.wrap($("<div data-field='card_number' data-card></div>"));
  $cardName.wrap($("<div data-field='card_holder'  data-card></div>"));
  $cardCVC.wrap($("<div data-field='card_cvc' data-card></div>"));
  $cardExpiration.wrap($("<div data-field='card_expiration' data-card></div>"));

  $('<label>Número do cartão</label>').insertBefore($cardNumber);
  $('<em>Por favor, informe um número válido.</em>').insertAfter($("#card-number").eq(0));

  $('<label>Nome no cartão</label>').insertBefore($cardName);
  $('<em>Por favor, informe um nome válido.</em>').insertAfter($("#card-holder").eq(0));

  $('<label>Validade</label>').insertBefore($cardExpiration);
  $cardExpiration.find('input').eq(0).attr('id', 'card-expiration');
  $cardExpiration.append('<em>Por favor, informe um data de expiração válida.</em>');

  $('<label>Código de segurança</label>').insertBefore($cardCVC);
  $('<em>Por favor, informe um CVC válido.</em>').insertAfter($("#card-cvc").eq(0));

  $cardNumber.addClass('mb-3');
  $cardName.addClass('mb-3');

  let $container = $(
    '<div class="d-flex" style="gap: 1rem; flex-wrap: wrap">' +
    '   <div data-first style="flex-grow: 1"></div>' +
    '   <div data-second style="flex-grow: 1"></div>' +
    '</div>'
  );

  $(".expiry-container").detach().appendTo($container.find('[data-first]'));
  $(".cvc-container").detach().appendTo($container.find('[data-second]'));

  $cardContainer.append($container);

  // Evento de mudança na UF
  $('#state').change(function () {
    const ufSelecionado = $(this).val();  // Pega a UF selecionada
    populateMunicipios(ufSelecionado);    // Chama a função para popular os municípios
  });

  let $installments = $("#installments");
  $installments.empty();
  initialDetails.payment_config.installments.forEach(function (config) {
    $installments.append(`<option value="${config.installments}_${config.amount}">${config.installments}x de R$ ${(config.amount / 100).toFixed(2).replace('.', ',')}</option>`);
  });

  $("#name").val(initialDetails.name);
  $("#cpf_cnpj").val(initialDetails.cpf_cnpj);
  $("#email").val(initialDetails.email);
  $("#email").prop('disabled', hasEmail);

  if (hasEmail) {
    loggedInUser = initialDetails.email;
    $("#confirmation_email").closest('.form-group').hide();
    $("#confirmation_email").val(initialDetails.email);
    $("#login-note").show();
  } else {
    $("#confirmation_email").closest('.form-group').show();
    $("#login-note").hide();
  }

  if (initialDetails.billing_details) {
    $("[data-auto-fillable]").hide();
    hasBillingDetails = true;
  }

  // 'Virtap | Assistente Virtual | Comprar curso';
  document.title = getTitleFunc();

  //'Comprar agora'
  $("#submit-btn").text(getButtonLabelFunc());
  $("#loading").hide();
  $("#sign_up").show();
  setTimeout(() => $("#name").focus(), 300);
  ready = true;

  let getFields = function () {

    $("[data-field]").removeClass("error");
    let billingDetails = null;
    let paymentDetails = {
      gateway: 'vindi',
      method: 'credit_card',
      details: {
      }
    };
    let hasError = false;

    if (!hasBillingDetails) {
      billingDetails = {};
      $("[data-field]").each(function () {
        let $field = $(this);
        if (!$field.is('[data-card]')) {
          let val = $field.data('get-field')();
          if (val === undefined && !$field.is('[data-optional]')) {
            hasError = true;
          } else {
            billingDetails[$field.attr('data-field')] = val;
          }
        }
      });
    }

    $("[data-card]").each(function () {
      let $field = $(this);
      let val = $field.data('get-field')();
      if (val === undefined && !$field.is('[data-optional]')) {
        hasError = true;
      } else {
        paymentDetails.details[$field.attr('data-field')] = val;
      }
    });

    if (hasError) {
      return null;
    } else {
      return { billingDetails: billingDetails, paymentDetails: paymentDetails }
    }

  }

  let $name = $("#name");
  let $email = $("#email");
  let $confirmation_email = $("#confirmation_email");
  let $cpf_cnpj = $("#cpf_cnpj");
  let $address = $("#address");
  let $address_number = $("#address_number");
  let $complement = $("#complement");
  let $neighborhood = $("#neighborhood");
  let $state = $("#state");
  let $cep = $("#cep");
  let $city = $("#city");
  let $phone = $("#phone");
  let $card_number = $("#card-number");
  let $card_holder = $("#card-holder");
  let $card_expiration = $("#card-expiration");
  let $card_cvc = $("#card-cvc");

  // Name
  $name.parent().data('get-field', function () {
    let name = $name.val();
    if (!validateName(name)) {
      $name.parent().addClass('error');
      return undefined;
    }
    return name;
  });

  // Email 
  $email.parent().data('get-field', function () {
    let email = $email.val();
    if (!validateEmail(email)) {
      $email.parent().addClass('error');
      return undefined;
    }
    return email;
  });

  // Confirmation email 
  $confirmation_email.parent().data('get-field', function () {
    let email = $email.val();
    let confirmation_email = $confirmation_email.val();
    if (email !== confirmation_email) {
      $confirmation_email.parent().addClass('error');
      return undefined;
    }
    return email;
  });

  // CPF/CNPJ
  $cpf_cnpj.parent().data('get-field', function () {
    let cpf_cnpj = $cpf_cnpj.val();
    if (!validateCPFCNPJ(cpf_cnpj)) {
      $cpf_cnpj.parent().addClass('error');
      return undefined;
    } else {
      $cpf_cnpj.val(formatCPFCNPJ(cpf_cnpj));
    }
    return cpf_cnpj;
  });

  // Address
  $address.parent().data('get-field', function () {
    let address = $address.val();
    if (!validateAddress(address)) {
      $address.parent().addClass('error');
      return undefined;
    }
    return address;
  });

  // Address number
  $address_number.parent().data('get-field', function () {
    let address_number = $address_number.val();
    if (!validateAddressNumber(address_number)) {
      $address_number.parent().addClass('error');
      return undefined;
    }
    return address_number;
  });

  // Complement 
  $complement.closest('[data-field]').data('get-field', function () {
    return $complement.val();
  });

  // Neighborhood
  $neighborhood.parent().data('get-field', function () {
    let neighborhood = $neighborhood.val();
    if (!validateNeighborhood(neighborhood)) {
      $neighborhood.parent().addClass('error');
      return undefined;
    }
    return neighborhood;
  });

  // State
  $state.parent().data('get-field', function () {
    let state = $state.val();
    if (!state) {
      $state.parent().addClass('error');
      return undefined;
    }
    return state;
  });

  // CEP
  $cep.parent().data('get-field', function () {
    let cep = $cep.val();
    if (!validateCEP(cep)) {
      $cep.parent().addClass('error');
      return undefined;
    }
    return cep;
  });

  // City 
  $city.parent().data('get-field', function () {
    let city = $city.val();
    if (!city) {
      $city.parent().addClass('error');
      return undefined;
    }
    return city;
  });

  // Phone 
  $phone.closest('[data-field]').data('get-field', function () {
    let phone = $phone.val();

    if (!phone || phone.trim().length === 0) {
      $phone.closest('[data-field]').addClass('error');
      return undefined;
    }

    if (!validatePhone(phone)) {
      $phone.closest('[data-field]').addClass('error');
      return undefined;
    }
    return intl.getNumber();
  });

  // Card number 
  $card_number.closest('[data-field]').data('get-field', function () {
    let card_number = $card_number.val();
    if (!validateCreditCard(card_number)) {
      $card_number.closest('[data-field]').addClass('error');
      return undefined;
    }
    return card_number;
  });

  // Card holder
  $card_holder.closest('[data-field]').data('get-field', function () {
    let card_holder = $card_holder.val();
    if (card_holder.length < 10) {
      $card_holder.closest('[data-field]').addClass('error');
      return undefined;
    }
    return card_holder;
  });

  // Card expiration
  $card_expiration.closest('[data-field]').data('get-field', function () {
    let m = $cardContainer.CardJs('expiryMonth');
    let y = $cardContainer.CardJs('expiryYear');
    if (!CardJs.isExpiryValid(m, y)) {
      $card_expiration.closest('[data-field]').addClass('error');
      return undefined;
    }
    return {
      month: m,
      year: y
    };
  });

  // Card CVC 
  $card_cvc.closest('[data-field]').data('get-field', function () {
    let card_cvc = $card_cvc.val();
    if (!/^\d{3}$/.test(card_cvc)) {
      $card_cvc.closest('[data-field]').addClass('error');
      return undefined;
    }

    return card_cvc;
  });

  // Installments
  $installments.closest('[data-field]').data('get-field', function () {
    let installments = $installments.val();
    if (!installments) {
      $installments.closet('[data-field]').addClass('error');
      return undefined;
    }
    return installments;
  });

  // Blur validation.
  $("[data-field]").each(function () {
    let $field = $(this);
    $(this).find('input,select').on('blur', function () {
      let val = $(this).val()

      if ($field.is('[data-optional]')) {
        if (!val || val.trim().length === 0) {
          $field.removeClass('error');
          return;
        }
      }

      if (val && val.trim().length > 0 || $field.is('[data-not-empty]')) {
        $field.removeClass('error');
        $field.data('get-field')();
      }
    })
  });

  $(submitBtn).on('click', async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    // Prevent multiple form submissions
    if (submitBtn.disabled || !ready) {
      return;
    }

    $("[data-field]").removeClass("error");
    $("p.alert").hide();

    let fields = $("[data-field]");
    let hasError = false;
    fields.each(function (index) {
      let func = $(this).data('get-field');
      if (func === undefined) {
        hasError = true;
      } else (
        func()
      )
    });

    if (hasError) {
      return;
    }

    // Disable form submission while loading
    $("#submit-btn").prop('disabled', true).text('Por favor, aguarde...');
    $("input,select").prop('disabled', true);

    // Create the subscription
    try {

      let fields = getFields();
      if (!fields) {
        return;
      }


      let billingDetails = fields.billingDetails;
      let paymentDetails = fields.paymentDetails;

      let formData = new FormData();
      formData.append("email", $("#email").val());
      if (billingDetails) {
        formData.append("billing_details", JSON.stringify(billingDetails));
      }
      formData.append("payment_details", JSON.stringify(paymentDetails));

      prepareFormDataFunc(formData);

      // Create the PaymentIntent
      const res = await fetch(`${window.apiURL}/${purchaseEndpoint}`, {
        method: "POST",
        credentials: "include",
        body: formData
      });

      if (res.status !== 200) {
        console.log(res);
        throw await res.json();
      }

      const data = await res.json();
      if (data.responseData) {
        if (data.responseData.charged) {
          successHandler();
          redirectToNext();
        } else {
          if (paymentDetails.method === 'credit_card') {
            throw new Error("Failure making payment using credit card.");
          } else {
            $("#loading").text(JSON.stringify(data.responseData.subscription));
            $("#loading").show();
            $("#sign_up").hide();
          }
        }

      } else {
        throw new Error("Failure making payment.");
      }

    } catch (err) {
      if (!err || !errorHandler(err)) {
        console.log(err);
        $("#generic-error").show();
      }
    }
    finally {
      $("#submit-btn").prop('disabled', false).text(getButtonLabelFunc());
      $("input,select").prop('disabled', false);
      if (loggedInUser) {
        $("#email").prop('disabled', true);
      }
    }
  });

}

function init() {
  let course = getCourse();

  if (course !== 'form-ap') {
    console.log('Invalid course: ', course);
    handleError(null);
    return;
  }

  $.ajax({
    url: window.apiURL + '/purchase?course=' + course,
    processData: false,
    contentType: false,
    type: 'GET',
    xhrFields: {
      withCredentials: true
    },
    error: async function (xhr) {
      handleError(xhr.responseJSON);
    },
    success: function (response) {
      let initialDetails = response.responseData;
      showPaymentForm(initialDetails, () => 'Adquirir curso', () => 'Comprar agora', (fd) => { fd.append("course", course) }, 'purchase', handleSuccess, handleError);
    }
  });
}

init();
