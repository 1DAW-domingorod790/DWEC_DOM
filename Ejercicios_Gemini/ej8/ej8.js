"use strict"
{
    let form = document.createElement("form");

    let inputNumber = document.createElement("input");
    inputNumber.type = "text";
    inputNumber.placeholder = "nº de tarjeta";
    form.appendChild(inputNumber);

    document.body.appendChild(form);

    form.addEventListener("keydown", (e) => {
        const regExp = /\d/;

        if (regExp.test(e.key) || e.key === "Backspace"){
            let numberString = inputNumber.value.toString();
            if (numberString.length === 4*4+3){
                if (e.key !== "Backspace") {
                    e.preventDefault();
                }
            }else{
                if (numberString.length > 4){
                    if (numberString.substring(numberString.lastIndexOf("-")).length === 5){
                        if (e.key !== "Backspace") {
                            inputNumber.value += "-";
                        }
                    }
                }else{
                    if (numberString.length === 4){
                        if (e.key !== "Backspace") {
                            inputNumber.value += "-";
                        }
                    }
                }
            }
        }else{
            e.preventDefault();
        }
    })
}