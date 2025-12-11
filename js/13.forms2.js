"use strict"
{
    function mostrarMensaje (mensaje, elemento) {
        let p = document.createElement("p");
        p.textContent = mensaje;

        elemento.insertAdjacentElement("afterend", p);

        setTimeout(function(){
            p.remove();
        }, 3000);
    }

    let myForm = document.querySelector("#idForm1");
    myForm.addEventListener("submit", (e) => {
        let passwd = document.querySelector("#idPasswd");
        let cajaTexto = document.querySelector("#idText1");
        let email = document.querySelector("#idEmail1");

        //TODO: validar que los 3 campos cumplen las restricciones, y enviar

        //TODOS A LA VEZ: 
        // if (cajaTexto.value.length !== 4){
        //     e.preventDefault();
        //     console.log("error");
        //     mostrarMensaje("La longitud debe ser 4", cajaTexto);
        // }
        // if (!validarTexto(cajaTexto.value)){
        //     e.preventDefault();
        //     console.log("error");
        //     mostrarMensaje("Debe empezar por la letra a", cajaTexto);
        // }

        //DE 1 EN UNO
        if (cajaTexto.value.length !== 4){
            e.preventDefault();
            console.log("error");
            mostrarMensaje("La longitud debe ser 4", cajaTexto);
        }else if (!validarTexto(cajaTexto.value)){
            e.preventDefault();
            console.log("error");
            mostrarMensaje("Debe empezar por la letra a", cajaTexto);
        }
    });

    function validarTexto (t) {
        let regExp = /^a/i;
        return regExp.test(t);
    }
}