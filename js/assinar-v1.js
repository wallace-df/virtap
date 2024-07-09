window.signupAPIEndpoint = 'http://localhost:3000';
window.assistantDashboard = 'https://assistentes.virtap.com.br';

let formData = new FormData();



async function handleError(response) {
  console.log(response);
  let showGenericError = true;
  if (response.errorCode === 'ALREADY_SUBSCRIBED') {
    if (window.target_plan === 'Basic' && response.errorData.assistant_plan === 'Basic') {
      $("#loading").html('<div><h1>Você já assinou o plano Basic.</h1><br /><p>Redirecionando automaticamente...</p></div>');
      showGenericError = false;
    } else if (response.errorData.assistant_plan === 'Vip') {
      $("#loading").html('<div><h1>Você já assinou o plano Vip.</h1><br /><p>Redirecionando automaticamente...</p></div>');
      showGenericError = false;
    } else {
      console.log("Invalid assistant plan:", response.errorData.assistant_plan);
    }
  }

  $("#loading").show();
  $("#sign_up").hide();

  if (showGenericError) {
    $("#loading").html('<h1 style="color: #f66666">Ocorreu um erro.<br/><br/> Por favor, atualize a página e tente novamente.</h1>');
  }
}

$.ajax({
  url: window.signupAPIEndpoint + '/subscribe?plan=' + window.target_plan,
  data: formData,
  processData: false,
  contentType: false,
  type: 'GET',
  xhrFields: {
    withCredentials: true
  },
  error: async function (xhr) {
    if (xhr.status === 400 && xhr.responseJSON) {
      await handleError(xhr.responseJSON);
    }
  },
  success: function (response) {
    response = response.responseData;

    $("#loading").hide();
    $("#sign_up").show();
    $("#cpf_cnpj").val(response.cpf_cnpj);
    $("#email").val(response.email);
    $("#email").prop('disabled', (response.email && response.email.trim().length > 0 ? true : false));
    ready = true;



    const submitBtn = document.getElementById('submit-btn');


    $("#submit-btn").on('click', async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();

      // Prevent multiple form submissions
      if (submitBtn.disabled || !ready) {
        return;
      }

      // Disable form submission while loading
      $("#submit-btn").prop('disabled', true).text('Por favor, aguarde...');

      // Create the subscription
      try {


        let formData = new FormData();
        formData.append("target_plan", window.target_plan);
        formData.append("name", $("#name").val());
        formData.append("email", $("#email").val());
        formData.append("cpf_cnpj", $("#cpf_cnpj").val());

        // Create the PaymentIntent
        const res = await fetch("http://localhost:3000/subscribe", {
          method: "POST",
          credentials: "include",
          body: formData
        });

        if (res.status !== 200) {
          throw await res.json();
        }

        const data = await res.json();
        console.log(data);

      } catch (err) {
        handleError(err);
      }
    });
    console.log(response);
  }
});
