let target_plan;

function getNextWithLogin() {
  let next = getParameterByName('next');
  let url = '/login';
  if (next && next.trim().length > 0) {
    url += '?next=' + next;
  }
  return url;
}
function handleSuccess(response) {
  if (target_plan === 'BASIC') {
    $("#loading").html('<div><h1>Assinatura do plano Basic realizada com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
    $("#loading").show();
    $("#sign_up").hide();
    redirectToNext();
  } else {
    // $("#loading").html('<div><h1>Assinatura do Virtap Club realizada com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
    $(".sign_up").remove();
    $("body").addClass("box-container");
    if (response.loggedIn && !response.newUser) {
      $("#novo-membro-redir").show();
      redirectToNext();
    } else {
      if (response.newUser) {
        $("#novo-membro-nunca-logado-noredir").show();
        $("#novo-membro-nunca-logado-noredir").find('em').text(response.email);
        $("#novo-membro-nunca-logado-noredir").find('a').attr('href', getNextWithLogin());

      } else {
        $("#novo-membro-ja-logado-noredir").show();
        $("#novo-membro-ja-logado-noredir").find('em').text(response.email);
        $("#novo-membro-ja-logado-noredir").find('a').attr('href', getNextWithLogin());
      }
    }
  }
}

function handleError(response, loading) {
  console.log(response);

  let showGenericError = true;

  if (response) {
    if (response.errorCode === 'ALREADY_SUBSCRIBED') {
      let target_plan = getPlan();
      if (target_plan === 'BASIC' && response.errorData.assistant_plan.toUpperCase() === 'BASIC') {
        $("#sign_up").hide();
        $("#loading").show();
        $("#loading").html('<div><h1>Você já assinou o plano Basic.</h1><br /><p>Redirecionando automaticamente...</p></div>');
        $("#submit-btn").hide();
        showGenericError = false;
        redirectToNext();
      } else if (response.errorData.assistant_plan.toUpperCase() === 'VIRTAPCLUB') {
        // $("#sign_up").hide();
        // $("#loading").show();
        // $("#loading").html('<div><h1>Você já assinou o Virtap Club.</h1><br /><p>Redirecionando automaticamente...</p></div>');
        // $("#submit-btn").hide();

        $(".sign_up").remove();
        $("body").addClass("box-container");
        showGenericError = false;
        if ((response.errorData.loggedIn && !response.errorData.newUser) || loading) {
          $("#membro-existente-redir").show();
          redirectToNext();
        } else {
          $("#membro-existente-noredir").show();
          $("#membro-existente-noredir").find('em').text(response.errorData.email);
          if (response.errorData.newUser) {
            $('[data-has-not-logged-in]').show();
          } else {
            $('[data-has-logged-in]').show();
            $("#membro-existente-noredir").find('a').attr('href', getNextWithLogin());
          }
        }
      } else {
        console.log("Invalid assistant plan:", response.errorData.assistant_plan.toUpperCase());
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
    } else if (response.errorCode === 'STARTER_PLAN') {
      if (loading) {
        $("#loading").hide();
      }
      $("#starter-plan").show();
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
  target_plan = getPlan();

  if (target_plan !== 'VIRTAPCLUB') {
    console.log('Invalid plan: ', target_plan);
    handleError(null, true);
    return;
  }

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
      url: window.apiURL + '/subscribe?plan=' + plans[target_plan],
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
        initialDetails.productType = 'subscription';
        initialDetails.productId = target_plan;
        showPaymentForm(initialDetails, () => 'Virtap | Assinar Virtap Club', () => 'Assinar Virtap Club', (fd) => { fd.append("target_plan", plans[target_plan]) }, 'subscribe', handleSuccess, handleError);
      }
    });
  }

  loadTemplate();
}

init();
