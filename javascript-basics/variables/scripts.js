let visitor = prompt('What is your name?');
let message = `Hello ${visitor}!  Glad that you came by to visit`;
document.write(message);

let stringToShout = prompt('What would you like to shout?');
alert(`${visitor} shouts: "${stringToShout.toUpperCase()}" !`);