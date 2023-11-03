window.signupAPIEndpoint = 'https://api.virtap.com.br';
window.clientDashboard = 'https://clientes.virtap.com.br';

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


var input = document.querySelector("#txtWhatsapp");
let intl = window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  autoInsertDialCode: true,
  initialCountry: "BR",
  separateDialCode: true
});


$("#txtWhatsapp").on('blur', function () {
  intl.setNumber(intl.getNumber());
  if (intl.isValidNumber()) {
    $("#txtWhatsapp").closest(".item").removeClass("error");
  } else {
    $("#txtWhatsapp").closest(".item").addClass("error");
  }
});


$(document).ready(function () {
  let nome = getParameterByName('nome');

  if (nome) {
    $("#txtNome").val(nome.substring(0, 30));
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

  if ($txtName.val().length < 10) {
    $txtName.closest('.item').addClass('error');
    hasError = true;
  }

  if ($txtWhatsapp.val().length < 1 || !intl.isValidNumber()) {
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
    formData.append('contact_info', JSON.stringify({ whatsapp: intl.getNumber() }));

    $.ajax({
      url: window.signupAPIEndpoint + '/client/register-profile',
      data: formData,
      processData: false,
      contentType: false,
      type: 'POST',
      xhrFields: {
        withCredentials: true
      },
      error: function (xhr, status) {
        if (xhr.status === 401) {
          $("#signupForm").find('input, .btn').prop("disabled", false).removeClass("disabled");
          $("#btnSignup").text("Cadastrar");
          $txtError.html("Sua sessão expirou.<br/> <a class='link' href='javascript:void(0)' onclick='popupWindow(\"" + window.signupAPIEndpoint + "/auth/google/client?popup=true\",\"_blank\",window, 600, 400)' target='_blank' class='link'> Clique aqui para entrar novamente.</a>").show();
        } else {
          try {
            let err = JSON.parse(xhr.responseText);
            if (err.errorCode === 'CLIENT_ALREADY_REGISTERED') {
              $txtError.html("Você já criou uma conta.<br/> <a class='link' href='" + window.clientDashboard + "' target='_blank' class='link'> Clique aqui para fazer login.</a>").show();
              return;
            }
            throw xhr;

          } catch (err) {
            $("#signupForm").find('input, .btn').prop("disabled", false).removeClass("disabled");
            $("#btnSignup").text("Cadastrar");
            $txtError.text("Ocorreu um erro no seu cadastro. Por favor, tente novamente.").show();
          }
        }
      },
      success: function () {
        let callback = function () {
          window.location = clientDashboard;
        };

        gtag('event', 'Cadastro_Cliente', {
          'send_to': 'G-4ZFMG1F0XK',
          'event_callback': callback
        });

        // gtag('event', 'conversion', {
        //     'send_to': 'AW-924784320/25HBCKer7PEYEMCt_LgD',
        //     'event_callback': callback
        // });
      }
    });

    window.lintrk('track', { conversion_id: 14639236 });
    window.fbq('track', 'CompleteRegistration');

  }

}
