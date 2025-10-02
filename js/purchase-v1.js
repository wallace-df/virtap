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
  if (response.loggedIn) {
    $("#novo-membro-redir").show();
    redirectToNext();
  } else {
    if (!response.has_logged_in) {
      $("#novo-membro-nunca-logado-noredir").show();
      $("#novo-membro-nunca-logado-noredir").find('em').text(response.email);
      $("#novo-membro-nunca-logado-noredir").find('a').attr('href', getNextWithLogin());
    } else {
      $("#novo-membro-ja-logado-noredir").show();
      $("#novo-membro-ja-logado-noredir").find('em').text(response.email);
      $("#novo-membro-ja-logado-noredir").find('a').attr('href', getNextWithLogin());
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
    if (response.errorCode === 'ALREADY_PURCHASED') {
      $(".sign_up").remove();
      $("body").addClass("box-container");
      showGenericError = false;
      if (response.errorData.loggedIn || loading) {
        $("#membro-existente-redir").show();
        redirectToNext();
      } else {
        $("#membro-existente-noredir").show();
        $("#membro-existente-noredir").find('em').text(response.errorData.email);
        $("#membro-existente-noredir").find('a').attr('href', getNextWithLogin());
      }

    } else if (response.errorCode === 'INVALID_ASSISTANT_STATUS') {
      if (response.errorData.status === 1) {
        if (loading) {
          $("#loading").hide();
        }
        $("#under-review-profile").show();
        $("#under-review-profile").find('[data-email]').text(response.errorData.email).show();

        showGenericError = false;
      } else if (response.errorData.status === 3) {
        if (loading) {
          $("#loading").hide();
        }
        $("#inactive-profile").show();
        $("#inactive-profile").find('[data-email]').text(response.errorData.email).show();

        showGenericError = false;
      }
    } else if (response.errorCode === 'INVALID_RESOURCE_TOKEN') {
      if (loading) {
        $("#loading").hide();
      }
      $("#invalid-link").show();
      showGenericError = false;
    }
  }

  if (showGenericError) {
    if (loading) {
      $("#loading").hide();
      $("#loading-error").show();
    } else {
      $("#generic-error").show();
    }
  }

  return true;


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
        initialDetails.payment_config = initialDetails.purchase_details.paymentConfig['vindi'];
        showPaymentForm(initialDetails, () => `Virtap | Comprar`, () => 'Comprar agora', (fd) => { }, 'purchase?p=' + (productsIdentifier || '') + "&rsrc=" + (getParameterByName('rsrc') || ''), handleSuccess, handleError);

        $('h2').text(`Você está adquirindo: ${JSON.stringify(initialDetails.purchase_details.orderItems)}.`);
      }
    });
  }

  loadTemplate();
}

init();
