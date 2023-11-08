'use strict';

const input = document.getElementById('input');
const error = document.getElementById('error-name');
const result = document.getElementById('result');

function isNumber(str) {
    let input = str.trim();

    if (input.length > 0 && !isNaN(input)) {
        return true;
    }

    return false;
}

let count = 0;

input.addEventListener('keyup', function(){

    let a = input.value;
    let num = Math.floor(Math.random() * 10);

    if (isNumber(a)) {
        error.innerHTML = '';
        if (a > num) {
            //alert(num);
            result.innerHTML = 'My number is bigger.';
        } else {
            //alert(num);

            result.innerHTML = 'My number is smaller.';
        }
     
        count = 0;
    } else {
        //alert(a);
        error.innerHTML = 'Please input an invalid number';
        
    }
    count++;
//console.log(isNumber(a), isNumber(b));
});