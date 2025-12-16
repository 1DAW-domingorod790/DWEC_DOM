"use strict"
{
    document.body.style.height = "100dvh";
    document.body.addEventListener("dblclick", () => {
        document.body.style.backgroundColor = "rgb(" + getRandomNumber(0, 255)+","+ getRandomNumber(0, 255)+","+ getRandomNumber(0, 255)+")";
    });

    function getRandomNumber(min, max) {
        return Math.round(Math.random()*(max-min)+min);
    }
}