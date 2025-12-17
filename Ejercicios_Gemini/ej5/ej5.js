"use strict"
{
    let form = document.createElement("form");

    let inputSegs = document.createElement("input");
    inputSegs.type = "number";
    inputSegs.placeholder = "seg(s)";
    inputSegs.min = 1;

    let br = document.createElement("br");
    
    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Inicio";

    let deleteButton = document.createElement("input");
    deleteButton.type = "submit";
    deleteButton.value = "Eliminar";

    form.appendChild(inputSegs);
    form.appendChild(br);
    form.appendChild(submitButton);
    form.appendChild(deleteButton);
    document.body.appendChild(form);

    let intervalo;
    let segs = 0;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        segs += parseInt(inputSegs.value);
        if (!isNaN(segs)){
            clearInterval(intervalo);
            let p = document.createElement("p");
            if (e.submitter === submitButton){
                intervalo = setInterval(() => {
                    console.log(segs);
                    let existe = document.querySelector("#idCuentaAtras");
                    if (existe) {
                        existe.textContent = segs;
                    }else{
                        p.textContent = segs;
                        p.id = "idCuentaAtras";
                        form.insertAdjacentElement("afterend", p);
                    }
            
                    segs--;
                    if (segs < 0){
                        clearInterval(intervalo);
                        document.body.style.backgroundColor = "grey";
                        segs = 0;
                    }
                }, 1000);
            }else{
                p.remove();
                clearInterval(intervalo);
            }
        }
    });


}