"use strict"
{
    /**
     * LOS NODOS REALMENTE NO SE ELIMINAN, SINO QUE SE DESCONECTAN DEL DOM
     * A partir de la página 20.
     * remove ()
     * removeChild (nodoHijo)
     * replaceChild(nodoNuevo,nodoAntiguo)
     */
   

    /**
     * PARA NAVEGAR POR ELEMENTOS
     * children : devuelve un array de HTMLCollection con los elementos hijo del elemento en cuestión
     * parentElement : devuelve el elemento padre o null si no tiene 
     * firstElementChild = children[0] = primer hijo
     * lastElementChild = children[ultimo]  = children[children.length-1] = último hijo
     * previousElementSibling : devuelve el elemento hermano previo (null si no tiene)
     * nextElementSibling : devuelve el siguiente elemento hermano (null si no tiene)
     */

    console.log(document.body.children);
    
    for (let element of document.body.children){
        console.log(element);
    }

    console.log(document.body.parentElement);

    let listaAviones = document.querySelector("#idAviones");
    let padreAviones = listaAviones.parentElement;
    console.log(padreAviones);

    console.log(document.body.firstElementChild);
    console.log(document.body.firstElementChild.textContent);
    console.log(document.body.firstElementChild.firstChild);


    console.log(document.body.children[0]);
    console.log(document.body.lastElementChild);

    console.log(document.body.previousElementSibling);

    /**
     * PARA NAVEGAR POR LOS NODOS
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentElement : devuelve el nodo padre o null si no tiene 
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */

    console.log(document.body.childNodes.length);
    document.body.childNodes.forEach(element => {
        console.log(element);
    });

    console.log(document.body.parentNode);
    let ciclomotores = document.querySelector("#idCiclomotores");
    console.log(ciclomotores.parentNode);

    console.log(document.body.lastChild);
    console.log(document.body.childNodes[document.body.childNodes.length-1]);

    console.log(document.body.childNodes[7].firstChild);

    // Ejercicio propuesto en clase => coger "hermano anterior"
    let app = document.querySelector("#idApp");
    let p = app.querySelector("p");
    console.log(p.previousSibling);
    // coger "hermano posterior"
    console.log(p.nextSibling);
    // coger "párrafo que tiene hermanos"
    console.log(p.firstChild);

    

}