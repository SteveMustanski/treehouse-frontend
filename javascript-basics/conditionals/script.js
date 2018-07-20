/*
  This is a random number guessing Game.
  The user guesses a number between 1 and 6
  if they are not correct, they get a hint to try
  one more time
 */

//  set up variables
let randomNumber = Math.floor(Math.random() * 6) + 1;
let isCorrect = false;

// prompt for guess
let guess = prompt('I am thinking of a number between 1 and 6.  What is it?');

// test guess and if it isn't correct, give a hint and try again
if (parseInt(guess) === randomNumber) {
  isCorrect = true;
} else if (parseInt(guess) < randomNumber) {
  let guessMore = prompt('You need to guess a higher number.');
  if (parseInt(guessMore) === randomNumber) {
    isCorrect = true;
  }
} else if (parseInt(guess) > randomNumber) {
  let guessLess = prompt('You need to guess a lower number.');
  if (parseInt(guessLess) === randomNumber) {
    isCorrect = true;
  }
}

// display final results

if (isCorrect) {
  document.write('<p>You guessed correctly!</p>');
}  else {
  document.write(`<p>Sorry, the correct number was ${randomNumber}</p>`);
}




