function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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
    setTimeout(() => document.location.href = url, 2000);
}


function isEmpty(str) {
    if (!str || str.trim().length === 0) {
        return true;
    }
    return false;
}

function validateName(name) {
    if (!name || name.trim().length < 10) {
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
