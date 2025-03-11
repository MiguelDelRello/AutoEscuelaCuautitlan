    document.addEventListener('DOMContentLoaded', function() {
        (function() {
            emailjs.init("Sut8vJS6Rg6K_gC0N"); // Reemplaza TU_USER_ID con tu ID de usuario de EmailJS
        })();
        
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

            // Obtener el formulario directamente
            const form = document.getElementById('form');

            emailjs.sendForm('default_service', 'template_e8dvzyr', form)
                .then(function() {
                    alert('Correo enviado con éxito!');
                    form.reset(); // Opcional: reinicia el formulario después de enviar
                }, function(error) {
                    alert('Error al enviar el correo: ' + JSON.stringify(error));
                });
        });

});
/*
const btn = document.getElementById("button")



    document.addEventListener('DOMContentLoaded', function() {
 


  const serviceID = "default_service"
  const templateID = "template_e8dvzyr"

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      alert("Sent!")
    },
    (err) => {
      alert(JSON.stringify(err))
    },
  )
});
*/