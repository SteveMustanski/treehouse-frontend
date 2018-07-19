
let userNumber = parseInt(prompt('Please enter a whole number'));

let randomNumber = Math.floor(Math.random() * userNumber) + 1;

alert(`Your random number between 1 and ${userNumber} is: ${randomNumber}.`);