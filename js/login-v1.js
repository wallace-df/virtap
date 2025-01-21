window.signupAPIEndpoint = 'https://api.virtap.com.br';
window.assistantDashboard = 'https://assistentes.virtap.com.br';
window.signupAPIEndpoint = 'http://localhost:3000';
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

    if (response.errorCode === 'ALREADY_SUBSCRIBED') {
      let target_plan = getPlan();
      if (target_plan === 'BASIC' && response.errorData.assistant_plan.toUpperCase() === 'BASIC') {
        $("#loading").html('<div><h1>Você já assinou o plano Basic.</h1><br /><p>Redirecionando automaticamente...</p></div>');
        showGenericError = false;
        redirectToNext();
      } else if (response.errorData.assistant_plan.toUpperCase() === 'VIP') {
        $("#loading").html('<div><h1>Você já assinou o plano Vip.</h1><br /><p>Redirecionando automaticamente...</p></div>');
        showGenericError = false;
        redirectToNext();
      } else {
        console.log("Invalid assistant plan:", response.errorData.assistant_plan.toUpperCase());
      }

    } else if (response.errorCode === 'INVALID_ASSISTANT_STATUS') {
      if (response.errorData.status === 1) {
        let $data = $('<div><h1 style="color: #f6b700">Seu perfil <em data-email></em> ainda está em análise.<br/><br/> Por favor, aguarde a aprovação do seu cadastro e tente novamente.</h1><p class="mt-2"><a class="link fs-4">Clique aqui para acessar sua conta</a></p></div>');
        $data.find('a').attr('href', getNext());
        $data.find('[data-email]').text(response.errorData.email).css('color', '#333');
        $("#loading").html($data[0].outerHTML);
        showGenericError = false;
      } else if (response.errorData.status === 3) {
        let $data = $('<h1 style="color: #ff4e4e">Seu perfil <em data-email></em> foi desativado.<br/><br/> Entre em contato com o suporte para maiores informações.</h1>');
        $data.find('[data-email]').text(response.errorData.email).css('color', '#333');
        $("#loading").html($data[0].outerHTML);
        showGenericError = false;
      }
    } else if (response.errorCode === 'NOT_AUTHENTICATED') {
      location.href = window.assistantDashboard + '/plano';
      showGenericError = false;
    }
  }

  $("#loading").show();
  $("#sign_up").hide();

  if (showGenericError) {
    $("#loading").html('<h1 style="color: #ff4e4e">Ocorreu um erro.<br/><br/> Por favor, atualize a página e tente novamente.</h1>');
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

  let fields = getFields();
  if (!fields) {
    return;
  }

  // Disable form submission while loading
  $("#submit-btn").prop('disabled', true).text('Por favor, aguarde...');
  $("input,select").prop('disabled', true);

  // Log in.
  try {

    let formData = new FormData();
    formData.append("email", $("#email").val());
    formData.append("password", $("#password").val());

    const res = await fetch(`${window.signupAPIEndpoint}/login`, {
      method: "POST",
      credentials: "include",
      body: formData
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
