'use strict';

const content = document.getElementById('content');
const content1 = document.getElementById('content1');
const result = document.getElementById('result');
const counter = document.getElementById('counter');
const playAgain = document.getElementById("play-again");
const restart = document.getElementById("restart");

let count = 1;
let sum = 0;

restart.addEventListener("click", function() {
    // Reload the page when the button is clicked
    location.reload();
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

playAgain.addEventListener("click", function() {
    if (count >= 3) {
        playAgain.setAttribute("disabled", "true");
        playAgain.style.backgroundColor = '#d8d8d8';
        restart.style.display = 'block';
        playAgain.style.display = 'none';
    }
   
    counter.innerHTML = 'Round:' + count;
    let num = getRandomInt(1, 6);

    //show different dice pic according to the random number
    content1.style.background = `rgb(0 0 0 / 0.1) url('./assets/img/${num}.png') no-repeat center`;

    sum = sum + num;
    if (count == 1) {
        result.innerHTML = num
    } else if (count == 3) {
        result.innerHTML = 'Your total points are' + '<br>' + result.innerHTML+'+'+num + '=' + sum;
    } else {
        result.innerHTML = result.innerHTML+'+'+num ;
    }
    count ++;
    
});


