"use strict"
{

const listaCiudades = [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Sevilla",
    "Zaragoza",
    "Málaga",
    "Murcia",
    "Palma de Mallorca",
    "Las Palmas de Gran Canaria",
    "Bilbao",
    "Alicante",
    "Córdoba",
    "Valladolid",
    "Vigo",
    "Gijón",
    "A Coruña",
    "Granada",
    "Elche",
    "Oviedo",
    "Pamplona"
];

let input = document.createElement("input");
input.type = "text";

document.body.appendChild(input);

let ul = document.createElement("ul");

listaCiudades.forEach(ciudad => {
    let opt = document.createElement("li");
    opt.textContent = ciudad;
    opt.id = `id${ciudad}`;
    ul.appendChild(opt);
});

input.addEventListener("keyup", (e) => {
    let opts = document.getElementsByTagName("li");
    for (let ciudad of opts) {
        if (ciudad.textContent.substring(0, input.value.length).toLowerCase() !== (input.value.toLowerCase())){
            ciudad.style.display = "none";
        }else{
            ciudad.removeAttribute("style");
        }
    }
});

document.body.appendChild(ul);

}