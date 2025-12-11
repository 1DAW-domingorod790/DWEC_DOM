"use strict"
{
    /**
     * LISTA DE EVENTOS:
     *  onfocus: al obtener un foco. 
        onblur: al salir del foco de un elemento.
        onchange: al hacer un cambio en un elemento.
        onclick: al hacer un click en el elemento.
        ondblclick: al hacer doble click en un elemento.
        onkeydown: al pulsar una tecla (sin soltarla).
        onkeyup: al soltar una tecla pulsada.
        onkeypress: al pulsar una tecla.
        onload: al cargarse una página.
        onunload: al descargarse una página (salir de ella).
        onmousedown: al hacer clic de ratón (sin soltarlo).
        onmouseup: al soltar el botón del ratón previamente pulsado.
        onmouseover: al entrar encima de un elemento con el ratón.
        onmouseout: al salir de encima de un elemento con el ratón.
        onsubmit: al enviar los datos de un formulario.
        onreset: al resetear los datos de un formulario.
        onselect: al seleccionar un texto.
        onresize: al modificar el tamaño de la página del navegador. 
     */

    let myBtn5 = document.querySelector("#idButton5");
    myBtn5.addEventListener("click", function (evento) {
        // console.log(evento);
    });
 
    myBtn5.addEventListener("click", (evento) => {
        // console.log(evento.button); // 0: left button
        // console.log(evento.x + " - " + evento.y);
        // console.log(evento.clientX + " - " + evento.clientY);
        // console.log(evento.offsetX + " - " + evento.offsetY);

    });

    let p1 = document.querySelector("#idP1");
    let p2 = document.querySelector("#idP2");

    myBtn5.addEventListener("mousemove", (evento) =>{
        // console.log(evento.x + " - " + evento.y);
        // console.log(evento.clientX + " - " + evento.clientY);
        // console.log(evento.offsetX + " - " + evento.offsetY);
        
        // p1.innerHTML = "X = " + evento.x + "; Y = " + evento.y;
        // p1.innerHTML += "<br>X = " + evento.offsetX + "; Y = " + evento.offsetY;
        
    });

    // https://devdocs.io/dom/mouseevent 

    document.addEventListener ("mousemove", (evento) => {
        p2.innerHTML = "X = " + evento.x + "; Y = " + evento.y;
        p2.innerHTML += "<br>X = " + evento.screenX + "; Y = " + evento.screenY; //Coordenadas absolutas, sin importar el zoom
    });

    function showMessage (evento) {
        console.log("----------------------------");
        console.log(`The event type is ${evento.type}`)
        if (evento.type === "keyup"){
            console.log("Key code: " + evento.code);
            console.log("Key pressed: " + evento.key);
        } else if (evento.type == "click") {
            console.log(evento.detail);
            console.log("Estaba pulsada la tecla CTRL?" + evento.ctrlKey);
            console.log("Estaba pulsada la tecla ALT?" + evento.altKey);
            console.log(evento.target);
            console.log(evento.target.id);
            console.log(evento.target.textContent);

        }else if (evento.type == "dblclick"){
            console.log("Doble click");
        }else if (evento.type == "contextmenu"){
            console.log("contextmenu");
            evento.preventDefault();
        }
    }

    myBtn5.addEventListener("keyup", showMessage);
    myBtn5.addEventListener("click", showMessage);
    myBtn5.addEventListener("dblclick", showMessage);
    myBtn5.addEventListener("contextmenu", showMessage);


    let myBtn6 = document.createElement("button");
    myBtn6.textContent = "Greet 6";
    document.body.appendChild(myBtn6);
    myBtn6.addEventListener("dblclick", function (evento) {
        console.clear();
        this.textContent = "Button 6";
        // evento.target.textContent = "Button 6";
        this.setAttribute("id", "idBtn6");
        console.log(this);
    });


    let myBtn7 = document.createElement("button");
    myBtn7.textContent="Greet 7";
    document.body.appendChild(myBtn7);
    myBtn7.addEventListener("click", function(evento){
        alert("Click en btn7");
    },{once:true}); //el evento solo se captura una vez

    let myBtn8 = document.createElement("button");
    myBtn8.textContent = "Greet 8";
    document.body.append(myBtn8);
    myBtn8.addEventListener ("click", (evento) => {
        console.log("Click 1 en btn8");
    });
    myBtn8.addEventListener ("click", (evento) => {
        console.log("Click 2 en btn8");
    });
    myBtn8.addEventListener ("click", (evento) => {
        console.log("Click 3 en btn8");
    }, {capture: true}); //se ejecuta el primero.


    /**
    * elemento.addEventListener ("eventoQueCapturo", function(), {capture: true, once: true, passive: true})
    */

    function f (evento) {
        // evento.preventDefault(); // no debería dejar por el passive: true
        console.log("scroll");
    }

    window.addEventListener("scroll", f, {passive: true}); // no deja hacer preventDefault (la ejecucion de la f son mucho más rápidas)
}