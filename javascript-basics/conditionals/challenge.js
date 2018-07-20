let answer1 = prompt('Who is a good puppy?');
let answer2 = prompt('How many days in a week?');
let answer3 = prompt('What is 2 times 3?');
let answer4 = prompt('Mary Ann or Ginger?');
let answer5 = prompt('Is pineapple ok on a pizza (y/n)?');

let numCorrect = 0;

let crown = '';

// evaluate answers
if (answer1.toLowerCase() === 'pepper') {
  numCorrect += 1;
}

if (parseInt(answer2) === 7) {
  numCorrect += 1;
}

if (parseInt(answer3) === 6) {
  numCorrect += 1;
}

// Mary Ann, duh
if (answer4.toLowerCase() === 'mary ann') {
  numCorrect += 1;
}

if (answer5.toLowerCase() === 'n') {
  numCorrect += 1;
}

// check for crown level
if (numCorrect === 5) {
  crown = 'gold';
} else if (numCorrect < 3) {
  crown = 'bronze';
} else {
  crown = 'silver';
}

alert(`You got ${numCorrect} questions correct and recieve the ${crown} crown!`);