const titulos = document.getElementsByClassName("h1");
for (let i = 0; i < titulos.length; i++) {
    const titulo = titulos[i];
    titulo.innerText += 'Forumulario';
}

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    const datosUsuario = {
        nombre: nombre,
        email: email
    };

    const datosUsuarioJSON = JSON.stringify(datosUsuario);

    localStorage.setItem("usuario", datosUsuarioJSON);

    document.getElementById("miFormulario").reset();
});