"use strict"
{
    let colores = {
        0: '#E6E6FA',  // Lavender
        1: '#F0FFF0',  // Honeydew
        2: '#FFE4E1',  // MistyRose
        3: '#F0FFFF',  // Azure
        4: '#D8BFD8',  // Thistle
        5: '#B0C4DE',  // LightSteelBlue
        6: '#FFDAB9',  // PeachPuff
        7: '#B0E0E6',  // PowderBlue
        8: '#FAFAD2',  // LightGoldenRodYellow
        9: '#DCDCDC'   // Gainsboro
    };

    document.body.addEventListener("dblclick", () => {
        document.body.style.color === "black"?'':document.body.style.color = "black";
        document.body.style.background = colores[getRandomNumber(0, 10)];
    });

    function getRandomNumber(min, max) {
        return Math.floor(Math.random()*(max-min)+min);
    }
    
}