"use strict"
{
    let myForm1 = document.getElementById("idForm1");
    console.log(myForm1);

    console.log(myForm1.nTexto.value);
    console.log(myForm1.nUrl.value);

    myForm1.nTexto.value = "hola";

    let myForm2 = document.getElementById("idForm2");
    console.log(myForm2);

    let inputText1 = document.getElementById("idTexto1");
    inputText1.addEventListener("input", (e) => {
        // console.log("input");
        // console.log(e.data);aaaa
        // console.log(e.target.value);
        // console.log(inputText1.value);
    });

    inputText1.addEventListener("change", (e) => {
        //change = cuando se pierde el foco
        console.log("change: " + e.target.value);
    });

    let rBtn1 = document.getElementsByName("nrButton1"); //nodelist
    // rBtn1 = document.querySelector("[name='nrButton1'"); //html collection
    console.log(rBtn1);

    rBtn1.forEach(r => {
        console.log(r);
        console.log(r.value);
        console.log(r.previousElementSibling);
        if (r.checked){
            console.log("Checked: " + r.value);
        }
    });

    console.log("Tiene: "+ rBtn1.length + " opciones");

    for (let r of rBtn1){
        r.addEventListener("change", () => {
            if (r.checked) {
                console.log("Checked: " + r.value);
            }
        })
    }


    //CHECKBOX
    let myChecks = document.querySelectorAll("[name='ncheck1'");
    console.log(myChecks);
    myChecks.forEach(c => {
        console.log(c.previousElementSibling.textContent);
        if (c.checked){
            console.log("Checked: " + c.value);
        }

        
    });
}