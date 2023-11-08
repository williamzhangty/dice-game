'use strict';

const input = document.getElementById('input');
const error = document.getElementById('error-name');
const result = document.getElementById('result');
const counter = document.getElementById('counter');

const playAgain = document.getElementById("play-again");

const restart = document.getElementById("restart");

        // Add a click event listener to the button
playAgain.addEventListener("click", function() {
    // Reload the page when the button is clicked
    location.reload();
});

restart.addEventListener("click", function() {
    // Reload the page when the button is clicked
    location.reload();
});

function isNumber(str) {
    let input = str.trim();

    if (input.length > 0 && !isNaN(input)) {
        return true;
    }

    return false;
}

let count = 1;
let num = Math.floor(Math.random() * 100);

let delayTimer;

input.addEventListener('keyup', function() {
    clearTimeout(delayTimer); // Clear any previous timers

    delayTimer = setTimeout(function() {
        let a = input.value;
        

        counter.innerHTML = 'Guesses:' + count;

        if (isNumber(a)) {
            error.innerHTML = '';
            if (a > num) {
                //alert(num);
                result.innerHTML = 'My number is bigger.';
            } else if (a < num){
                //alert(num);

                result.innerHTML = 'My number is smaller.';
            } else {
                result.innerHTML = 'I win.';
                restart.style.display = 'block';
            }
            count++;
        } else {
            error.innerHTML = 'Please input a valid number';
            result.innerHTML = '';
        }
        
    }, 1000); // 1000 milliseconds (1 seconds)
});
