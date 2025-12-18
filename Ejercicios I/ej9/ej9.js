"use strict"
{
    let div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.style.justifyContent = "space-around";
    div1.style.alignItems = "flex-end";
    document.body.appendChild(div1);

    let papeleraVacia = document.createElement("img");
    papeleraVacia.setAttribute("src", "./papelera.jpg");
    papeleraVacia.setAttribute("alt", "Papelera vacía");
    papeleraVacia.style.height = "300px";
    papeleraVacia.style.width = "300px";
    div1.appendChild(papeleraVacia);

    let bolaPapel = document.createElement("img");
    bolaPapel.setAttribute("src", "./bola.jpg");
    bolaPapel.setAttribute("alt", "Papelera vacía");
    bolaPapel.style.height = "200px";
    bolaPapel.style.width = "200px";
    // bolaPapel.setAttribute("draggable", "true");
    div1.appendChild(bolaPapel);

    papeleraVacia.addEventListener ("dragover", (e) => {
        e.preventDefault();
    });

    papeleraVacia.addEventListener ("drop", (e) => {
        e.preventDefault();
        papeleraVacia.setAttribute("src", "./papelera_llena.jpg");
        papeleraVacia.style.height = "300px";
        papeleraVacia.style.width = "300px";
        bolaPapel.style.display = "none";
    });
}