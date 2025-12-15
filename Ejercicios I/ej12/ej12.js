"use strict"
{
    let formulario = document.querySelector("#idForm");
    let texto1 = document.querySelector("#idText1");
    let texto2 = document.querySelector("#idText2");

    formulario.addEventListener("submit", (e) => {
        // console.log(texto1.value);
        // console.log(texto2.value);
        if (texto1.value.replace(" ", "").toLowerCase() !== texto2.value.replace(" ", "").toLowerCase()){
            e.preventDefault();
        }
    });
}