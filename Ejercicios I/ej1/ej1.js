"use strict"
{
    function getRandomNumber(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    let btn = document.body.querySelector("#idBtn1");

    let ul = document.createElement("ul");
    ul.textContent = "Números aleatorios: ";
    document.body.appendChild(ul);

    

    btn.addEventListener("click", () => {
        let li = document.createElement("li");
        li.textContent = getRandomNumber(1, 100);
        ul.appendChild(li);
    });

    let btn2 = document.body.querySelector("#idBtn2");

    btn2.addEventListener("click", () => {
        let li = ul.lastElementChild;
        if (li) {
            li.remove();
        }
    });
}