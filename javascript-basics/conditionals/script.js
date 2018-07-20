var randomNumber = Math.floor(Math.random() * 6) + 1;
var isCorrect = false;

let guess = prompt('I am thinking of a number between 1 and 6.  What is it?');

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


if (isCorrect) {
  document.write('<p>You guessed correctly!</p>');
}  else {
  document.write(`<p>Sorry, the correct number was ${randomNumber}</p>`);
}




