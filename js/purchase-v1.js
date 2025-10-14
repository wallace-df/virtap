let productsIdentifier;
let purchaseDetails;

function getNextWithLogin() {
  let next = getParameterByName('next');
  let url = '/login';
  if (next && next.trim().length > 0) {
    url += '?next=' + next;
  }
  return url;
}

function redirectToNext() {
  let next = getParameterByName('next');
  let url = window.dashboardURL;
  if (next && next.trim().length > 0) {
    if (url.endsWith('/')) {
      url += next;

    } else {
      url += '/' + next;

    }
  }
  setTimeout(() => document.location.href = url, 4000)
}

function handleSuccess(response) {
  $(".sign_up").remove();
  $("body").addClass("box-container");
  $(".logo-img").show();
  if (response.loggedIn) {
    $("#compra-feita-redir").show();
    redirectToNext();
  } else {
    if (!response.has_logged_in) {
      $("#compra-feita-acesso-enviado").show();
      $("#compra-feita-acesso-enviado").find('em').text(response.email);
      $("#compra-feita-acesso-enviado").find('a').attr('href', getNextWithLogin());
    } else {
      $("#compra-feita-no-redir").show();
      $("#compra-feita-no-redir").find('em').text(response.email);
      $("#compra-feita-no-redir").find('a').attr('href', getNextWithLogin());
    }
  }
  gtag('event', 'purchased', {
    'send_to': 'G-4ZFMG1F0XK',
  });
}

function handleError(response, loading) {
  console.log(response);

  let showGenericError = true;

  if (response) {
    if (response.errorCode === 'ALREADY_PURCHASED' || response.errorCode === 'ALREADY_SUBSCRIBED') {
      let orderItems = null;
      if (response.errorData) {
        orderItems = response.errorData.orderItems || [];
      }

      if (orderItems.length === 1) {
        $(".sign_up").remove();
        $(".logo-img").show();
        $("#loading").hide();
        $("#loading-error").hide();
        $("body").addClass("box-container");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
        showGenericError = false;

        if ((response.errorData.loggedIn || loading)) {
          $("#acesso-ja-liberado-redir").show();
          redirectToNext();
        } else {
          $("#acesso-ja-liberado-no-redir").show();
          $("#acesso-ja-liberado-no-redir").find('em').text(response.errorData.email);
          $("#acesso-ja-liberado-no-redir").find('a').attr('href', getNextWithLogin());
        }
      } else {
        if (loading) {
          showProduct(response.errorData.orderReference);
          $(".sign_up").show();
          $(".logo-img").hide();
          $("#loading").hide();
          $("#loading-error").hide();
          showGenericError = false;
          $("#access-conflict").show().find('strong').text('Compra não disponível');
        } else {
          showGenericError = false;
          $("#access-conflict").show();
        }
      }

    } else if (response.errorCode === 'INVALID_ASSISTANT_STATUS') {
      if (response.errorData.status === 1) {
        if (loading) {
          // ok
          $("#loading-error").find('h1').text('Seu cadastro ainda está em análise');
          $("#loading-error").find('p').text('Por favor, aguarde a aprovação do seu cadastro.');
        } else {
          // ok
          $("#under-review-profile").show();
          $("#under-review-profile").find('[data-email]').text(response.errorData.email).show();
          showGenericError = false;
        }
      } else if (response.errorData.status === 3) {
        if (loading) {
          // ok
          $("#loading-error").find('h1').text('Seu cadastro foi desativado');
          $("#loading-error").find('p').text('Por favor, entre em contato com o suporte.');
        } else {
          // ok
          $("#inactive-profile").show();
          $("#inactive-profile").find('[data-email]').text(response.errorData.email).show();
          showGenericError = false;
        }
      }
    } else if (response.errorCode === 'STARTER_PLAN') {
      if (loading) {
        // ok
        $("#loading-error").find('h1').text('Você está no plano Starter');
        $("#loading-error").find('p').text('Por favor, solicite o upgrade com o suporte.');
      } else {
        // ok
        $("#starter-plan").show();
        showGenericError = false;
      }
    } else if (response.errorCode === 'INVALID_RESOURCE_TOKEN') {
      if (loading) {
        // ok
        $("#loading-error").find('h1').text('Link de pagamento inválido');
        $("#loading-error").find('p').text('Por favor, solicite outro link com o suporte.');
      } else {
        // ok
        $("#invalid-link").show();
        showGenericError = false;
      }
    }
  }

  if (showGenericError) {
    if (loading) {
      $(".logo-img").show();
      $("#loading").hide();
      $("#loading-error").show();
      $("body").addClass("box-container");
    } else {
      $("#generic-error").show();
    }
  }

  return true;
}

function productName(orderRef) {
  switch (orderRef) {
    case 'FORMACAO_AV':
      return "Formação em Assistência Virtual"
    case 'FORMACAO_AEXPERT':
      return "Formação AExpert"
    case 'ASSINATURA_PROFESSIONAL_TRI':
      return "Assinatura Professional Trimestral"
      case 'KIT_STARTER':
        return "Curso Destravando Clientes<br/>1 mês de acesso à plataforma de vagas"
      default:
      throw new Error("Invalid order ref:" + orderRef)
  }
}

function showProduct(orderRef) {
  $('h2').html(`Você está adquirindo: <br/><br/>${productName(orderRef)}`);
}

function init() {
  productsIdentifier = getParameterByName('p') || '';

  function loadTemplate() {
    $.ajax({
      url: "/payment.html",
      method: "GET",
      success: function (data) {
        $("#payment-container").html(data);
        loadPaymentForm();
      },
      error: function (xhr, status, error) {
        handleError(error, true);
      }
    });
  }

  function loadPaymentForm() {
    $.ajax({
      url: window.apiURL + '/purchase?p=' + productsIdentifier + "&rsrc=" + (getParameterByName('rsrc') || ''),
      processData: false,
      contentType: false,
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      error: async function (xhr) {
        handleError(xhr.responseJSON, true);
      },
      success: function (response) {
        let initialDetails = response.responseData;

        try {
          showProduct(initialDetails.purchase_details.orderDetails.reference);
          initialDetails.payment_config = initialDetails.purchase_details.paymentConfig['vindi'];
          showPaymentForm(initialDetails, () => `Virtap | Comprar`, () => 'Comprar agora', (fd) => { }, 'purchase?p=' + (productsIdentifier || '') + "&rsrc=" + (getParameterByName('rsrc') || ''), handleSuccess, handleError);
          $("#loading").hide();
          $(".sign_up").show();

        } catch (err) {
          console.log(err);
          handleError(response, true);
        }

      }
    });
  }

  loadTemplate();
}

init();
