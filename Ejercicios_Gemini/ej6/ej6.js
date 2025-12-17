"use strict"
{

const usuariosRegistrados = [
    "admin",
    "juan88",
    "laura_dev",
    "user123",
    "pepito",
    "maria_garcia",
    "maquina_js",
    "test_user",
    "invitado",
    "pablo_vlc"
];

let form = document.createElement("form");

let inputName = document.createElement("input");
inputName.type = "text";
inputName.placeholder = "Nombre aquí";

let inputPassword1 = document.createElement("input");
inputPassword1.type = "password";
inputPassword1.placeholder = "Contraseña aquí";

let buttonPassword1 = document.createElement("button");
buttonPassword1.type = "button";
buttonPassword1.textContent = "Ver";

let inputPassword2 = document.createElement("input");
inputPassword2.type = "password";
inputPassword2.placeholder = "Repetir contraseña";

let buttonPassword2 = document.createElement("button");
buttonPassword2.type = "button";
buttonPassword2.textContent = "Ver";

let submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Comprobar";

form.appendChild(inputName);
form.appendChild(inputPassword1);
form.appendChild(buttonPassword1);
form.appendChild(inputPassword2);
form.appendChild(buttonPassword2);
form.appendChild(submitButton);

document.body.appendChild(form);

form.addEventListener("submit", (e) => {
    if (usuariosRegistrados.includes(inputName.value)){
        if (inputPassword1.value !== inputPassword2.value){
            e.preventDefault();
            mostrarMensaje("Las contraseñas no coinciden", form);
        }
    }else{
        e.preventDefault();
        mostrarMensaje("Ese nombre no existe", form);
    }
    
});

buttonPassword1.addEventListener("click", () => {
    if (inputPassword1.type === "password"){
        inputPassword1.type = "text";
    }else{
        inputPassword1.type = "password";
    }
});

buttonPassword2.addEventListener("click", () => {
    if (inputPassword2.type === "password"){
        inputPassword2.type = "text";
    }else{
        inputPassword2.type = "password";
    }
})

function mostrarMensaje(mensaje, element) {
    let p = document.createElement("p");
    p.textContent = mensaje;
    p.style.color = "red";
    element.insertAdjacentElement("afterend", p);

    setTimeout(function(){
        p.remove();
    }, 3000);
}

}