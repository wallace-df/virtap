// ok
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
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

let plans = {
    'BASIC': 'Basic',
    'VIRTAPCLUB': 'VirtapClub'
};

function getPlan() {
    let target_plan = getParameterByName('plano');
    if (target_plan) {
        target_plan = target_plan.toUpperCase();
    }
    return target_plan;
}


function getCourse() {
    let course = getParameterByName('curso');
    if (course) {
        course = course.toLowerCase();
    }
    return course;
}

function getNext() {
    let next = getParameterByName('next');
    let url = window.dashboardURL;
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
    setTimeout(() => document.location.href = url, 4000);
}

function validateName(name) {
    if (!name || name.trim().length < 5) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

function validateCPFCNPJ(cpf_cnpj) {
    const cleanDocument = cpf_cnpj.replace(/\D/g, '');
    if (cleanDocument.length === 11) {
        return validateCPF(cpf_cnpj);
    } else if (cleanDocument.length === 14) {
        return validateCNPJ(cpf_cnpj);
    } else {
        return false;
    }
}

function validateCPF(cpf) {
    // Check if the input consists of only numbers or a properly formatted CPF (XXX.XXX.XXX-XX)
    if (!/^\d{11}$/.test(cpf) && !/^\d{3}(\.\d{3}){2}-\d{2}$/.test(cpf)) {
        return false;
    }

    cpf = cpf.replace(/\D/g, ''); // Remove any non-numeric characters (dots, hyphens)

    // Check if CPF has 11 digits and is not composed of all identical digits
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    // Function to calculate the verification digit
    const calcDigit = (cpf, pos) => {
        let sum = 0, multiplier = pos;
        for (let i = 0; i < pos - 1; i++) sum += cpf[i] * multiplier--;
        return (sum % 11 < 2) ? 0 : 11 - (sum % 11);
    };

    // Validate the two verification digits
    if (parseInt(cpf[9]) !== calcDigit(cpf, 10) || parseInt(cpf[10]) !== calcDigit(cpf, 11)) return false;

    return true;
}

function validateCNPJ(cnpj) {
    // Check if the input is either numeric (14 digits) or in the correct format (XX.XXX.XXX/XXXX-XX)
    if (!/^\d{14}$/.test(cnpj) && !/^\d{2}(\.\d{3}){2}\/\d{4}-\d{2}$/.test(cnpj)) {
        return false;
    }

    cnpj = cnpj.replace(/\D/g, ''); // Remove non-numeric characters (dots, slashes, hyphens)

    // Check if CNPJ has 14 digits and is not composed of all identical digits
    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

    // Function to calculate the verification digit
    const calcDigit = (cnpj, weights) => {
        let sum = 0;
        for (let i = 0; i < weights.length; i++) {
            sum += cnpj[i] * weights[i];
        }
        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    };

    // Weights for the first and second check digits
    const firstDigitWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const secondDigitWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    // Validate the two check digits
    const firstCheckDigit = calcDigit(cnpj, firstDigitWeights);
    const secondCheckDigit = calcDigit(cnpj, secondDigitWeights);

    if (parseInt(cnpj[12]) !== firstCheckDigit || parseInt(cnpj[13]) !== secondCheckDigit) return false;

    return true;
}

function validateAddress(address) {
    if (!address || address.trim().length < 5) {
        return false;
    }
    return true;
}

function validateAddressNumber(address_number) {
    if (!address || address_number.trim().length < 1 || Number(address_number) < 0) {
        return false;
    }
    return true;
}

function validateNeighborhood(neighborhood) {
    if (!neighborhood || neighborhood.trim().length < 3) {
        return false;
    }
    return true;
}

function validateCEP(cep) {
    if (!/^\d{8}$/.test(cep) && !/^\d{5}-\d{3}$/.test(cep)) {
        return false;
    }

    if (/^\d{5}-\d{3}$/.test(cep)) {
        return true;
    }

    return true;
}

function validatePhone(phoneNumber) {
    // Regex for validating phone numbers
    const regex = /^(\(\d+\))?[\d\s\-]+(\d)$/;

    // Test if the input phone number matches the regex
    if (!regex.test(phoneNumber)) {
        return false;
    }

    phoneNumber = '+' + intl.getSelectedCountryData().dialCode + phoneNumber;

    return intlTelInputUtils.isValidNumber(
        phoneNumber,
        null,
        intlTelInputUtils.numberFormat.INTERNATIONAL
    );
}

function validateCreditCard(number) {
    number = number.replace(/\D/g, '');

    if (number.length < 13 || number.length > 19) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

function formatCPFCNPJ(cpf_cnpj) {
    if (cpf_cnpj.length <= 11) {
        return cpf_cnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    } else {
        return cpf_cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
    }
}

function isEmpty(str) {
    if (!str || str.trim().length === 0) {
        return true;
    }
    return false;
}

function popupWindow(url, windowName, win, w, h) {
    const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
    return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}

function dataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
}

function getImage(dataUrl) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = dataUrl;
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (el, err) => {
            reject(err.error);
        };
    });
}

async function downscaleImage(
    dataUrl,
    imageType,  // e.g. 'image/jpeg'
    resolution,  // max width/height in pixels
    quality   // e.g. 0.9 = 90% quality
) {

    // Create a temporary image so that we can compute the height of the image.
    const image = await this.getImage(dataUrl);
    const oldWidth = image.naturalWidth;
    const oldHeight = image.naturalHeight;

    const longestDimension = oldWidth > oldHeight ? 'width' : 'height';
    const currentRes = longestDimension == 'width' ? oldWidth : oldHeight;

    // Calculate new dimensions
    const newSize = longestDimension == 'width'
        ? Math.floor(oldHeight / oldWidth * resolution)
        : Math.floor(oldWidth / oldHeight * resolution);
    const newWidth = longestDimension == 'width' ? resolution : newSize;
    const newHeight = longestDimension == 'height' ? resolution : newSize;

    // Create a temporary canvas to draw the downscaled image on.
    const canvas = document.createElement('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the downscaled image on the canvas and return the new data URL.
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, newWidth, newHeight);
    const newDataUrl = canvas.toDataURL(imageType, quality);
    return newDataUrl;
}

async function logout() {
    try {
        await fetch(window.apiURL + '/logout', {
            method: "GET",
            credentials: "include",
        });
    } catch (err) {
        // Ignore.
    }
    location.reload();
}

let hasBillingDetails = false;
let loggedInUser = null;
let submitBtn = document.getElementById('submit-btn');
let autocomplete = null;
let input;
let intl;
let initAutocompleteAfterPaymentForm = false;

function initAutocomplete() {
    let addressField = document.querySelector("#address");

    if (!addressField) {
        console.log("Loading auto complete after payment form...");
        initAutocompleteAfterPaymentForm = true;
    } else {
        console.log("Loading auto complete!");
        autocomplete = new google.maps.places.Autocomplete(addressField, {
            componentRestrictions: { country: ["br"] },
            fields: ["address_components", "geometry"],
            types: ["address"],
        });
        // When the user selects an address from the drop-down, populate the
        // address fields in the form.
        autocomplete.addListener("place_changed", fillInAddress);

    }


};

function populateMunicipios(uf) {
    const municipioSelect = $("#city");
    municipioSelect.empty();  // Limpa o select de municípios

    let municipiosData = ufs;
    // Verifica se existem municípios para a UF
    if (municipiosData[uf]) {
        // Adiciona os municípios no select
        municipiosData[uf].municipios.forEach(function (municipio) {
            municipioSelect.append(`<option value="${municipio.codigo_ibge}">${municipio.nome}</option>`);
        });
    }
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();
    let address1 = "";
    let postcode = "";


    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    // place.address_components are google.maps.GeocoderAddressComponent objects
    // which are documented at http://goo.gle/3l5i5Mr
    let address_number = null;
    let address = null;
    let city = null;
    let cep = null;
    let neighborhood = null;
    let uf = null;

    for (const component of place.address_components) {
        // @ts-ignore remove once typings fixed
        const componentType = component.types[0];

        switch (componentType) {
            case "route": {
                address = component.long_name;
                break;
            }

            case "street_number": {
                address_number = component.long_name;
                break;
            }

            case "sublocality_level_1":
                neighborhood = component.long_name;
                break;

            case "postal_code": {
                cep = component.long_name;
                break;
            }

            case "administrative_area_level_1": {
                uf = component.short_name;
                break;
            }

            case "administrative_area_level_2": {
                city = component.long_name;
                break;
            }
        }


    }

    $("#address_number").val(address_number).trigger('blur');
    $("#address").val(address).trigger('blur');
    $("#cep").val(cep).trigger('blur');
    $("#neighborhood").val(neighborhood).trigger('blur');

    $("#state").val("");
    $("#city").val("");

    if (uf) {
        $("#state").val(uf).trigger('blur');
        $("#state").trigger('change');

        if (city) {
            $("#city").val(String(ufs[uf].municipioCodes[city])).trigger('blur');
        }
    }
}
window.activePayments = {};

function updatePaymentStatus(method) {
    let paymentDetails = activePayments[method];
    $("#boleto-headline").show();
    $("#boleto-details").hide();

    $("#pix-headline").show();
    $("#pix-details").hide();

    if (paymentDetails) {
        $("#submit-btn").hide();
        if (method === 'boleto') {
            $("#boleto-headline").hide();
            $("#boleto-details").show();
            $('#slip-barcode').html("");
            let boleto = new Boleto(paymentDetails.barcode);
            boleto.toSVG('#slip-barcode');
            $('#slip-number').text(boleto.prettyNumber());
        } else if (method === 'pix') {
            $("#pix-headline").hide();
            $("#pix-details").show();

            let qrcode = new QRCode({ content: paymentDetails.qrcode, join: true });
            document.getElementById("pix-qrcode").innerHTML = qrcode.svg();
            $("#copy-pix-btn").data('pix-code',paymentDetails.qrcode);
        }
    } else {
        $("#submit-btn").show();
    }
}

function showPaymentForm(initialDetails, getTitleFunc, getButtonLabelFunc, prepareFormDataFunc, purchaseEndpoint, successHandler, errorHandler) {
    let hasEmail = (initialDetails.email && initialDetails.email.trim().length > 0 ? true : false);
    submitBtn = document.getElementById('submit-btn');
    input = document.querySelector("#phone");

    intl = window.intlTelInput(input, {
        autoInsertDialCode: true,
        initialCountry: "BR",
        separateDialCode: true
    });

    if (initAutocompleteAfterPaymentForm) {
        initAutocomplete();
    }


    let $cardContainer = $('[data-card-container');
    $cardContainer.CardJs();

    let $cardNumber = $(".card-number-wrapper");
    let $cardName = $(".name-wrapper");
    let $cardExpiration = $(".expiry-wrapper");
    let $cardCVC = $(".cvc-wrapper");

    $cardNumber.wrap($("<div data-field='card_number' data-card></div>"));
    $cardName.wrap($("<div data-field='card_holder'  data-card></div>"));
    $cardCVC.wrap($("<div data-field='card_cvc' data-card></div>"));
    $cardExpiration.wrap($("<div data-field='card_expiration' data-card></div>"));

    $('<label>Número do cartão</label>').insertBefore($cardNumber);
    $('<em>Por favor, informe um número válido.</em>').insertAfter($("#card-number").eq(0));

    $('<label>Nome no cartão</label>').insertBefore($cardName);
    $('<em>Por favor, informe um nome válido.</em>').insertAfter($("#card-holder").eq(0));

    $('<label>Validade</label>').insertBefore($cardExpiration);
    $cardExpiration.find('input').eq(0).attr('id', 'card-expiration');
    $cardExpiration.append('<em>Por favor, informe um data de expiração válida.</em>');

    $('<label>Código de segurança</label>').insertBefore($cardCVC);
    $('<em>Por favor, informe um CVC válido.</em>').insertAfter($("#card-cvc").eq(0));

    $cardNumber.addClass('mb-3');
    $cardName.addClass('mb-3');

    let $container = $(
        '<div class="d-flex" style="gap: 1rem; flex-wrap: wrap">' +
        '   <div data-first style="flex-grow: 1"></div>' +
        '   <div data-second style="flex-grow: 1"></div>' +
        '</div>'
    );

    $(".expiry-container").detach().appendTo($container.find('[data-first]'));
    $(".cvc-container").detach().appendTo($container.find('[data-second]'));

    $cardContainer.append($container);

    // Evento de mudança na UF
    $('#state').change(function () {
        const ufSelecionado = $(this).val();  // Pega a UF selecionada
        populateMunicipios(ufSelecionado);    // Chama a função para popular os municípios
    });

    let $installments = $("#installments");
    $installments.empty();
    initialDetails.payment_config.installments.forEach(function (config) {
        $installments.append(`<option value="${config.installments}_${config.amount}">${config.installments}x de R$ ${(config.amount / 100).toFixed(2).replace('.', ',')}</option>`);
    });

    let price = (initialDetails.payment_config.installments[0].amount / 100).toFixed(2).replace('.', ',');
    $("#sign_up").find('[data-price]').text(`R$ ${price}`);
    $("#sign_up").find('[data-payment-method]').attr('data-price', initialDetails.payment_config.installments[0].amount);
    $("#name").val(initialDetails.name);
    $("#cpf_cnpj").val(initialDetails.cpf_cnpj);
    $("#email").val(initialDetails.email);
    $("#email").prop('disabled', hasEmail);

    if (hasEmail) {
        loggedInUser = initialDetails.email;
        $("#confirmation_email").closest('.form-group').hide();
        $("#confirmation_email").val(initialDetails.email);
        $("#login-note").show();
    } else {
        $("#confirmation_email").closest('.form-group').show();
        $("#login-note").hide();
    }

    if (initialDetails.billing_details) {
        $("[data-auto-fillable]").hide();
        hasBillingDetails = true;
    }

    // 'Virtap | Assistente Virtual | Comprar curso';
    document.title = getTitleFunc();

    //'Comprar agora'
    $("#submit-btn").show().text(getButtonLabelFunc())
    $('[data-bs-toggle="tab"]').on('show.bs.tab', function (e) {
        let method = $(e.target).data('payment-method');
        updatePaymentStatus(method);
    });
    $("#loading").hide();
    $("#sign_up").show();
    setTimeout(() => $("#name").focus(), 300);
    ready = true;

    let getFields = function () {

        $("[data-field]").removeClass("error");
        let method = $("#sign_up").find('[data-payment-method].active');
        let billingDetails = null;
        let paymentDetails = {
            gateway: 'vindi',
            method: method.data('payment-method'),
            price: method.data('price'),
            details: {
            }
        };
        let hasError = false;

        if (!hasBillingDetails) {
            billingDetails = {};
            $("[data-field]").each(function () {
                let $field = $(this);
                if (!$field.is('[data-card]')) {
                    let val = $field.data('get-field')();
                    if (val === undefined && !$field.is('[data-optional]')) {
                        hasError = true;
                    } else {
                        billingDetails[$field.attr('data-field')] = val;
                    }
                }
            });
        }

        if (paymentDetails.method === 'credit_card') {
            $("[data-card]").each(function () {
                let $field = $(this);
                let val = $field.data('get-field')();
                if (val === undefined && !$field.is('[data-optional]')) {
                    hasError = true;
                } else {
                    paymentDetails.details[$field.attr('data-field')] = val;
                }
            });
        }

        if (hasError) {
            return null;
        } else {
            return { billingDetails: billingDetails, paymentDetails: paymentDetails }
        }

    }

    let $name = $("#name");
    let $email = $("#email");
    let $confirmation_email = $("#confirmation_email");
    let $cpf_cnpj = $("#cpf_cnpj");
    let $address = $("#address");
    let $address_number = $("#address_number");
    let $complement = $("#complement");
    let $neighborhood = $("#neighborhood");
    let $state = $("#state");
    let $cep = $("#cep");
    let $city = $("#city");
    let $phone = $("#phone");
    let $card_number = $("#card-number");
    let $card_holder = $("#card-holder");
    let $card_expiration = $("#card-expiration");
    let $card_cvc = $("#card-cvc");

    // Name
    $name.parent().data('get-field', function () {
        let name = $name.val().trim();
        if (!validateName(name)) {
            $name.parent().addClass('error');
            return undefined;
        }
        return name;
    });

    // Email 
    $email.parent().data('get-field', function () {
        let email = $email.val().trim().toLowerCase();
        if (!validateEmail(email)) {
            $email.parent().addClass('error');
            return undefined;
        }
        return email;
    });

    // Confirmation email 
    $confirmation_email.parent().data('get-field', function () {
        let email = $email.val().trim().toLowerCase();
        let confirmation_email = $confirmation_email.val().trim().toLowerCase();
        if (email !== confirmation_email) {
            $confirmation_email.parent().addClass('error');
            return undefined;
        }
        return email;
    });

    // CPF/CNPJ
    $cpf_cnpj.parent().data('get-field', function () {
        let cpf_cnpj = $cpf_cnpj.val();
        if (!validateCPFCNPJ(cpf_cnpj)) {
            $cpf_cnpj.parent().addClass('error');
            return undefined;
        } else {
            $cpf_cnpj.val(formatCPFCNPJ(cpf_cnpj));
        }
        return cpf_cnpj;
    });

    // Address
    $address.parent().data('get-field', function () {
        let address = $address.val().trim();
        if (!validateAddress(address)) {
            $address.parent().addClass('error');
            return undefined;
        }
        return address;
    });

    // Address number
    $address_number.parent().data('get-field', function () {
        let address_number = $address_number.val();
        if (!validateAddressNumber(address_number)) {
            $address_number.parent().addClass('error');
            return undefined;
        }
        return address_number;
    });

    // Complement 
    $complement.closest('[data-field]').data('get-field', function () {
        return $complement.val().trim();
    });

    // Neighborhood
    $neighborhood.parent().data('get-field', function () {
        let neighborhood = $neighborhood.val().trim();
        if (!validateNeighborhood(neighborhood)) {
            $neighborhood.parent().addClass('error');
            return undefined;
        }
        return neighborhood;
    });

    // State
    $state.parent().data('get-field', function () {
        let state = $state.val().trim();
        if (!state) {
            $state.parent().addClass('error');
            return undefined;
        }
        return state;
    });

    // CEP
    $cep.parent().data('get-field', function () {
        let cep = $cep.val().trim();
        if (!validateCEP(cep)) {
            $cep.parent().addClass('error');
            return undefined;
        }
        return cep;
    });

    // City 
    $city.parent().data('get-field', function () {
        let city = $city.val().trim();
        if (!city) {
            $city.parent().addClass('error');
            return undefined;
        }
        return city;
    });

    // Phone 
    $phone.closest('[data-field]').data('get-field', function () {
        let phone = $phone.val();

        if (!phone || phone.trim().length === 0) {
            $phone.closest('[data-field]').addClass('error');
            return undefined;
        }

        if (!validatePhone(phone)) {
            $phone.closest('[data-field]').addClass('error');
            return undefined;
        }
        return intl.getNumber();
    });

    // Card number 
    $card_number.closest('[data-field]').data('get-field', function () {
        let card_number = $card_number.val().trim();
        if (!validateCreditCard(card_number)) {
            $card_number.closest('[data-field]').addClass('error');
            return undefined;
        }
        return card_number;
    });

    // Card holder
    $card_holder.closest('[data-field]').data('get-field', function () {
        let card_holder = $card_holder.val().trim();
        if (card_holder.length < 5) {
            $card_holder.closest('[data-field]').addClass('error');
            return undefined;
        }
        return card_holder;
    });

    // Card expiration
    $card_expiration.closest('[data-field]').data('get-field', function () {
        let m = $cardContainer.CardJs('expiryMonth');
        let y = $cardContainer.CardJs('expiryYear');
        if (!CardJs.isExpiryValid(m, y)) {
            $card_expiration.closest('[data-field]').addClass('error');
            return undefined;
        }
        return {
            month: m,
            year: y
        };
    });

    // Card CVC 
    $card_cvc.closest('[data-field]').data('get-field', function () {
        let card_cvc = $card_cvc.val();
        if (!/^\d{3}$/.test(card_cvc)) {
            $card_cvc.closest('[data-field]').addClass('error');
            return undefined;
        }

        return card_cvc;
    });

    // Installments
    $installments.closest('[data-field]').data('get-field', function () {
        let installments = $installments.val();
        if (!installments) {
            $installments.closet('[data-field]').addClass('error');
            return undefined;
        }
        return installments;
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

            if (val && val.trim().length > 0 || $field.is('[data-not-empty]')) {
                $field.removeClass('error');
                $field.data('get-field')();
            }
        })
    });

    $(submitBtn).on('click', async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        // Prevent multiple form submissions
        if (submitBtn.disabled || !ready) {
            return;
        }

        $("[data-field]").removeClass("error");
        $("p.alert").hide();

        let fields = $("[data-field]");
        let hasError = false;
        fields.each(function (index) {
            let func = $(this).data('get-field');
            if (func === undefined) {
                hasError = true;
            } else (
                func()
            )
        });

        if (hasError) {
            return;
        }

        // Disable form submission while loading
        $("#submit-btn").prop('disabled', true).text('Por favor, aguarde...');
        $("input,select").prop('disabled', true);
        $(".nav-link").addClass("disabled");

        // Create the subscription.
        try {

            let fields = getFields();
            if (!fields) {
                return;
            }


            let billingDetails = fields.billingDetails;
            let paymentDetails = fields.paymentDetails;

            let formData = new FormData();
            formData.append("email", $("#email").val());
            if (billingDetails) {
                formData.append("billing_details", JSON.stringify(billingDetails));
            }
            formData.append("payment_details", JSON.stringify(paymentDetails));
            formData.append("utm_params", JSON.stringify(getUTMParams()));

            prepareFormDataFunc(formData);
            window.activePayments = {};
            updatePaymentStatus();

            // Create the PaymentIntent
            const res = await fetch(`${window.apiURL}/${purchaseEndpoint}`, {
                method: "POST",
                credentials: "include",
                body: formData
            });

            if (res.status !== 200) {
                console.log(res);
                throw await res.json();
            }

            const data = await res.json();
            if (data.responseData) {
                if (data.responseData.charged) {
                    $("#submit-btn").hide();
                    successHandler(data.responseData);
                } else {
                    if (paymentDetails.method === 'credit_card') {
                        throw new Error("Failure making payment using credit card.");
                    }

                    let invoice = data.responseData.invoice;
                    if (!invoice) {
                        throw new Error("Failure getting invoice details.");
                    }
                    let details = invoice.details;
                    if (!details) {
                        throw new Error("Failure getting invoice details.");
                    }

                    let paymentMethod = details.payment_method;
                    if (paymentMethod === "boleto") {
                        let slip = details.slip;
                        if (!slip) {
                            throw new Error("Failure getting slip details.");
                        }

                        let typeable_barcode = slip.typeable_barcode;
                        if (!typeable_barcode) {
                            throw new Error("Failure getting bar code.");
                        }
                        window.activePayments['boleto'] = {
                            barcode: typeable_barcode
                        };
                        updatePaymentStatus('boleto');
                    } else if (paymentMethod === "pix") {
                        let pix = details.pix;
                        if (!pix) {
                            throw new Error("Failure getting pix details.");
                        }

                        let qrcode_original_path = pix.qrcode_original_path;
                        if (!qrcode_original_path) {
                            throw new Error("Failure getting QR code.");
                        }
                        window.activePayments['pix'] = {
                            qrcode: qrcode_original_path
                        };
                        updatePaymentStatus('pix');
                    } else {
                        throw new Error("Unsupported payment method:" + paymentMethod);
                    }
                }

            } else {
                throw new Error("Failure making payment.");
            }

        } catch (err) {
            if (!err || !errorHandler(err)) {
                console.log(err);
                $("#generic-error").show();
            }
        }
        finally {
            $("#submit-btn").prop('disabled', false).text(getButtonLabelFunc());
            $("input,select").prop('disabled', false);
            $(".nav-link").removeClass("disabled");
            if (loggedInUser) {
                $("#email").prop('disabled', true);
            }
        }
    });

}

