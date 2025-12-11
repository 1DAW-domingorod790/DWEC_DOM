"use strict"
{
    function esPrimo (num) {
        if (num != 1 && num != 2 && num != 3 && num != 5){
            if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0) {
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
        
    }

    let table = document.createElement("table");
    
    let cont = 1;
    for (let i = 0; i < 10; i++){
        let tr = document.createElement("tr");
        for (let j = 0; j < 10; j++){
            let td = document.createElement("td");
            td.textContent = cont;
            tr.appendChild(td);
            cont++;
        }
        table.appendChild(tr);
    }

    document.body.appendChild(table);

    let btn1 = document.body.querySelector("#idBtn1");

    btn1.addEventListener("click", () => {
        let listaTd = document.getElementsByTagName("td");
        for (let td of listaTd) {
            if (esPrimo(td.textContent)){
                td.style.background = "yellow";
            }
        }
    });


    let btn2 = document.body.querySelector("#idBtn2");

    btn2.addEventListener("click", () => {
        let listaTd = document.getElementsByTagName("td");
        console.log(listaTd);
        for (let td of listaTd) {
            for (let td of listaTd) {
            if (td.style.background == "yellow"){
                td.style.background = "none";
            }
        }
        }
    });
}