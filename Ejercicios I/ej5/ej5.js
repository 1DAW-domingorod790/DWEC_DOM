"use strict"
{
    let p = document.createElement("p");

    document.body.appendChild(p);

    document.addEventListener("mousemove", (event) => {
        p.textContent = "X: " + event.screenX + "; Y: " + event.screenY;
    });
}