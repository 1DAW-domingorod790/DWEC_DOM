"use strict"
{
    let form = document.querySelector("#idForm");
    let listaServidores=["terra.es","google.com","marca.es","yahoo.es"];

    form.addEventListener("submit", (e) => {
        const regExp = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let email = document.querySelector("#idEmail");
        let mensaje = regExp.test(email.value);
        if (!mensaje) {
            let p = document.createElement("p");
            p.textContent = "Formato de email incorrecto";
            document.body.append(p);
            e.preventDefault();
        }else{
            let partes = email.value.split("@");
            console.log(partes);
            if (!listaServidores.includes(partes[1])){
                let p = document.createElement("p");
                p.textContent = "Ese servidor es incorrecto";
                document.body.append(p);
                e.preventDefault();
            }
        }
    })

    // const regExp = /^[a-z]+@[a-z]+.[a-z]+$/;

    // console.log(regExp.test("domingo@dwad.c"));

}