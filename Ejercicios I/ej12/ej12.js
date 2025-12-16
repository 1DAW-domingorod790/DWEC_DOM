"use strict"
{
    let formulario = document.querySelector("#idForm");
    let texto1 = document.querySelector("#idText1");
    let texto2 = document.querySelector("#idText2");

    function esAnagrama (cad1, cad2) {
        cad1 = cad1.toLowerCase();
        cad2 = cad2.toLowerCase();

        return cad1.split("").sort.join("") === cad2.split("").sort.join("");
    }

    function mostrarMensaje (mensaje, elemento) {
        let p = document.createElement("p");
        p.textContent = mensaje;

        elemento.insertAdjacentElement("afterend", p);

        setTimeout(function(){
            p.remove();
        }, 3000);
    }

    formulario.addEventListener("submit", (e) => {
        if (!esAnagrama(texto1.ariaValueMax, texto2.value)){
            e.preventDefault();
            mostrarMensaje("No son anagramas.", formulario);
        }else{
            mostrarMensaje("Son anagramas");
        }
    });
}