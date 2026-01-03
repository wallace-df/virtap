// ok
let email;
let r;
let n;
let t;
let h;

function redirectToNext() {
  let url = getNext();
  $("#sign_up").hide();
  $("#loading").html('<div><h1>Password changed successfully!</h1><br /><p>Redirecting automatically...</p></div>');
  $("#loading").show();

  setTimeout(() => document.location.href = getNext(), 4000);
}

function handleError(response, loading) {
  console.log(response);
  let showGenericError = true;
  if (response) {
    if (response.errorCode === 'INVALID_PARAMETERS') {
      $("#invalid-parameters").show();
      showGenericError = false;
    } else if (response.errorCode === 'INVALID_TOKEN') {
      if (loading) {
        $("#invalid-link").show();
        $("#new-link").attr('href', './request-new-password?email=' + getParameterByName('email'));
      } else {
        $("#expired-link").show();
        $("#new-link2").attr('href', './request-new-password?email=' + getParameterByName('email'));
      }
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

function applyValidations() {
  let $new_password = $("#new_password");
  let $confirm_password = $("#confirm_password");

  // New password
  $new_password.closest('[data-field]').data('get-field', function () {
    let password = $new_password.val();
    if (!validatePassword(password)) {
      $new_password.closest('[data-field]').addClass('error');
      return undefined;
    }
    return password;
  });

  // Confirm password
  $confirm_password.closest('[data-field]').data('get-field', function () {
    let new_password = $new_password.val();
    let confirm_password = $confirm_password.val();
    if (new_password !== confirm_password) {
      $confirm_password.closest('[data-field]').addClass('error');
      return undefined;
    }
    return confirm_password;
  });

  // Blur validation
  $("[data-field]").each(function () {
    let $field = $(this);
    $(this).find('input,select').on('blur', function () {
      let val = $(this).val();

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
    });
  });
}

function getFields() {

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

$(submitBtn).on('click', async (event) => {
  // Prevent default form submission (page refresh)
  event.preventDefault();

  // Prevent multiple submissions
  if (submitBtn.disabled) {
    return;
  }

  $("p.alert").hide();

  let fields = getFields();
  if (!fields) {
    return;
  }

  // Disable form while loading
  $("#submit-btn").prop('disabled', true).text('Please wait...');
  $("input,select").prop('disabled', true);

  try {

    const res = await fetch(`${window.apiURL}/reset-password`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email: email,
        r: window.role,
        n: n,
        t: t,
        h: h,
        new_password: $("#new_password").val()
      }),
      headers: {
        'Content-Type': 'application/json'
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
  } finally {
    $("#submit-btn").prop('disabled', false).text('Log in');
    $("input,select").prop('disabled', false);
  }
});

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
      };
    }

    const res = await fetch(`${window.apiURL}/reset-password?email=${email}&r=${r}&n=${n}&t=${t}&h=${h}`, {
      method: "GET"
    });

    if (res.status !== 200) {
      console.log(res);
      throw await res.json();
    } else {
      $("#loading").hide();
      $("#sign_up").show();
      applyValidations();
    }

  } catch (err) {
    handleError(err, true);
  }
}

$(document).on('click', '.togglePassword', function () {
  const $input = $(this).parent().find('input');

  const $btn = $(this);
  const isVisible = $btn.data('visible');

  $input.attr('type', isVisible ? 'password' : 'text');
  $btn.data('visible', !isVisible);
  $btn.html(getEyeSVG(!isVisible));
});

init();
