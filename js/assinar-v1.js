window.signupAPIEndpoint = 'https://api.virtap.com.br';
window.assistantDashboard = 'https://assistentes.virtap.com.br';
window.signupAPIEndpoint = 'http://localhost:3000';
window.assistantDashboard = 'http://localhost:8080';
window.initAutocomplete = initAutocomplete;

let formData = new FormData();
let hasBillingDetails = false;
let loggedInUser = null;
let autocomplete;
let submitBtn = document.getElementById('submit-btn');
let input = document.querySelector("#phone");
let intl = window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  autoInsertDialCode: true,
  initialCountry: "BR",
  separateDialCode: true
});

let plans = {
  'BASIC': 'Basic',
  'VIP': 'Vip'
};


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getPlan() {
  let target_plan = getParameterByName('plano');
  if (target_plan) {
    target_plan = target_plan.toUpperCase();
  }
  return target_plan;
}

function getNext() {
  let next = getParameterByName('next');
  let url = window.assistantDashboard;
  if (next && next.trim().length > 0) {
    if (url.endsWith('/')) {
      url += next;

    } else {
      url += '/' + next;

    }
  }
  return url;

}

function redirectToNext() {
  let url = getNext();
  setTimeout(() => document.location.href = url, 2000);
}

function validateName(name) {
  if (!name || name.trim().length < 10) {
    return false;
  }
  return true;
}

function validateCPFCNPJ(cpf_cnpj) {
  const cleanDocument = cpf_cnpj.replace(/\D/g, '');
  if (cleanDocument.length === 11) {
    return validateCPF(cpf_cnpj);
  } else if (cleanDocument.length === 14) {
    return validateCNPJ(cpf_cnpj);
  } else {
    return false;
  }
}

function validateCPF(cpf) {
  // Check if the input consists of only numbers or a properly formatted CPF (XXX.XXX.XXX-XX)
  if (!/^\d{11}$/.test(cpf) && !/^\d{3}(\.\d{3}){2}-\d{2}$/.test(cpf)) {
    return false;
  }

  cpf = cpf.replace(/\D/g, ''); // Remove any non-numeric characters (dots, hyphens)

  // Check if CPF has 11 digits and is not composed of all identical digits
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  // Function to calculate the verification digit
  const calcDigit = (cpf, pos) => {
    let sum = 0, multiplier = pos;
    for (let i = 0; i < pos - 1; i++) sum += cpf[i] * multiplier--;
    return (sum % 11 < 2) ? 0 : 11 - (sum % 11);
  };

  // Validate the two verification digits
  if (parseInt(cpf[9]) !== calcDigit(cpf, 10) || parseInt(cpf[10]) !== calcDigit(cpf, 11)) return false;

  return true;
}

function validateCNPJ(cnpj) {
  // Check if the input is either numeric (14 digits) or in the correct format (XX.XXX.XXX/XXXX-XX)
  if (!/^\d{14}$/.test(cnpj) && !/^\d{2}(\.\d{3}){2}\/\d{4}-\d{2}$/.test(cnpj)) {
    return false;
  }

  cnpj = cnpj.replace(/\D/g, ''); // Remove non-numeric characters (dots, slashes, hyphens)

  // Check if CNPJ has 14 digits and is not composed of all identical digits
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

  // Function to calculate the verification digit
  const calcDigit = (cnpj, weights) => {
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
      sum += cnpj[i] * weights[i];
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  // Weights for the first and second check digits
  const firstDigitWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const secondDigitWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  // Validate the two check digits
  const firstCheckDigit = calcDigit(cnpj, firstDigitWeights);
  const secondCheckDigit = calcDigit(cnpj, secondDigitWeights);

  if (parseInt(cnpj[12]) !== firstCheckDigit || parseInt(cnpj[13]) !== secondCheckDigit) return false;

  return true;
}

function validateAddress(address) {
  if (!address || address.trim().length < 5) {
    return false;
  }
  return true;
}

function validateAddressNumber(address_number) {
  if (!address || address_number.trim().length < 1 || Number(address_number) < 0) {
    return false;
  }
  return true;
}

function validateNeighborhood(neighborhood) {
  if (!neighborhood || neighborhood.trim().length < 3) {
    return false;
  }
  return true;
}

function validateCEP(cep) {
  if (!/^\d{8}$/.test(cep) && !/^\d{5}-\d{3}$/.test(cep)) {
    return false;
  }

  if (/^\d{5}-\d{3}$/.test(cep)) {
    return true;
  }

  return true;
}

function validatePhone(phoneNumber) {
  // Regex for validating phone numbers
  const regex = /^(\(\d+\))?[\d\s\-]+(\d)$/;

  // Test if the input phone number matches the regex
  if (!regex.test(phoneNumber)) {
    return false;
  }

  phoneNumber = '+' + intl.getSelectedCountryData().dialCode + phoneNumber;

  return intlTelInputUtils.isValidNumber(
    phoneNumber,
    null,
    intlTelInputUtils.numberFormat.INTERNATIONAL
  );
}

function validateCreditCard(number) {
  number = number.replace(/\D/g, '');

  if (number.length < 13 || number.length > 19) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function formatCPFCNPJ(cpf_cnpj) {
  if (cpf_cnpj.length <= 11) {
    return cpf_cnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  } else {
    return cpf_cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
  }
}


function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(document.querySelector("#address"), {
    componentRestrictions: { country: ["br"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);

};

function populateMunicipios(uf) {
  const municipioSelect = $("#city");
  municipioSelect.empty();  // Limpa o select de municípios

  let municipiosData = ufs;
  // Verifica se existem municípios para a UF
  if (municipiosData[uf]) {
    // Adiciona os municípios no select
    municipiosData[uf].municipios.forEach(function (municipio) {
      municipioSelect.append(`<option value="${municipio.codigo_ibge}">${municipio.nome}</option>`);
    });
  }
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";


  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr
  let address_number = null;
  let address = null;
  let city = null;
  let cep = null;
  let neighborhood = null;
  let uf = null;

  for (const component of place.address_components) {
    // @ts-ignore remove once typings fixed
    const componentType = component.types[0];

    switch (componentType) {
      case "route": {
        address = component.long_name;
        break;
      }

      case "street_number": {
        address_number = component.long_name;
        break;
      }

      case "sublocality_level_1":
        neighborhood = component.long_name;
        break;

      case "postal_code": {
        cep = component.long_name;
        break;
      }

      case "administrative_area_level_1": {
        uf = component.short_name;
        break;
      }

      case "administrative_area_level_2": {
        city = component.long_name;
        break;
      }
    }


  }

  $("#address_number").val(address_number).trigger('blur');
  $("#address").val(address).trigger('blur');
  $("#cep").val(cep).trigger('blur');
  $("#neighborhood").val(neighborhood).trigger('blur');

  $("#state").val("");
  $("#city").val("");

  if (uf) {
    $("#state").val(uf).trigger('blur');
    $("#state").trigger('change');

    if (city) {
      $("#city").val(String(ufs[uf].municipioCodes[city])).trigger('blur');
    }
  }
}

function handleError(response) {
  console.log(response);
  let showGenericError = true;
  if (response) {

    if (response.errorCode === 'ALREADY_SUBSCRIBED') {
      let target_plan = getPlan();
      if (target_plan === 'BASIC' && response.errorData.assistant_plan.toUpperCase() === 'BASIC') {
        $("#loading").html('<div><h1>Você já assinou o plano Basic.</h1><br /><p>Redirecionando automaticamente...</p></div>');
        showGenericError = false;
        redirectToNext();
      } else if (response.errorData.assistant_plan.toUpperCase() === 'VIP') {
        $("#loading").html('<div><h1>Você já assinou o plano Vip.</h1><br /><p>Redirecionando automaticamente...</p></div>');
        showGenericError = false;
        redirectToNext();
      } else {
        console.log("Invalid assistant plan:", response.errorData.assistant_plan.toUpperCase());
      }

    } else if (response.errorCode === 'INVALID_ASSISTANT_STATUS') {
      if (response.errorData.status === 1) {
        let $data = $('<div><h1 style="color: #f6b700">Seu perfil <em data-email></em> ainda está em análise.<br/><br/> Por favor, aguarde a aprovação do seu cadastro e tente novamente.</h1><p class="mt-2"><a class="link fs-4">Clique aqui para acessar sua conta</a></p></div>');
        $data.find('a').attr('href', getNext());
        $data.find('[data-email]').text(response.errorData.email).css('color', '#333');
        $("#loading").html($data[0].outerHTML);
        showGenericError = false;
      } else if (response.errorData.status === 3) {
        let $data = $('<h1 style="color: #ff4e4e">Seu perfil <em data-email></em> foi desativado.<br/><br/> Entre em contato com o suporte para maiores informações.</h1>');
        $data.find('[data-email]').text(response.errorData.email).css('color', '#333');
        $("#loading").html($data[0].outerHTML);
        showGenericError = false;
      }
    } else if (response.errorCode === 'NOT_AUTHENTICATED') {
      location.href = window.assistantDashboard + '/plano';
      showGenericError = false;
    }
  }

  $("#loading").show();
  $("#sign_up").hide();

  if (showGenericError) {
    $("#loading").html('<h1 style="color: #ff4e4e">Ocorreu um erro.<br/><br/> Por favor, atualize a página e tente novamente.</h1>');
  }

}

function showSignupForm(response, target_plan) {
  let hasEmail = (response.email && response.email.trim().length > 0 ? true : false);

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
  response.payment_config.installments.forEach(function (config) {
    $installments.append(`<option value="${config.installments}_${config.amount}">${config.installments}x de R$ ${(config.amount / 100).toFixed(2).replace('.', ',')}</option>`);
  });

  $("#name").val(response.name);
  $("#cpf_cnpj").val(response.cpf_cnpj);
  $("#email").val(response.email);
  $("#email").prop('disabled', hasEmail);

  if (hasEmail) {
    loggedInUser = response.email;
    $("#confirm-email").closest('.form-group').hide();
    $("#confirm-email").val(response.email);
    $("#login-note").show();
  } else {
    $("#confirm-email").closest('.form-group').show();
    $("#login-note").hide();
  }

  if (response.billing_details) {
    $("[data-auto-fillable]").hide();
    hasBillingDetails = true;
  }

  document.title = 'Virtap | Assinar plano ' + plans[target_plan];

  $("#submit-btn").text('Assinar plano ' + plans[target_plan]);
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
      $phone.closest('[data-field]').removeClass('error');
      return null;
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

      if (val && val.trim().length > 0) {
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
      formData.append("target_plan", plans[target_plan]);
      formData.append("email", $("#email").val());
      if (billingDetails) {
        formData.append("billing_details", JSON.stringify(billingDetails));
      }
      formData.append("payment_details", JSON.stringify(paymentDetails));

      // Create the PaymentIntent
      const res = await fetch(`${window.signupAPIEndpoint}/subscribe`, {
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
          if (target_plan === 'BASIC') {
            $("#loading").html('<div><h1>Assinatura do plano Basic realizada com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
          } else {
            $("#loading").html('<div><h1>Assinatura do plano Vip realizada com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
          }
          $("#loading").show();
          $("#sign_up").hide();
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
      if (err && (err.errorCode === 'ALREADY_SUBSCRIBED' || err.errorCode === 'INVALID_ASSISTANT_STATUS')) {
        handleError(err);
      } else {
        console.log(err);
        alert('Erro! Tente novamente!');
      }
    }
    finally {
      $("#submit-btn").prop('disabled', false).text('Assinar plano ' + plans[target_plan]);
      $("input,select").prop('disabled', false);
      if (loggedInUser) {
        $("#email").prop('disabled', true);
      }
    }
  });

}

function init() {
  let target_plan = getPlan();

  if (target_plan !== 'VIP') {
    console.log('Invalid plan: ', target_plan);
    handleError(null);
    return;
  }

  $.ajax({
    url: window.signupAPIEndpoint + '/subscribe?plan=' + plans[target_plan],
    data: formData,
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
      response = response.responseData;
      showSignupForm(response, target_plan);
    }
  });
}

async function logout() {
  try {
    await fetch(window.signupAPIEndpoint + '/logout', {
      method: "GET",
      credentials: "include",
    });
  } catch (err) {
    // Ignore.
  }
  location.reload();
}


init();