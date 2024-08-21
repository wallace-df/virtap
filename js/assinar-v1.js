window.signupAPIEndpoint = 'http://localhost:3000';
window.assistantDashboard = 'http://localhost:8080';

let formData = new FormData();
let hasBillingDetails = false;
let loggedInUser = null;
let submitBtn = document.getElementById('submit-btn');

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
  let target_plan = getParameterByName('plan');
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
    }
  }

  $("#loading").show();
  $("#sign_up").hide();

  if (showGenericError) {
    $("#loading").html('<h1 style="color: #ff4e4e">Ocorreu um erro.<br/><br/> Por favor, atualize a página e tente novamente.</h1>');
  }
}

let input = document.querySelector("#phone");
let intl = window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  autoInsertDialCode: true,
  initialCountry: "BR",
  separateDialCode: true
});

let $cardContainer = $('[data-card-container');
$cardContainer.CardJs();

let $cardNumber = $(".card-number-wrapper");
let $cardName = $(".name-wrapper");

$('<label>CEP</label>').insertBefore($cardNumber);
$('<label>Nome no cartão</label>').insertBefore($cardName);
$('<label>Validade</label>').insertBefore($(".expiry-wrapper"));
$('<label>Código de segurança</label>').insertBefore($(".cvc-wrapper"));

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

let plans = {
  'BASIC': 'Basic',
  'VIP': 'Vip'
};

$cardContainer.append($container);
function init() {
  let target_plan = getPlan();

  if (target_plan !== 'BASIC' && target_plan !== 'VIP') {
    console.log('Invalid plan:', target_plan);
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

      let hasEmail = (response.email && response.email.trim().length > 0 ? true : false);

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


      $("#submit-btn").on('click', async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        // Prevent multiple form submissions
        if (submitBtn.disabled || !ready) {
          return;
        }

        // Disable form submission while loading
        $("#submit-btn").prop('disabled', true).text('Por favor, aguarde...');
        $("input").prop('disabled', true);

        // Create the subscription
        try {

          // TODO: validate fields;

          let formData = new FormData();
          formData.append("target_plan", plans[target_plan]);
          formData.append("email", $("#email").val());

          if (!hasBillingDetails) {
            let billingDetails = {
              name: $("#name").val(),
              cpf_cnpj: $("#cpf_cnpj").val(),
              address: $("#address").val(),
              neighborhood: $("#neighborhood").val(),
              city: $("#city").val(),
              state: $("#state").val(),
              zipcode: $("#cep").val(),
            }
            formData.append("billing_details", JSON.stringify(billingDetails));
          }

          let cardDetails = {
            card_holder: $cardContainer.CardJs('name'),
            card_number: $cardContainer.CardJs('cardNumber').replace(/\D/g, ""),
            card_expiration: $cardContainer.CardJs('expiryMonth') + '/' + $cardContainer.CardJs('expiryYear'),
            card_cvv: $cardContainer.CardJs('cvc')
          };

          formData.append("card_details", JSON.stringify(cardDetails));

          // Create the PaymentIntent
          const res = await fetch("http://localhost:3000/subscribe", {
            method: "POST",
            credentials: "include",
            body: formData
          });

          if (res.status !== 200) {
            console.log(res);
            throw await res.json();
          }

          const data = await res.json();
          console.log(data);
          if (data.responseData === true) {
            if (target_plan === 'BASIC') {
              $("#loading").html('<div><h1>Assinatura do plano Basic realizada com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
            } else {
              $("#loading").html('<div><h1>Assinatura do plano Vip realizada com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
            }
            $("#loading").show();
            $("#sign_up").hide();
            redirectToNext();
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
          $("input").prop('disabled', false);
          if (loggedInUser) {
            $("#email").prop('disabled', true);
          }
        }
      });

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