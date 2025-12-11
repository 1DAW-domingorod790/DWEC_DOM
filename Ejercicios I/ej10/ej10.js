"use strict"
{
    let email = document.querySelector("#idEmail");
    let mensaje = false;

    email.addEventListener("blur", () => {
        const regExp = /[a-z]/i;
        let letra = email.value.charAt(email.value.length-1);
        mensaje = regExp.test(letra)?true:false;
        if (!mensaje) {
                let p = document.createElement("p");
                p.textContent = "Tiene que tener una letra en la última posición";
                document.body.append(p);
            }
    })

    let formulario = document.querySelector("#idForm");

    formulario.addEventListener("submit", (e) => {
        const regExp = /[a-z]/i;
        let letra = email.value.charAt(email.value.length-1);
        mensaje = regExp.test(letra)?true:false;
        if (!mensaje) {
            e.preventDefault();
                let p = document.createElement("p");
                p.id = "idMensaje";
                p.textContent = "Tiene que tener una letra en la última posición";

            }
    })
}