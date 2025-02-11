let formData = new FormData();

function redirectToNext() {
  let url = getNext();
  $("#sign_up").hide();
  $("#loading").html('<div><h1>Login feito com sucesso!</h1><br /><p>Redirecionando automaticamente...</p></div>');
  $("#loading").show();
  setTimeout(() => document.location.href = url, 2000);
}

function validateEmail(email) {
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return false;
  }
  return true;
}

function validatePassword(password) {
  if (!password || password.length === 0) {
    return false;
  } else {
    return true;
  }
}

function handleError(response) {
  console.log(response);
  let showGenericError = true;
  if (response) {
    if (response.errorCode === 'ACCOUNT_NOT_VERIFIED') {
      $("#not-verified").show();
      showGenericError = false;
    } else if (response.errorCode === 'PASSWORD_EXPIRED') {
      $("#expired-password").show();
      showGenericError = false;
    } else if (response.errorCode === 'INVALID_CREDENTIALS') {
      $("#invalid-credentials").show();
      showGenericError = false;
    }
  }

  if (showGenericError) {
    $("#generic-error").show();
  }

}

let $email = $("#email");
let $password = $("#password");

// Email
$email.parent().data('get-field', function () {
  let email = $email.val();
  if (!validateEmail(email)) {
    $email.parent().addClass('error');
    return undefined;
  }
  return email;
});

// Password
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


    const res = await fetch(`${window.apiURL}/login?state=assistant`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ username: $("#email").val(), password: $("#password").val() }),
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
