"use strict"
{
    let formulario = document.querySelector("#idFormulario");
    let datos = new FormData(formulario);

    console.log(datos.get("nombre"));
    console.log(datos.get("edad"));
    console.log(datos.get("email"));

    formulario.addEventListener("submit", () => {
        datos.append("dni", "111111B");
    })

    console.log(datos);
}