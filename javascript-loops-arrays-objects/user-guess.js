// generate a random number
let upper = 10;
let targetNumber = getRandomNumber(upper)
let guess;
let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}


// have the user guess until the number is correct

do {
  guess = prompt(`Guess number between 1 and 10`);
  attempts += 1;
} while (parseInt(guess) !== targetNumber);

// print out the results
document.write(`The random number was: ${targetNumber}`);
document.write("<br>")
document.write(`It took ${attempts} to guess the number`);

