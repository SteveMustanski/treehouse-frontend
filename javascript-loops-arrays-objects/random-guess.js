// generate a random number from 1 to 10,000

let upper = 10000;
let targetNumber = getRandomNumber(upper)
let guess;
let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

// have the computer guess the random number in a while loop

while (guess !== targetNumber) {
  attempts += 1;
  guess = getRandomNumber(upper);
}


// print the number and the number of times it took to guess the number
document.write(`The random number was: ${targetNumber}`);
document.write("<br>")
document.write(`It took ${attempts} to guess the numbrer`);
