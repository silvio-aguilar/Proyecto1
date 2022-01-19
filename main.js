window.onload = () => {
   //capturamos el formulario
   const form = document.getElementById("email-form");
   const notification = document.getElementById("notification");

   //escuchamos el evento submit o onsubmit (pulsar el boton de enviar)
   form.addEventListener("submit", (e) => {
      //evitamos el comportamiento por defecto
      e.preventDefault();

      //capturamos los inputs de texto
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let text = document.getElementById("textarea").value;

      //función para descargar el archivo
      function download(filename, text) {
         var element = document.createElement('a');
         element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
         element.setAttribute('download', filename);

         element.style.display = 'none';
         document.body.appendChild(element);

         element.click();

         document.body.removeChild(element);
      }

      //constrimos la variable de texto
      let tempText = `
         Este mensaje es generado automáticamente
         Emisor: ${name} \n
         Email: ${email}\n
         Mensaje: ${text}`;

      //invocamos la funcion para descargar el archivo
      download("email.txt", tempText);



      //ahora hay que mostrar un mensaje en la pantalla, os toca hacerlo a vosotros
       
      document.getElementById("notification").style.display = 'block'
   
      //código que se ejecuta a los tres segundos de haber sido leido
      setTimeout(function () {
         notification.style.display = 'none';
      }, 2000);
   
 
       
 
       


       

    });


    
 }


 

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


