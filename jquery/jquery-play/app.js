
var numToEqual = Math.floor(Math.random() * 100) + 1;

var blueVal = 4;
var redVal = 8;
var greenVal = 1;
var yellowVal = 3;
var userTot = 0;

writeComputerTotal();

$("#blue").on('click', () => {
  writeUserTotal(blueVal);
});

$("#red").on('click', () => {
  writeUserTotal(redVal);
});

$("#green").on('click', () => {
  writeUserTotal(greenVal);
});

$("#yellow").on('click', () => {
  writeUserTotal(yellowVal);
});

function writeComputerTotal() {
  $("#computerNum").text(`Target Number: ${numToEqual}`);
}

function writeUserTotal(num) {
  userTot += num;
  $("#userNum").text(`Your total: ${userTot}`);
}

