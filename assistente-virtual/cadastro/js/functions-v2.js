window.signupAPIEndpoint = 'https://api.virtap.com.br';
window.assistantDashboard = 'https://assistentes.virtap.com.br';

function popupWindow(url, windowName, win, w, h) {
  const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
  const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
  return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}

function upload() {
  var fileinput = document.getElementById("finput");
  if (fileinput.files.length > 0) {
    let reader = new FileReader();
    reader.onload = function (event) {
      $("#canv1").attr('src', event.target.result);
    };
    reader.readAsDataURL(fileinput.files[0]);
  } else {
    $("#canv1").removeAttr('src');
  }
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

$(document).ready(async function () {

//   var c = document.createElement('canvas');
//   let img = $('<img src="' + 'https://lh3.googleusercontent.com/a/AAcHTtc26AiRJMLFld0NVTwpoGKctW64hNN4FRn8H_IMH-XegUQ=s96-c' + '"/>'); 
// c.height = img.naturalHeight;
// c.width = img.naturalWidth;
// var ctx = c.getContext('2d');

// ctx.drawImage(img, 0, 0, c.width, c.height);
// var base64String = c.toDataURL();


//   let canvas = $('<canvas/>', { id: 'mycanvas', width: 500, height: 500 });
//   $("body").append(canvas);
//   var ctx = canvas[0].getContext("2d");
//   ctx.drawImage(img[0], 0, 0);
//   var dataURL = canvas[0].toDataURL("image/png");
//   console.log(dataURL);

//   // let pp = await urlToObject();
//   // console.log(pp);
//   // $('#canv1').attr('src', 'https://lh3.googleusercontent.com/a/AAcHTtc26AiRJMLFld0NVTwpoGKctW64hNN4FRn8H_IMH-XegUQ=s96-c');
//   // $('#canv1').on

  let nome = getParameterByName('nome');
  if (nome) {
    $("#txtNome").val(nome);
  }
});

function signup() {
  let $filePicture = $("#finput");
  let $txtName = $("#txtNome");
  let $txtTitle = $("#txtTitle");
  let $txtDescription = $("#txtDescription");
  let $chkAreas = $("#areasAtuacao");
  let $chkTermos = $("#chkTermos");
  let $txtError = $("#txtError");

  $txtError.hide();
  $txtName.closest('.item').removeClass('error');
  $txtTitle.closest('.item').removeClass('error');
  $chkAreas.closest('.item').removeClass('error');
  $txtDescription.closest('.item').removeClass('error');
  $chkTermos.closest('.item').removeClass('error');

  let hasError = false;

  if ($txtName.val().length < 5) {
    $txtName.closest('.item').addClass('error');
    hasError = true;
  }

  if ($txtTitle.val().length < 8) {
    $txtTitle.closest('.item').addClass('error');
    hasError = true;
  }

  if ($txtDescription.val().length < 100) {
    $txtDescription.closest('.item').addClass('error');
    hasError = true;
  }

  let selectedAreas = [];

  $chkAreas.find('input[type=checkbox]:checked').each(function (i, e) {
    selectedAreas.push($(e).attr('value'));
  });

  if (selectedAreas.length === 0 || selectedAreas.length > 3) {
    $chkAreas.closest('.item').addClass('error');
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
    formData.append('title', $txtTitle.val());
    formData.append('expertise_areas', JSON.stringify(selectedAreas));
    formData.append('description', $txtDescription.val());

    if ($filePicture[0].files.length > 0) {
      formData.append('picture_file', $filePicture[0].files[0]);
    }

    $.ajax({
      url: window.signupAPIEndpoint + '/assistant/register-profile',
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
          $txtError.html("Sua sessão expirou.<br/> <a class='link' href='javascript:void(0)' onclick='popupWindow(\"" + window.signupAPIEndpoint + "/auth/google/assistant?popup=true\",\"_blank\",window, 600, 400)' target='_blank' class='link'> Clique aqui para entrar novamente.</a>").show();
        } else {
          try {
            let err = JSON.parse(xhr.responseText);
            if (err.errorCode === 'ASSISTANT_ALREADY_REGISTERED') {
              $txtError.html("Você já criou uma conta.<br/> <a class='link' href='" + window.assistantDashboard + "' target='_blank' class='link'> Clique aqui para fazer login.</a>").show();
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
        window.location = assistantDashboard;
      }
    });


  }

}