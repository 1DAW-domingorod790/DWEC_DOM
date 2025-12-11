"use strict"

{

    /**
     * PROPIEDADES PARA REEMPLAZAR O CREAR TEXTOS PEQUEÑOS
     * textContent--> texto sin formato (sin html)
     * innerHTML: --> texto con formato HTML
     * outerHTML: --> todo con formato + etiqueta HTML
     * 
     */

    let myDiv1 = document.getElementById("idDiv1");
    console.log(myDiv1);
    myDiv1.style.setProperty("background-color", "red")
    myDiv1.textContent = "Contenido del DIV sin formato"; // añade texto sin formato
    myDiv1.textContent += " hola caracola"; // añade mas texto sin formato

    let myDiv2 = document.getElementsByClassName("cDiv2")[0];
    console.log(myDiv2);

   
    myDiv2.textContent = "Hola a <strong>todos</strong> y todas"; // el strong se ve como texto plano
    myDiv2.textContent =  "Hola a todos y todas"; // reemplaza todo el contenido del div2 por texto sin formato

    myDiv2.innerHTML = "Hola a <strong>todos</strong> y todas"; // el strong se ve como texto plano
    myDiv2.innerHTML += " <i>Bienvenidos</i>"; // añade mas contenido con formato HTML en cursiva

    console.log(myDiv2.outerHTML); // todo el div2 con etiquetas HTML

    /**
     * append --> añadir hijos (Node o textos) + no devuelve nada
     * appendChild --> añadir hijos (solo Node) + te devuelve el nodo insertado
     */

    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
    img.style.setProperty("width", "40px");
    img.alt ="logo JS";

    let i = document.body.appendChild(img);
    console.log(i); // el nodo insertado (img)

    const myDiv3 = document.createElement("div"); // Me invento miDiv3 para luego colocar miDiv4 alrededor de miDiv3 (más abajo)
    myDiv3.textContent = "Esto es mi Div3 insertado con javascript";
    myDiv3.setAttribute("id", "idDiv3");
    console.log(myDiv3);

    document.body.append(myDiv3); // añade myDiv3 al final del body

    /**
     *      insertAdjacent: 3 versiones:
     * insertAdjacentElement (insertPosition, HTMLElement) : para insertar un Element
     * insertAdjacentHTML(insertPosition, string) : para insertar código HTML (similar a innerHTML)
     * insertAdjacentText (inserPosition, string) : para insertar texto (similar a textContent)
     * 
     * llevan 2 parámetros:
     * parámetro1: posición donde va insertado el contenido.
     *  beforebegin: el contenido se inserta ANTES de la etiqueta HTML de apertura
     *  afterbegin: el contenido se inserta DENTRO de la etiqueta HTML, antes de su primer hijo
     *  beforeend: el contenido se inserta DENTRO de la etiqueta HTML, después de su último hijo (=appendChild())
     *  afterend: el contenido se inserta DESPUÉS de la etiqueta HTML de cierre
     * parámetro2: el contenido que se inserta
     */

    /**
     * <!-- beforebegin -->
     * <p1>
     *     <!-- afterbegin -->
     *     Texto del párrafo 1
     *     <!-- beforeend -->
     * </p1>
     * <!-- afterend -->
     */

    // p1.insertAdjacentText("beforebegin", p2); // inserta p2 antes de la etiqueta de apertura de p1
    // p1.insertAdjacentElement("afterend", p2); // inserta p2 después de la etiqueta de cierre de p1 

    let myDiv4 = document.createElement("div");
    myDiv4.setAttribute("id", "idDiv4");
    myDiv4.textContent = "Contenido del Div4";

    myDiv3.style.setProperty("background-color", "green");
    myDiv3.style.backgroundColor = "orange";
    myDiv3.setAttribute("style", "background-color: orange");

    // myDiv3.insertAdjacentElement("beforebegin", myDiv4);
    myDiv3.insertAdjacentElement("afterbegin", myDiv4);
    // myDiv3.insertAdjacentElement("beforeend", myDiv4);
    // myDiv3.insertAdjacentElement("afterend", myDiv4);
    

    myDiv3.insertAdjacentHTML("afterbegin", "<p>Hola after begin</p>");
    myDiv3.insertAdjacentText("afterend", "Hola2 After end");
}