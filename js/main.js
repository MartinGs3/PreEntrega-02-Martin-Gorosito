

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();


    const Nombres = document.getElementById("nombre").value;
    const Emails = document.getElementById("email").value;
    
    function confirmacion(){
        const imagenConfirmacion = document.createElement("img");
    imagenConfirmacion.src = "https://definicion.de/wp-content/uploads/2011/04/correspondencia.jpg";
    imagenConfirmacion.classList.add("enviado");
    imagenConfirmacion.alt = "confirmacion";
    document.getElementById("caja").appendChild(imagenConfirmacion);
    setTimeout(function() {
        imagenConfirmacion.remove();
    }, 8000);
    }

    function negacion(){
        const imagenNegacion = document.createElement("img");
        imagenNegacion.src = "https://thumbs.dreamstime.com/z/no-send-sign-isolated-white-background-vector-illustration-193341489.jpg";
        imagenNegacion.alt = "negacion";
        imagenNegacion.classList.add("noEnviado");
        document.getElementById("caja").appendChild(imagenNegacion);
        setTimeout(function() {
            imagenNegacion.remove();
        }, 8000);
    }    
    

    const datosUsuario = {
        Nombre: Nombres,
        Email: Emails
    };

    const datosUsuarioJSON = JSON.stringify(datosUsuario);

    localStorage.setItem("usuario", datosUsuarioJSON);

    Nombres === "" || Emails === "" ? negacion() : confirmacion()

   document.getElementById("miFormulario").reset();
});