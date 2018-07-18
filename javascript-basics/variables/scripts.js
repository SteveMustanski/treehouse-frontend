let visitor = prompt('What is your name?');
let message = `Hello ${visitor}!  Glad that you came by to visit`;
document.write(message + '<br>');

// shouter
let stringToShout = prompt('What would you like to shout?');
alert(`${visitor} shouts: "${stringToShout.toUpperCase()}" !`);

// sorry madlib
let noun = prompt('Please enter a thing');
let name = prompt('Please enter a name');
let thing = prompt('Please enter another thing');
let thing2 = prompt('...and another thing');

document.write(`There once was a brave ${noun} named ${name} who wanted to turn a ${thing} into a ${thing2}.`);
