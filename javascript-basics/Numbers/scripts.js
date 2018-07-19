let secondsPerMinute = 60;
let minutesPerHour = 60;
let hoursPerDay = 24;
let daysPerWeek = 7;
let weeksPerYear = 52;

let secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;

let yearsAlive = 50;

let secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;

document.write(`There are ${secondsPerDay} seconds in a day` + "<br>");
document.write(`I have been alive for more than ${secondsAlive} seconds`)

