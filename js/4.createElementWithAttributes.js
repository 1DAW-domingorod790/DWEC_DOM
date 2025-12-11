"use strict"

{

    let newDiv = document.createElement("div"); // crea un elemento HTML
    newDiv.id = "id1";
    newDiv.style = "color: red";
    newDiv.className = "cDiv1";
    newDiv.clssname = "cDiv2"; // sobreescribe la clase anterior
    newDiv.classList.add("cDiv3"); // añade una clase mas
    console.log(newDiv);
    document.body.append(newDiv);

    let newP = document.createElement("p");

    // Atributos de un elemento HTML
    /**
     * setAttribute (String attr, valor) : añade o cambiar el valor del atributo
     * boolean hasAttribute (String attr) : Indica si el Element tiene el atributo sttr
     * boolean hasAttributes () : indica si el Element tiene atributos HTML o no
     * Array getAttributeNames () : devuelve un array de String con los atributos del Element
     * String getAttribute (String attr)
     * removeAttribute (String attr)
     * 
     * Node getAttributeNode (String attr) : igual que getAttribute pero devuelve el Node
     * Node removeAttributeNode (String attr) : igual que removeAttribute pero devuelve el Node borrado
     * Node setAttributeNode (String attr, valor) : igual que setAttribute pero devuelve el Node al que le acabas de insertar el atributo
     * 
     */

    newP.setAttribute("id", "p1");
    newP.setAttribute("style", "color: yellow");
    newP.setAttribute("class", "cP1 cP2");
    console.log(newP);
    console.log(newP.getAttributeNames());
    console.log(newP.hasAttribute("class")); // true
    console.log(newP.hasAttribute("juan")); // false
    newP.setAttribute("style", "color:orange");
    console.log(newP.getAttributeNames());
    newP.removeAttribute("class");
    console.log(newP.getAttributeNames());

    let attr1 = newP.getAttribute("style"); // devuelve el valor del atributo
    let attr2 = newP.getAttributeNode("style"); // devuelve el nodo del atributo
    console.log(attr1);
    console.log(attr2);


    newP.appendChild(document.createTextNode("Hola soy un párrafo dentro de un div")); // añade texto al p
    newDiv.appendChild(newP); // añade el p al div

    console.log(newP.isConnected); // true
    console.log(newDiv.isConnected); // true

    
    let myA = document.querySelector(".enlace");
    console.log(myA.getAttribute("data-id"));
    myA.setAttribute("data-description", "DOM");


    //STYLE

    console.log(myA.style);
    console.log(myA.style.color);
    console.log(myA.style.backgroundColor);
    console.log(window.getComputedStyle(myA));

    myA.style.backgroundColor = "lightgreen";
    myA.style.setProperty("background-color", "blue");

    // MODIFICAR
    myA.style.textDecoration = "line-through";
    myA.style.setProperty("text-decoration", "none");


    // DATASET
    console.log("-----------------DATASET-------------------");
    console.log(myA.dataset);
    console.log(myA.dataset.id);
    console.log(myA.dataset.description);
    console.log(myA.dataset);

    console.log();



    let myH3 = document.querySelector(".cHache3");
    console.log(myH3);
    myH3.classList.add("cUno");
    myH3.classList.add("cDos");
    console.log(myH3.classList);
    myH3.classList.remove("cUno");
    console.log(myH3.classList);
    myH3.classList.toggle("cInfo"); // lo añade porque no la tiene
    console.log(myH3.classList);
    myH3.classList.toggle("cInfo"); // la quita porque ya la tiene
    console.log(myH3.classList);
    console.log(myH3.classList.item(2)); // devuelve el nombre de la clase en la posición 0
    console.log(myH3.classList.contains("cDos")); // true
    console.log(myH3.classList.contains("cNoExiste")); // false
    myH3.classList.add("cUno");
    console.log(myH3.classList);
    myH3.classList.replace("cDos", "cTres");
    console.log(myH3.classList);


}