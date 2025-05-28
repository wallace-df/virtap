
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
