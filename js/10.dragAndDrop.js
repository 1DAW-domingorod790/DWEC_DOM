"use strict"
{

    let cajaRoja = document.querySelector (".cajaRoja"); 
    let cajaAzul = document.querySelector (".cajaAzul"); 
    //cajaRoja.draggable=true; //hacemos el elemento arrastrable 
    let contenedor = document.querySelector (".contenedor");

    const finalMessage = document.getElementById("finalMessage");

    /* Lo que arrastro: 

        dragstart: Se activa al comenzar a arrastrar el elemento
        drag: Se activa mientras se está arrastrando el elemento
        dragend: Se activa al soltar el elemento arrastrado

    */

    cajaRoja.addEventListener ("dragstart", (e) => {
        //console.log ("dragstart");
        draggedBox = 1;
    });

    cajaRoja.addEventListener ("drag", (e) => {
        //console.log ("drag");
        draggedBox = e.target;
    });

    cajaRoja.addEventListener ("dragend", (e) => {
        //console.log ("dragend");
    });

    cajaAzul.addEventListener ("dragstart", (e) => {
        //console.log ("dragstart");
        draggedBox = 2;
    });

    cajaAzul.addEventListener ("drag", (e) => {
        //console.log ("drag");
        draggedBox = e.target;
    });

    cajaAzul.addEventListener ("dragend", (e) => {
        //console.log ("dragend");
    });



    let draggedBox = 0;
    /**
     * Para el contenedor: 
     * dragenter: Se activa cuando el elemento arrastrado entra en el área del contenedor
     * dragover: Se activa mientras el elemento arrastrado está sobre el área del contenedor
     * dragleave: Se activa cuando el elemento arrastrado sale del área del contenedor
     * drop: Se activa cuando se suelta el elemento arrastrado dentro del área del contenedor
     */

    contenedor.addEventListener ("dragenter", (e) => {
        console.log ("dragenter");
    });

    contenedor.addEventListener ("dragover", (e) => {
        e.preventDefault(); //necesario para que funcione el drop
        console.log ("dragover");
    });

    contenedor.addEventListener ("dragleave", (e) => {
        console.log ("dragleave");
    });             

    contenedor.addEventListener ("drop", (e) => {
        console.log ("drop");
        contenedor.insertAdjacentElement ("afterbegin", draggedBox); //movemos el elemento arrastrado al contenedor
        

        /**
         * appendChuld: Añade el elemento al final del contenedor
         * insertAdjacentElement: Permite especificar la posición donde se añade el elemento
         *      beforebegin: Antes del contenedor
         *      afterbegin: Al principio del contenedor
         *      beforeend: Al final del contenedor
         *      afterend: Después del contenedor
        */
        
    });
    
    document.body.addEventListener ("dragover", (e) => {
        e.preventDefault(); //necesario para que funcione el drop 
    });

    document.body.addEventListener ("drop", (e) => {
        console.log ("drop body");
        if(e.target === document.body){
            document.body.insertAdjacentElement ("afterbegin", draggedBox); //movemos el elemento arrastrado al body
        }
    });
}