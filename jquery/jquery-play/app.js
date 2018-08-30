

let numToEqual = 0;
let blueVal = 4;
let redVal = 8;
let greenVal = 1;
let yellowVal = 3;
let userTot = 0;
let losses = 0;
let wins = 0;


writeComputerTotal();
writeUserTotal(userTot);

$("#blue").on('click', () => {
  writeUserTotal(blueVal);
  checkResults();
});

$("#red").on('click', () => {
  writeUserTotal(redVal);
  checkResults();
});

$("#green").on('click', () => {
  writeUserTotal(greenVal);
  checkResults();
});

$("#yellow").on('click', () => {
  writeUserTotal(yellowVal);
  checkResults();
});

function writeComputerTotal() {
  numToEqual = Math.floor(Math.random() * 100) + 1;
  $("#computerNum").text(`Target Number: ${numToEqual}`);
}

function writeUserTotal(num) {
  userTot += num;
  $("#userNum").text(`Your total: ${userTot}`);
}

function resetGame() {
  writeComputerTotal();
  userTot = 0;
  writeUserTotal(userTot);
}

function checkResults() {
  //if num >
  if (userTot > numToEqual) {
  //alert you lose
  alert("You just lost the game...");
  //add 1 to loss and write out
  losses+=1;
  //reset num to equal and usertot
  resetGame();
  }
  // if num =
  // alert you win
  // add 1 to win
  // reset num to equal and usertot
}




