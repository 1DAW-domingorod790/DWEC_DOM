"use strict"
{
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");

    btn1.textContent = "Comenzar saludos";
    btn2.textContent = "Parar saludos";

    document.body.appendChild(btn1);
    document.body.appendChild(btn2);

    let intervalo;

    btn1.addEventListener("click", () => {
        intervalo = setInterval(saludar, 5000);
    });

    btn2.addEventListener("click", () => {
        clearInterval(intervalo);
    })


    function saludar () {
        alert("Hola");
    }
}   