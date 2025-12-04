var input = document.querySelector("#phone");
let intl = window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    autoInsertDialCode: true,
    initialCountry: "BR",
    separateDialCode: true
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

let $name = $("#name");
let $email = $("#email");
let $phone = $("#phone");



$name.on('blur', function () {
    if ($name.val().trim().length < 5) {
        $("#name-error").css('opacity', 1);
        $name.addClass('input-error');
    } else {
        $("#name-error").css('opacity', 0);
        $name.removeClass('input-error');
    }
});

$email.on('blur', function () {
    if ($email.val().trim().length === 0 || !validateEmail($email.val().trim())) {
        $("#email-error").css('opacity', 1);
        $email.addClass('input-error');
    } else {
        $("#email-error").css('opacity', 0);
        $email.removeClass('input-error');
    }
});

$phone.on('blur', function () {
    intl.setNumber(intl.getNumber());
    if (intl.isValidNumber()) {
        $phone.removeClass("input-error");
        $("#phone-error").css('opacity', 0);
    } else {
        $phone.addClass("input-error");
        $("#phone-error").css('opacity', 1);
    }
});

function collectFormData() {
    $("#popUp").off().on('shown.bs.modal', function () {
        $("#name").focus();
    });
    $("#popUp").modal('show');
}


function goToGroup() {     
    let url = 'https://chat.whatsapp.com/IekSadZ5zm21MKage9G1Vx';
    window.dataLayer.push({
        'event': 'ga_event',
        'ga_event_name': 'go_to_whatsapp_page',
        'redir_url': url
    });
    setTimeout(() => window.location.href = url, 5000);
} 

function signup() {
    let valid = true;
    let focusElement = null;

    $("#name-error").css('opacity', 0);
    $name.removeClass('input-error');
    $("#email-error").css('opacity', 0);
    $email.removeClass('input-error');
    $("#phone-error").css('opacity', 0);

    if ($name.val().trim().length < 5) {
        $("#name-error").css('opacity', 1);
        $name.addClass('input-error');
        focusElement = $name;
        valid = false;
    }

    if ($email.val().trim().length === 0 || !validateEmail($email.val().trim())) {
        $("#email-error").css('opacity', 1);
        $email.addClass('input-error');
        if (!focusElement) {
            focusElement = $email;
        }
        valid = false;
    }

    if (!intl.isValidNumber()) {
        $("#phone-error").css('opacity', 1);
        $phone.addClass('input-error');
        if (!focusElement) {
            focusElement = $phone;
        }
        valid = false;
    }

    if (valid) {

        function disableUI() {
            $("#btn-continue").prop('disabled', true).text('Por favor, aguarde...').addClass('disabled');
            $("#closePopup").prop('disabled', true);
            $("form").find('input').prop('disabled', true);
        }

        function enableUI() {
            $("#btn-continue").prop('disabled', false).text('Continuar').removeClass('disabled');
            $("#closePopup").prop('disabled', false);
            $("form").find('input').prop('disabled', false);
        }


        disableUI();
        $("#submit-error").css('opacity', 0);

        var fd = new FormData();
        fd.append('entry.890504879', $name.val());
        fd.append('entry.447662442', $email.val());
        fd.append('entry.1486622628', intl.getNumber());

        $.ajax({
            url: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdabSRX4pEshouWHX1CxMHYo8T7xeKByRy5cZnnfkl6yE4sdA/formResponse',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (result) {
                location.href = 'https://chat.whatsapp.com/IekSadZ5zm21MKage9G1Vx';

            },
            error: function (request, status, errorThrown) {
                location.href = 'https://chat.whatsapp.com/IekSadZ5zm21MKage9G1Vx';
            }
        });

        // $.ajax({
        //     url: "https://nocodeform.io/f/6671f7d5a2b15fe1fa291f38",
        //     method: "POST",
        //     dataType: 'json',
        //     contentType: 'application/json',
        //     data: JSON.stringify({
        //         name: $name.val(),
        //         email: $email.val(),
        //         phone: intl.getNumber()
        //     }),

        //
        // });


    } else {
        focusElement.focus();
    }

    return false;
}
