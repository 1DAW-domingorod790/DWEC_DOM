"use strict"
{
    function getRandomNumber (min, max){
        return Math.round(Math.random()*(max-min)+min);
    }

    // EXERCISE 1: Using prompt, ask a number N to an user and create 
    // in DOM N paragraphs with a random number between 0 and 10 each one.

    function createNparagraphs () {
        let n = parseInt(prompt("How many paragraphs do you want to create?"));

        for (let i = 0; i < n; i++){
            let myP = document.createElement("p");
            myP.textContent = getRandomNumber(0, 10);
            document.body.append(myP);
        }
    }

    // createNparagraphs();

    //EXERCISE 2: Using prompt, ask a number N to an user and create in 
    // DOM N H2 elements writing inside a paragraph your name in bold 
    // and italic + a random number between 1 and 10.

    function createNh2 () {
        let n = parseInt(prompt("How many h2 do you want to create?"));
        for (let i = 0; i < n; i++){
            let myH2 = document.createElement("h2");
            myH2.innerHTML = "<b><i>Domingo Rodríguez </i></b>" + getRandomNumber(1, 10);
            document.body.appendChild(myH2);
        }
    }

    // createNh2();

    // EXERCISE 3: Using prompt, ask a number N to an user 
    // and create in DOM an unordered list with N random numbers 
    // between 1 and 15 for each element in bold.

    function createNunordenedList () {
        let n = parseInt(prompt("How many elements do you want in the unordened list?"));
        let myUL = document.createElement("ul");
        for (let i = 0; i < n; i++){
            let myLI = document.createElement("li");
            myLI.innerHTML = "<b>" + getRandomNumber(1, 15) + "</b>";
            myUL.appendChild(myLI);
        }
        document.body.appendChild(myUL);
    }

    // createNunordenedList();
}

