"use strict"
{
    /**
     * getElementsByTagName
     * getElementsByClassName
     * getElementsByName
     * getElementsById
     * querySelector
     * querySelectorAll
     */

    let listaA = document.getElementsByTagName("a");
    console.log(listaA);

    for (let a of listaA) {
        console.log(a);
        console.log(a.href);
        console.log(a.textContent);
    }

    let listaUls = document.getElementsByClassName("cListaVehiculos");
    for (let ul of listaUls) {
        console.log(ul);
        console.log(ul.textContent);
    }

    listaUls = document.getElementsByName("nLista"); //nodeList
    listaUls.forEach(element => {
        console.log(element);
    });

    let myCar = document.querySelector("#idCoche");
    console.log(myCar);

    let myCharacters = document.querySelector(".cListaPersonaje");
    console.log(myCharacters);

    listaUls = document.querySelectorAll("nLista");
    console.log(listaUls);
}