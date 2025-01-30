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

function redirectToNext() {
  let url = getNext();
  $("#sign_up").hide();
  $("#loading").html('<div><h1>Login feito com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
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
    }
  }

  $("#loading").hide();
  if (showGenericError) {
    $("#generic-error").show();
  }
}
let $new_password = $("#new_password");
let $confirm_password = $("#confirm_password");

// New password
$email.parent().data('get-field', function () {
  let email = $email.val();
  if (!validateEmail(email)) {
    $email.parent().addClass('error');
    return undefined;
  }
  return email;
});

// Conffirm password
$password.parent().data('get-field', function () {
  let password = $password.val();
  if (!validatePassword(password)) {
    $password.parent().addClass('error');
    return undefined;
  }
  return password;
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

let getFields = function () {

  $("[data-field]").removeClass("error");
  let hasError = false;

  let fields = {};

  $("[data-field]").each(function () {
    let $field = $(this);
    let val = $field.data('get-field')();
    if (val === undefined && !$field.is('[data-optional]')) {
      hasError = true;
    } else {
      fields[$field.attr('data-field')] = val;
    }
  });

  if (hasError) {
    return null;
  } else {
    return fields;
  }
}

let submitBtn = document.getElementById('submit-btn');

$(submitBtn).on('click', async (event) => {
  // We don't want to let default form submission happen here,
  // which would refresh the page.
  event.preventDefault();

  // Prevent multiple form submissions
  if (submitBtn.disabled) {
    return;
  }

  let fields = getFields();
  if (!fields) {
    return;
  }

  // Disable form submission while loading
  $("#submit-btn").prop('disabled', true).text('Por favor, aguarde...');
  $("input,select").prop('disabled', true);
  $("p.alert").hide();

  // Log in.
  try {

 
    const res = await fetch(`${window.signupAPIEndpoint}/reset-password?state=assistant`, {
      method: "POST", 
      credentials: "include",
      body: JSON.stringify({password: $("#new_password").val()}),
      headers: {
        'Content-Type': 'application/json' // Não precisa se estiver usando FormData
      },
    });

    if (res.status !== 200) {
      console.log(res);
      throw await res.json();
    } else {
      redirectToNext();
    }

  } catch (err) {
    handleError(err);
  }
  finally {
    $("#submit-btn").prop('disabled', false).text('Log in');
    $("input,select").prop('disabled', false);
  }
});


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

    const res = await fetch(`${window.activateAPIEndpoint}/reset?email=${email}&n=${n}&t=${t}&h=${h}`, {
      method: "GET"
    });

    if (res.status !== 200) {
      console.log(res);
      throw await res.json();
    } else {
      alert('aeee');
    }

  } catch (err) {
    handleError(err);
  }
}

init();
