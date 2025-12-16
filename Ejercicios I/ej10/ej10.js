"use strict"
{
    let email = document.querySelector("#idEmail");
    let mensaje = false;

    function comprobarLetra (dni) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

        if (dni.length !== 9) {
            return false;
        }

        let letraAcomprobar = dni.charAt(8);
        return letras[parseInt(dni.substring(0, dni.length-1)) % 23] === letraAcomprobar.toUpperCase();
    }

    email.addEventListener("blur", (e) => {
        const regExp = /^[0-9]{8}[a-z]$/i;
        if (regExp.test(email.value)){
            let mensaje = comprobarLetra(dni);
            if (!mensaje) {
                let p = document.createElement("p");
                p.textContent = "Tiene que tener una letra en la última posición";
                document.body.append(p);
            }
        }
    })

    let formulario = document.querySelector("#idForm");

    formulario.addEventListener("submit", (e) => {
        const regExp = /[a-z]/i;
        let letra = email.value.charAt(email.value.length-1);
        mensaje = regExp.test(letra);
        if (!mensaje) {
            e.preventDefault();
            let p = document.createElement("p");
            p.id = "idMensaje";
            p.textContent = "Tiene que tener una letra en la última posición";
        }
    });
}