function handleSuccess() {
  $("#loading").html('<div><h1>Compra realizada com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
  $("#loading").show();
  $("#sign_up").hide();
  redirectToNext();
}

function handleError(response, loading) {
  console.log(response);

  let showGenericError = true;

  if (response) {
    if (response.errorCode === 'ALREADY_PURCHASED') {
      $("#loading").html('<div><h1>Você já adquiriu este curso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
      $("#loading").show();
      showGenericError = false;
      redirectToNext();

    } else if (response.errorCode === 'INVALID_ASSISTANT_STATUS') {
      if (response.errorData.status === 1) {
        if(loading) {
          $("#loading").hide();
        }
        $("#under-review-profile").show();
        $("#under-review-profile").find('[data-email]').text(response.errorData.email).show();

        showGenericError = false;
      } else if (response.errorData.status === 3) {
        if(loading) {
          $("#loading").hide();
        }
        $("#inactive-profile").show();
        $("#inactive-profile").find('[data-email]').text(response.errorData.email).show();

        showGenericError = false;
      }
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
  let course = getCourse();
  let courseName;
  if (course === 'form-ap') {
    courseName = 'Formação AExpert';
  } else {
    console.log('Invalid course: ', course);
    handleError(null, true);
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
      handleError(xhr.responseJSON, true);
    },
    success: function (response) {
      let initialDetails = response.responseData;
      showPaymentForm(initialDetails, () => `Virtap | ${courseName} | Comprar`, () => 'Comprar agora', (fd) => { fd.append("course", course) }, 'purchase', handleSuccess, handleError);
    }
  });
}

init();
