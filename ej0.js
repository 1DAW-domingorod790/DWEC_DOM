"use strict"
{
        //ejercicio de clase
    // H1
    //     H4
    //         Div 
    //             P => paragraph 1 
    //             P => paragraph 2
    //             Img => insert a real picture
    //         /Div 
    //     /h5 
    // /h1

    let ejH1 = document.createElement("h1");
    ejH1.textContent = "H1";
    let ejH4 = document.createElement("h4");
    ejH4.textContent = "H4";
    let ejDiv = document.createElement("div");
    ejDiv.textContent = "div";
    ejDiv.setAttribute("style", "background-color: cyan");
    let ejP1 = document.createElement("p");
    ejP1.textContent = "parrafo1";
    let ejP2 = document.createElement("p");
    ejP2.textContent = "parrafo2";
    let ejImg = document.createElement("img");
    ejImg.setAttribute("src", "https://repararordenadores.com/wp-content/uploads/2023/07/virtualbox-maquina-virtual.webp")
    ejImg.setAttribute("width", "350px");
    ejImg.setAttribute("height", "200px");


    ejDiv.appendChild(ejP1);
    ejDiv.appendChild(ejP2);
    ejDiv.appendChild(ejImg);
    ejH4.appendChild(ejDiv);
    ejH1.appendChild(ejH4);

    document.body.append(ejH1);
}