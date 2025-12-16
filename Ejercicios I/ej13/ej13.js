"use strict"
{
    let formulario = document.querySelector("#idForm");
    let select1 = document.querySelector("#idSelect1");
    let select2 = document.querySelector("#idSelect2");

    select1.addEventListener("change", () => {
        let opt1;
        let opt2;
        let opt3;
        let optDefault;
        switch (select1.value){
            case 'alicante': 
                select2.innerHTML = "";
                optDefault = document.createElement("option");
                optDefault.textContent = "Select no seleccionado";
                optDefault.value = "nada";
                optDefault.selected = true;

                opt1 = document.createElement("option");
                opt1.textContent = 'Alicante capital';
                opt1.value = 'Alicante capital';

                opt2 = document.createElement("option");
                opt2.textContent = 'Elche';
                opt2.value = 'Elche';

                opt3 = document.createElement("option");
                opt3.textContent = 'Orihuela';
                opt3.value = 'Orihuela';

                select2.appendChild(optDefault);
                select2.appendChild(opt1);
                select2.appendChild(opt2);
                select2.appendChild(opt3);
                break;
            
            case 'castellon': 
                select2.innerHTML = "";
                optDefault = document.createElement("option");
                optDefault.textContent = "Select no seleccionado";
                optDefault.value = "nada";
                optDefault.selected = true;

                opt1 = document.createElement("option");
                opt1.textContent = 'Castellón capital';
                opt1.value = 'Castellon capital';

                opt2 = document.createElement("option");
                opt2.textContent = 'Oropesa';
                opt2.value = 'Oropesa';

                opt3 = document.createElement("option");
                opt3.textContent = 'Vinaroz';
                opt3.value = 'Vinaroz';

                select2.appendChild(optDefault);
                select2.appendChild(opt1);
                select2.appendChild(opt2);
                select2.appendChild(opt3);
                break;
            
            case 'valencia':
                select2.innerHTML = "";
                opt1 = document.createElement("option");
                opt1.textContent = 'Valencia capital';
                opt1.value = 'Valencia capital';

                opt2 = document.createElement("option");
                opt2.textContent = 'Torrent';
                opt2.value = 'Torrent';

                opt3 = document.createElement("option");
                opt3.textContent = 'Mislata';
                opt3.value = 'Mislata';
                opt3.selected = true;
                
                select2.appendChild(opt1);
                select2.appendChild(opt2);
                select2.appendChild(opt3);
                break;    
        }
    })
}