window.signupAPIEndpoint = 'http://localhost:3000';
window.assistantDashboard = 'https://assistentes.virtap.com.br';
const stripe = Stripe('pk_test_51NpbOCC7jqja7iX3kgJo7g8FcCBti8YURXCIaGIsBlNBlV31g9jylf1op2Vb4mUjMsVwEtdcBrrLJQK8zfhXj6Eo00UcoGEzPF');


const handleServerResponse = async (response) => {
  if (response.errorCode) {
    console.log(response);
    alert('err1');
  } else if (response.status === "requires_action") {
    // Use Stripe.js to handle the required next action
    const {
      error,
      paymentIntent
    } = await stripe.handleNextAction({
      clientSecret: response.clientSecret
    });

    if (error) {
      console.log(error);
      alert('err2');

      // Show error from Stripe.js in payment form
    } else {
      alert('good 1!')
      // Actions handled, show success message
    }
  } else {
    alert('good 2!')
    // No actions needed, show success message
  }
}

let formData = new FormData();

$.ajax({
  url: window.signupAPIEndpoint + '/get-signup-data?plan=' + window.target_plan,
  data: formData,
  processData: false,
  contentType: false,
  type: 'GET',
  xhrFields: {
    withCredentials: true
  },
  error: function (xhr) {
    let showError = true;
    if (xhr.status === 400 && xhr.responseJSON) {
      if (xhr.responseJSON.errorCode === 'ALREADY_SUBSCRIBED') {
        if (window.target_plan === 'Starter' && xhr.responseJSON.errorData.plan === 'Starter') {
          showError = false;
          $("#loading").html('<h1>Você já assinou o plano Starter.</h1><br /><p>Redirecionando automaticamente...</p>');
        } else if (window.target_plan === 'Vip' && xhr.responseJSON.errorData.plan === 'Vip') {
          showError = false;
          $("#loading").html('<h1>Você já assinou o plano Vip.</h1><br /><p>Redirecionando automaticamente...</p>');
        } else if (xhr.responseJSON.errorData.billingSession !== null) {
          showError = false;
          $("#loading").html('<h1>Você já assina um plano na Virtap.</h1><br /><p>Vamos te redirecionar para página de alteração de planos...</p>');
          setTimeout(() => window.location = xhr.responseJSON.errorData.billingSession, 5000);
        }
      }
    }
    if (showError) {
      $("#loading").html('<h1 style="color: #f66666">Ocorreu um erro.<br/><br/> Por favor, atualize a página e tente novamente.</h1>');
    }
  },
  success: function (response) {
    response = response.responseData;
    const options = {
      mode: 'subscription',
      amount: 5000,
      currency: 'brl',
      layout: {
        type: 'tabs',
        defaultCollapsed: false,
      },
      locale: 'pt-br'
    };


    // Set up Stripe.js and Elements to use in checkout form
    const elements = stripe.elements(options);
    let ready = false;

    // Create and mount the Payment Element
    const paymentElement = elements.create('payment', {
      fields: {
        // billingDetails: 'never'
      }
    });
    paymentElement.mount('#payment-element');

    let address = { country: 'BR' };
    let phone = null;

    if (response.address) {
      address = response.address;
    }

    if (response.phone) {
      phone = response.phone;
    }

    const addressElement = elements.create("address", {
      mode: "billing",

      fields: {
        phone: 'always',
      },
      validation: {
        phone: {
          required: 'always',
        },
      },
      defaultValues: {
        name: response.name,
        address: address,
        phone: phone
      }
    });
    addressElement.mount("#address-element");

    paymentElement.on('loaderstart', function (event) {

      addressElement.on('loaderstart', function (event) {
        $("#loading").remove();
      });
    });

    paymentElement.on('ready', function (event) {

      addressElement.on('ready', function (event) {
        $("#fields").show();
        $("#submit-btn").show();
        $("#cpf_cnpj").val(response.cpf_cnpj);
        $("#email").val(response.email);
        $("#email").prop('disabled', (response.email && response.email.trim().length > 0 ? true : false));
        ready = true;
      });
    });

    const submitBtn = document.getElementById('submit-btn');

    const handleError = (error) => {
      const messageContainer = document.querySelector('#error-message');
      console.log(error);
      messageContainer.textContent = error.message;
      $("#submit-btn").prop('disabled', false);

    }

    $("#submit-btn").on('click', async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();

      // Prevent multiple form submissions
      if (submitBtn.disabled || !ready) {
        return;
      }

      // Disable form submission while loading
      $("#submit-btn").prop('disabled', true);

      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        handleError(submitError);
        return;
      }

      // Create the subscription
      try {

        let addressObj = await addressElement.getValue();

        // Create the ConfirmationToken using the details collected by the Payment Element
        // and additional shipping information
        const { error, confirmationToken } = await stripe.createConfirmationToken({
          elements,
          params: {
            return_url: 'https://example.com/order/123/complete'
          }
        });

        if (error) {
          // This point is only reached if there's an immediate error when
          // creating the ConfirmationToken. Show the error to your customer (for example, payment details incomplete)
          handleError(error);
          return;
        }

        let formData = new FormData();
        formData.append("target_plan", window.target_plan);
        formData.append("name", addressObj.value.name);
        formData.append("email", $("#email").val());
        formData.append("cpf_cnpj", $("#cpf_cnpj").val());
        formData.append("confirmationToken", confirmationToken.id);
        formData.append("address", JSON.stringify(addressObj.value.address));
        formData.append("phone", addressObj.value.phone);

        // Create the PaymentIntent
        const res = await fetch("http://localhost:3000/subscribe", {
          method: "POST",
          credentials: "include",
          body: formData
        });

        const data = await res.json();

        // Handle any next actions or errors. See the Handle any next actions step for implementation.
        handleServerResponse(data);


      } catch (err) {
        handleError(err);
      }
    });
    console.log(response);
  }
});
