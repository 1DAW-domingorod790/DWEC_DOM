"use strict"
{
    let c = document.createComment("This is our connect");
    c.isConnected?console.log("Is connected"):console.log("Is not connected");
    document.body.append(c);

    let t = document.createTextNode("my text has been created");
    document.body.append(t);

    let t2 = t.cloneNode(true);
    t2.textContent = "my text 2 has been created";
    document.body.append(document.createElement("br"));
    document.body.append(t2);

    let newDiv = document.createElement("div"); //HTMLElement
    newDiv.textContent = "Hola";

    let newDiv2 = newDiv;
    newDiv2.textContent = "adiós";
    console.log(newDiv);
    console.log(newDiv2);

    let newImg = document.createElement("img");
    let newH1 = document.createElement("h1");
    let newH2 = document.createElement("h2");
    let newTextH2 = document.createTextNode("H2 text");
    newH2.append(newTextH2);
    document.body.append(newH2);
    newH2.textContent = "New H2 text";
    let br = document.createElement("br");
    newH2.append(br);
    newH2.append(document.createTextNode("General o Coronel"));

    newH2.appendChild(newImg);


}