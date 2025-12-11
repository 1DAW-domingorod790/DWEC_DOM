"use strict"
{
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    p1.textContent = "Este es el texto 1.";
    p2.textContent = "Este es el texto 2.";
    p3.textContent = "Este es el texto 3.";

    let btn1 = document.createElement("button");
    btn1.id = "idBtn1";
    btn1.textContent = "Reaparecer";

    document.body.appendChild(btn1);

    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);

    p1.style.display = "block";
    p2.style.display = "block";
    p3.style.display = "block";

    let listaP = document.body.getElementsByTagName("p");

    for (const p of listaP){
        p.addEventListener("mouseout", () => {
            p.style.display = "none";
        });

        p.addEventListener("dblclick", () => {
            p.remove();
        })
    }

    btn1.addEventListener("click", () => {
        for (const p of listaP) {
            if (p.style.display === "none") p.style.display = "block";
        }
    })
}