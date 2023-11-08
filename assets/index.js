'use strict';

const content = document.getElementById('content');
const error = document.getElementById('error-name');
const result = document.getElementById('result');
const counter = document.getElementById('counter');

const playAgain = document.getElementById("play-again");

const restart = document.getElementById("restart");

        // Add a click event listener to the button

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
    }
   // alert(1);
    //let i = 6;
    //num = i % 3
    ///content.innerHTML = num;
    counter.innerHTML = 'Round:' + count;
    let num = getRandomInt(1, 6);
    content.innerHTML = num;
    sum = sum + num;
    if (count == 1) {
        result.innerHTML = num
    } else if (count == 3) {
        result.innerHTML = 'Your total points is : ' + result.innerHTML+'+'+num + '=' + sum;
    } else {
        result.innerHTML = result.innerHTML+'+'+num ;
    }
    count ++;
    

});



function isNumber(str) {
    let input = str.trim();

    if (input.length > 0 && !isNaN(input)) {
        return true;
    }

    return false;
}



