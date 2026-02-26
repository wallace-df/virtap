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
        // $("#name-error").css('opacity', 1);
        // $name.addClass('input-error');
    } else {
        $("#name-error").css('opacity', 0);
        $name.removeClass('input-error');
    }
});

$email.on('blur', function () {
    if ($email.val().trim().length === 0 || !validateEmail($email.val().trim())) {
        // $("#email-error").css('opacity', 1);
        // $email.addClass('input-error');
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
        // $phone.addClass("input-error");
        // $("#phone-error").css('opacity', 1);
    }
});

function collectFormData() {
    $("#popUp").off().on('shown.bs.modal', function () {
        $("#name").focus();
    });
    $("#popUp").modal('show');
}


function goToGroup() {
    let url = 'https://chat.whatsapp.com/BwUQnl75COHF4LxAYWUtP0';
    window.dataLayer.push({
        'event': 'ga_event',
        'ga_event_name': 'go_to_whatsapp_page',
        'redir_url': url
    });
    setTimeout(() => window.location.href = url, 5000);
}

async function signup() {
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
            $("#btn-continue").prop('disabled', false).text('Confirmar').removeClass('disabled');
            $("#closePopup").prop('disabled', false);
            $("form").find('input').prop('disabled', false);
        }


        disableUI();
        $("#submit-error").hide();

        const url = `${window.apiURL}/signup-form-ap-launch`;
        const body = {
            name: $name.val().trim(),
            email: $email.val().trim(),
            whatsapp: intl.getNumber(),
            utm_params: getUTMParams()
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });


            if (response.status === 200) {
                goToGroup();

                // window.dataLayer.push({
                //     'event': 'ga_event',
                //     'ga_event_name': 'sign_up_waiting_list',
                //     'redir_url': url
                // });
                // setTimeout(() => window.location.href = "/espera-confirmada", 5000);
            } else {
                throw response;
            }
        } catch (err) {
            $("#submit-error").show().css('opacity', 1);
            console.log(err);
            enableUI();
        }

    } else {
        focusElement.focus();
    }

    return false;
}


function getNullableValue(val) {
    if (val) {
        val = val.trim();
        if (val.length === 0) {
            val = null;
        }
    }
    return val;
}

function getUTMParams() {

    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
    const rawReferrer = getNullableValue(document.referrer);
    const hasUTM = getNullableValue(params.get('utm_source')) && getNullableValue(params.get('utm_medium'));

    let utmParams = {};

    if (hasUTM) {
        for (const key of utmKeys) {
            let value = getNullableValue(params.get(key));
            utmParams[key] = value;
        }
    }
    utmParams['timestamp'] = Date.now();
    utmParams['referral_url'] = rawReferrer;

    let firstUtmParams = localStorage.getItem('first_visit_utm');
    if (!firstUtmParams) {
        firstUtmParams = utmParams;
        try {
            localStorage.setItem('first_visit_utm', JSON.stringify(utmParams));
        } catch { }
    } else {
        try {
            firstUtmParams = JSON.parse(firstUtmParams);
        } catch {
            firstUtmParams = utmParams;
        }
    }

    return {
        utm_first: firstUtmParams,
        utm_last: utmParams
    };
}

try {
    console.log(getUTMParams());
} catch (err) { }