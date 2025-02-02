window.activateAPIEndpoint = 'https://api.virtap.com.br';
window.assistantDashboard = 'https://assistentes.virtap.com.br';
window.activateAPIEndpoint = 'http://localhost:3000';
window.assistantDashboard = 'http://localhost:8080';

let formData = new FormData();

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
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

function redirectToNext(alreadyVerified) {
  let url = getNext();
  $("#sign_up").hide();
  if(alreadyVerified) {
    $("#loading").html('<div><h1>Sua conta já foi verificada!</h1><br /><p>Redirecionando automaticamente...</p></div>');
  } else {
    $("#loading").html('<div><h1>Verificação concluída!</h1><br /><p>Redirecionando automaticamente...</p></div>');
  }
  $("#loading").show();
  setTimeout(() => document.location.href = url, 2000);
}

function isEmpty(str) {
  if (!str || str.trim().length === 0) {
    return true;
  }
  return false;
}

function handleError(response) {
  console.log(response); 
  let showGenericError = true;
  if (response) {
    if (response.errorCode === 'INVALID_PARAMETERS') {
      $("#invalid-parameters").show();
      showGenericError = false;
    } else if (response.errorCode === 'INVALID_VERIFICATION' || response.errorCode === 'VERIFICATION_EXPIRED') {
      $("#invalid-link").show();
      showGenericError = false;
    } else if(response.errorCode === 'ALREADY_VERIFIED') {
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

    let email = getParameterByName('email');
    let n = getParameterByName('n');
    let t = getParameterByName('t');
    let h = getParameterByName('h');

    if (isEmpty(email) || isEmpty(n) || isEmpty(t) || isEmpty(h)) {
      throw {
        errorCode: 'INVALID_PARAMETERS'
      }
    }

    const res = await fetch(`${window.activateAPIEndpoint}/verify?email=${email}&n=${n}&t=${t}&h=${h}`, {
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
