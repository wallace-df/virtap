let email;
let r;
let n;
let t;
let h;

function redirectToNext(alreadyVerified) {
  let url = getNext();
  $("#sign_up").hide();
  if (alreadyVerified) {
    $("#loading").html('<div><h1>Sua conta já foi verificada!</h1><br /><p>Redirecionando automaticamente...</p></div>');
  } else {
    $("#loading").html('<div><h1>Verificação concluída!</h1><br /><p>Redirecionando automaticamente...</p></div>');
  }
  $("#loading").show();
  setTimeout(() => document.location.href = url, 2000);
}

function handleError(response) {
  console.log(response);
  let showGenericError = true;
  if (response) {
    if (response.errorCode === 'INVALID_PARAMETERS') {
      $("#invalid-parameters").show();
      showGenericError = false;
    } else if (response.errorCode === 'INVALID_VERIFICATION') {
      $("#new-link").attr('href', '/login-com-senha?email=' + email);
      $("#invalid-link").show();
      showGenericError = false;
    } else if (response.errorCode === 'ALREADY_VERIFIED') {
      redirectToNext(true);
      return;
    }
  }

  $("#loading").hide();
  if (showGenericError) {
    $("#generic-error").show();
  }
}

async function init() {

  try {

    email = getParameterByName('email');
    r = window.role;
    n = getParameterByName('n');
    t = getParameterByName('t');
    h = getParameterByName('h');

    if (isEmpty(email) || isEmpty(n) || isEmpty(t) || isEmpty(h)) {
      throw {
        errorCode: 'INVALID_PARAMETERS'
      }
    }

    const res = await fetch(`${window.apiURL}/verify-account?email=${email}&r=${r}&n=${n}&t=${t}&h=${h}`, {
      method: "GET"
    });

    if (res.status !== 200) {
      console.log(res);
      throw await res.json();
    } else {
      redirectToNext(false);
    }

  } catch (err) {
    handleError(err);
  }
}

init();
