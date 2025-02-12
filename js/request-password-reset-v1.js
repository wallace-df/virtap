let formData = new FormData();

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
    } else if (response.errorCode === 'INVALID_TOKEN') {
      $("#invalid-link").show();
      showGenericError = false;
    }
  }
  if (showGenericError) {
    $("#generic-error").show();
  }
}

function validateEmail(email) {
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return false;
  }
  return true;
}

let $email = $("#email");

$email.parent().data('get-field', function () {
  let email = $email.val();
  if (!validateEmail(email)) {
    $email.parent().addClass('error');
    return undefined;
  }
  return email;
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

  try {

    const res = await fetch(`${window.requestAPIEndpoint}/request-password-reset?state=assistant`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ email: $("#email").val() }),
      headers: {
        'Content-Type': 'application/json' // Não precisa se estiver usando FormData
      },
    });

    if (res.status !== 200) {
      console.log(res);
      throw await res.json();
    }

    $("#sign_up").hide();
    $("#link-sent").show();
    $("#loading").show();

  } catch (err) {
    handleError(err);
  }
  finally {
    $("#submit-btn").prop('disabled', false).text('Log in');
    $("input,select").prop('disabled', false);
  }
});


let email = getParameterByName('email');
if (email && email.trim().length > 0) {
  $("#email").val(email);
}