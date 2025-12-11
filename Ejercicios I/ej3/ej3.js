"use strict"
{
    function getRandomNumber(min, max) {
        return Math.round(Math.random()*(max-min)+min);
    }
    
    
    let table = document.createElement("table");
    let cont = 0;
    for (let i = 0; i < 10; i++){
        let tr = document.createElement("tr");
        for (let j = 0; j < 10; j++){
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = getRandomNumber(100, 200);
            checkbox.id = "idCheckbox";

            let label = document.createElement("label");
            label.textContent = cont;
            label.htmlFor = "idCheckbox";
            
            let td = document.createElement("td");
            td.appendChild(checkbox);
            td.appendChild(label);
            tr.appendChild(td);
            cont++;
        }
        table.appendChild(tr);
    }

    table.style.border = "none";
    document.body.appendChild(table);

    let listaInput = document.getElementsByTagName("input");
    for (const checkbox of listaInput){
        checkbox.addEventListener("change", () => {
            if (checkbox.checked){
                console.log("check" + checkbox.value + " marcado");
            }else{
                console.log("check" + checkbox.value + " desmarcado");
            }
        });
    }

    let btn1 = document.body.querySelector("#idBtn1");
    btn1.addEventListener("click", () => {
        let listaInput = document.getElementsByTagName("input");
        for (const checkbox of listaInput){
            if (checkbox.type == "checkbox"){
                checkbox.checked = true;
                console.log("check" + checkbox.value + " marcado");
            }
        }
    });

    let btn2 = document.body.querySelector("#idBtn2");
    btn2.addEventListener("click", () => {
        let listaInput = document.getElementsByTagName("input");
        for (const checkbox of listaInput){
            if (checkbox.type == "checkbox"){
                checkbox.checked = false;
                console.log("check" + checkbox.value + " desmarcado");

            }
        }
    });

    let btn3 = document.body.querySelector("#idBtn3");
    btn3.addEventListener("click", () => {
        let listaInput = document.getElementsByTagName("input");
        for (const checkbox of listaInput){
            if (checkbox.type == "checkbox"){
                if (checkbox.value % 2 === 0){
                    checkbox.style.width = "150%";
                    checkbox.style.height = "150%";
                }
            }
        }
    });

    let btn4 = document.body.querySelector("#idBtn4");
    btn4.addEventListener("click", () => {
        let listaInput = document.getElementsByTagName("input");
        for (const checkbox of listaInput){
            if (checkbox.type == "checkbox"){
                if (checkbox.value % 2 === 0){
                    checkbox.style.width = "50%";
                    checkbox.style.height = "50%";
                }
            }
        }
    });
}