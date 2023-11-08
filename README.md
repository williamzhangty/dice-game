## DICE GAME

The application of a Dice Game can be used as a decision-making tool. For example, 
when one team member needs to be selected to make a presentation on behalf of the team, 
but no one is willing to do it, the person who gets the fewest points in the Dice Game 
is designated as the presenter.

### How to play

The followings are steps to play:

1. Click the [Demo Link](https://williamzhangty.github.io/dice-game/).
2. Click the 'Toss' button three times to get the total points.
3. Click the 'Restart' button to restart a new game.

### Function explanation

function getRandomInt(min, max) { ... }: This is a function that generates a random integer between the specified minimum and maximum values (inclusive).

playAgain.addEventListener("click", function() { ... });: this code adds an event. Everytime the 'playAgain' button is clicked, a random number between 1 and 6 is gen
erated. And then the background of the 'content1' is replaced with a related dice picuture. The sum of the three random numbers will be shown as the final points, the 'restart' button will also be shown and the 'playAgain' button will be hidden when the 'palyAgain' button is clicked three times.

```javascript
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
        result.innerHTML = 'Your total points are : ' + result.innerHTML+'+'+num + '=' + sum;
    } else {
        result.innerHTML = result.innerHTML+'+'+num ;
    }
    count ++;
    
});
```

If you want to try, click [Demo](https://williamzhangty.github.io/dice-game/)


