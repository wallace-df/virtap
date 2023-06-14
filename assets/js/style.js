window.signupAPIEndpoint = 'https://api.virtap.com.br';

function popupWindow(url, windowName, win, w, h) {
  const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
  const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
  return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


$(document).ready(function () {
  let nome = getParameterByName('nome');

  if (nome) {
    $("#txtNome").val(nome);
  }
});

function signup() {
  let $txtName = $("#txtNome");
  let $txtWhatsapp = $("#txtWhatsapp");
  let $chkTermos = $("#chkTermos");
  let $txtError = $("#txtError");

  $txtError.hide();
  $txtName.closest('.item').removeClass('error');
  $txtWhatsapp.closest('.item').removeClass('error');
  $chkTermos.closest('.item').removeClass('error');

  let hasError = false;

  if ($txtName.val().length < 5) {
    $txtName.closest('.item').addClass('error');
    hasError = true;
  }

  if ($txtWhatsapp.val().length < 8) {
    $txtWhatsapp.closest('.item').addClass('error');
    hasError = true;
  }

  if (!$chkTermos.is(":checked")) {
    $chkTermos.closest('.item').addClass('error');
    hasError = true;
  }

  if (!hasError) {
    $("#signupForm").find('input, .btn').prop("disabled", true).addClass("disabled");
    $("#btnSignup").text("Por favor, aguarde...");

    let formData = new FormData();
    formData.append('name', $txtName.val());
    formData.append('contact_info', JSON.stringify({ whatsapp: $txtWhatsapp.val() }));

    $.ajax({
      url: window.signupAPIEndpoint + '/client/register-profile',
      data: formData,
      processData: false,
      contentType: false,
      type: 'POST',
      xhrFields: {
        withCredentials: true
      },
      error: function (err) {
        $("#signupForm").find('input, .btn').prop("disabled", false).removeClass("disabled");
        $("#btnSignup").text("Cadastrar");
        if (err.status === 401) {
          $txtError.html("Sua sessão expirou.<br/> <a class='link' href='javascript:void(0)' onclick='popupWindow(\"" + window.signupAPIEndpoint + "/auth/google/client?popup=true\",\"_blank\",window, 600, 400)' target='_blank' class='link'> Clique aqui para entrar novamente.</a>").show();
        } else {
          $txtError.text("Ocorreu um erro no seu cadastro. Por favor, tente novamente.").show();

        }
      },
      success: function () {
        window.location = 'https://clientes.virtap.com.br';
      }
    });


  }

}