let randomNumber = Math.floor(Math.random() * 6) + 1;

let guess = prompt('I am thinking of a number between 1 and 6.  What is it?');

if (parseInt(guess) === randomNumber) {
  document.write('<p>You guessed correctly!</p>');
} else {
  document.write(`<p>Sorry, the correct number was ${randomNumber}</p>`);
}