window.resetAPIEndpoint = 'https://api.virtap.com.br';
window.assistantDashboard = 'https://assistentes.virtap.com.br';
window.resetAPIEndpoint = 'http://localhost:3000';
window.assistantDashboard = 'http://localhost:8080';


let email;

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

function handleError(response, loading) {
  console.log(response);
  let showGenericError = true;
  if (response) {
    if (response.errorCode === 'INVALID_PARAMETERS') {
      $("#invalid-parameters").show();
      showGenericError = false;
    } else if (response.errorCode === 'INVALID_TOKEN') {
      $("#invalid-link").show();
      $("#new-link").attr('href', '/solicitar-reset?email=' + getParameterByName('email'));
      showGenericError = false;
    }
  }

  $("#loading").hide();

  if (loading) {
    $("#sign_up").hide();

    if (showGenericError) {
      $("#loading-error").show();
    }

  } else {

    if (showGenericError) {
      $("#generic-error").show();
    }

  }
}

function validatePassword(password) {
  if (!password || password.length < 8) {
    return false;
  } else {
    return true;
  }
}

let $new_password = $("#new_password");
let $confirm_password = $("#confirm_password");

// New password
$new_password.parent().data('get-field', function () {
  let password = $new_password.val();
  if (!validatePassword(password)) {
    $new_password.parent().addClass('error');
    return undefined;
  }
  return password;
});

// Confirm password
$confirm_password.parent().data('get-field', function () {
  let new_password = $new_password.val();
  let confirm_password = $confirm_password.val();
  if (new_password !== confirm_password) {
    $confirm_password.parent().addClass('error');
    return undefined;
  }
  return confirm_password;
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

  $("p.alert").hide();

  let fields = getFields();
  if (!fields) {
    return;
  }

  // Disable form submission while loading
  $("#submit-btn").prop('disabled', true).text('Por favor, aguarde...');
  $("input,select").prop('disabled', true);

  // Log in.
  try {


    const res = await fetch(`${window.signupAPIEndpoint}/reset-password`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email_address: email, password: $("#new_password").val() }),
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
    handleError(err, false);
  }
  finally {
    $("#submit-btn").prop('disabled', false).text('Log in');
    $("input,select").prop('disabled', false);
  }
});


async function init() {

  try {

    email = getParameterByName('email');
    let n = getParameterByName('n');
    let t = getParameterByName('t');
    let h = getParameterByName('h');

    if (isEmpty(email) || isEmpty(n) || isEmpty(t) || isEmpty(h)) {
      throw {
        errorCode: 'INVALID_PARAMETERS'
      }
    }

    const res = await fetch(`${window.resetAPIEndpoint}/reset-password?email=${email}&n=${n}&t=${t}&h=${h}`, {
      method: "GET"
    });

    if (res.status !== 200) {
      console.log(res);
      throw await res.json();
    } else {
      $("#loading").hide();
      $("#sign_up").show();
    }

  } catch (err) {
    handleError(err, true);
  }
}

init();
