"use strict"
{
    let form = document.querySelector("#idForm");
    let listaServidores=["terra.es","google.com","marca.es","yahoo.es"];

    form.addEventListener("submit", (e) => {
        const regExp = /^[a-z][a-z\d]+@[a-z]+\.[a-z]+$/;
        let email = document.querySelector("#idEmail");
        let resultado = regExp.test(email.value);
        if (!resultado) {
            mostrarMensaje("Formato de email incorrecto", form);
            e.preventDefault();
        }else{
            let partes = email.value.split("@");
            console.log(partes);
            if (!listaServidores.includes(partes[1])){
                mostrarMensaje("Ese servidor es incorrecto", form);
                e.preventDefault();
            }
        }
    })

    function mostrarMensaje (mensaje, elemento) {
        let p = document.createElement("p");
        p.textContent = mensaje;

        elemento.insertAdjacentElement("afterend", p);

        setTimeout(function(){
            p.remove();
        }, 3000);
    }

    // const regExp = /^[a-z]+@[a-z]+.[a-z]+$/;

    // console.log(regExp.test("domingo@dwad.c"));

}