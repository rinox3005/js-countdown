'use strict';

// prendo gli elementi che mi servono dalla pagina html
const number = document.getElementById('number');
const startCountdown = document.getElementById('startcountdown');
const resetCountdown = document.getElementById('resetcountdown');

// inizializzo le variabili
const start = 10;
let counter = start;
let myCountdown;
let countdownStarted = false;

// mi metto in ascolto degli eventi sulla pagina

startCountdown.addEventListener('click', function () {
    if (countdownStarted == false) {
        myCountdown = setInterval(countdown, 1000);
    }
    countdownStarted = true;
})

resetCountdown.addEventListener('click', function () {
    resetCount();
})


// funzione countdown

function countdown() {
    if (counter > 1) {
        counter--;
        number.innerText = counter;
    } else if (counter === 1) {
        number.innerText = 'Buon Anno!';
    }
}

// funzione reset

function resetCount() {
    number.innerText = counter = start;
    countdownStarted = false;
    clearInterval(myCountdown);
}