"use strict"
{
   let table = document.createElement("table");
   table.style.border = "solid 2px white";
   
   for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
    }

    document.body.appendChild(table);

    table.addEventListener("click", () => {
        table.style.backgroundColor = "red";
    });

    table.addEventListener("dblclick", () => {
        table.style.backgroundColor = "blue";
    });

    let mouseover = false;
    table.addEventListener("mouseover", (e) => {
        console.log("mouseover");
        mouseover = true;
        if (mouseover && keydown) {
            table.style.backgroundColor = "green";
        }
    });

    table.addEventListener("mouseleave", (e) => {
        mouseover = false;
    })

    let keydown = false;
    document.addEventListener("keydown", () => {
        console.log("keydown");
        keydown = true;
        if (mouseover && keydown) {
            table.style.backgroundColor = "green";
        }
    });

    
}