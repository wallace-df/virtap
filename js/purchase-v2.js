let productsIdentifier;
let purchaseDetails;

// ok
function getNextWithLogin() {
  let next = getParameterByName('next');
  let url = '/login';
  if (next && next.trim().length > 0) {
    url += '?next=' + next;
  }
  return url;
}

// ok
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

// ok
function handleSuccess(response) {
  $(".sign_up").remove();
  $("body").addClass("box-container");
  $(".logo-img").show();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'auto'
  });
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
  // FIXME: adjust tracking event.
  // gtag('event', 'purchased', {
  //   'send_to': 'G-4ZFMG1F0XK',
  // });
}

function handleError(response, loading) {
  console.log(response);

  let showGenericError = true;

  $(".sign_up").show();
  $(".logo-img").hide();
  $("#loading").hide();
  $("#loading-error").hide();

  if (response) {
    if (response.errorData) {
      showProduct(response.errorData.orderReference);
    }
    if (response.errorCode === 'INVALID_ORDER_REFERENCE' || response.errorCode === 'TRIAL_NOT_ALLOWED') {
      if (loading) {
        $(".sign_up").remove();
        $(".logo-img").show();
        $("#loading-error").show();
        $("body").addClass("box-container");
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
        showGenericError = false;
        $("#loading-error").find('h1').text('Produto não disponível');
        $("#loading-error").find('p').html('O produto que você tentou adquirir não está disponível.<br/>Por favor, entre em contato com o suporte.');

      } else {
        $("#not-available").show();
        showGenericError = false;
      }
    } else if (response.errorCode === 'ALREADY_PURCHASED' || response.errorCode === 'ALREADY_SUBSCRIBED') {
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
           showGenericError = false;
          $("#access-conflict").show().find('strong').text('Compra não disponível');
        } else {
          showGenericError = false;
          $("#access-conflict").show();
        }
      }
    } else if (response.errorCode === 'INVALID_ASSISTANT_STATUS') {
      if (response.errorData.status === 1) {
        $("#under-review-profile").show();
        $("#under-review-profile").find('[data-email]').text(response.errorData.email).show();
        showGenericError = false;
      } else if (response.errorData.status === 3) {
        $("#inactive-profile").show();
        $("#inactive-profile").find('[data-email]').text(response.errorData.email).show();
        showGenericError = false;
      }
    } else if (response.errorCode === 'STARTER_PLAN') {
      $("#starter-plan").show();
      showGenericError = false;
    } else if (response.errorCode === 'INVALID_RESOURCE_TOKEN') {
      if (loading) {
        $("#loading-error").find('h1').text('Link de pagamento inválido');
        $("#loading-error").find('p').text('Por favor, solicite outro link com o suporte.');
      } else {
        $("#invalid-link").show();
        showGenericError = false;
      }
    } else if (response.errorCode === 'ALREADY_SUBSCRIBED_HIGHER_PLAN') {
      if (loading) {
        $("#higher-plan").show().find('strong:first-child').text('Compra não disponível');

      }
      $("#higher-plan").find('[data-email]').text(response.errorData.email);
      $("#higher-plan").find('[data-plan-name]').text(response.errorData.current_subscription.product_id);
      $("#higher-plan").find('a').attr('href', getNext());
      $("#higher-plan").show();

      showGenericError = false;
    } else if(response.errorCode === 'METODO_VIRTAP_CLIENTES_NOT_ALLOWED') {
      if(loading) {
        showGenericError = false;
        $("#clientes-not-allowed").show().find('strong:first').text('Compra não disponível');
      } else {
        $("#clientes-not-allowed").show();
        showGenericError = false;  
      }
    }
  }

  if (showGenericError) {
    if (loading) {
      $(".sign_up").remove();
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
      return "<ul><li>Formação em Assistência Virtual</li></ul>";
    case 'FORMACAO_AEXPERT':
      return "<ul><li>Formação AExpert</li></ul>";
    case 'METODO_VIRTAP_CLIENTES':
      return "<ul><li>Método Virtap de Conquistar Clientes</li></ul>";
    case 'ASSINATURA_PROFESSIONAL_TRI':
      return "<ul><li>Assinatura Profissional Trimestral</li></ul>";
    case 'ASSINATURA_ELITE_TRI':
      return "<ul><li>Assinatura Elite Trimestral</li></ul>";
    case 'VIRTAP_STARTER_KIT':
      return "<ul><li>Método Virtap de Conquistar Clientes</li><li>30 dias de acesso à plataforma de vagas</li></ul>";
    case 'VIRTAP_CLUB':
      return "<ul><li>Formação em Assistência Virtual</li><li>12 meses de acesso premium à plataforma de vagas</li><li>Aulas extras e sessões com especialistas</li></ul>";
    default:
      throw new Error("Invalid order ref:" + orderRef)
  }
}

function showProduct(orderRef) {
  if (orderRef) {
    $('h2').html(`Você está adquirindo: <br/>${productName(orderRef)}`).css('font-size', '24px');
  }
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
