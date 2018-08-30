
// set up evil global vars
let numToEqual = 0;
let blueVal = 4;
let redVal = 8;
let greenVal = 1;
let yellowVal = 3;
let userTot = 0;
let losses = 0;
let wins = 0;

// write out the number to equal and the user total and stats
writeComputerTotal();
writeUserTotal(userTot);
writeStats();

// click events on each square 
// update the usertotal and check for win or loss
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

// function to set up and write the number to equal to the page
function writeComputerTotal() {
  numToEqual = Math.floor(Math.random() * 100) + 1;
  $("#computerNum").text(`Target Number: ${numToEqual}`);
}
// function to add the square's value to user total and update page
function writeUserTotal(num) {
  userTot += num;
  $("#userNum").text(`Your total: ${userTot}`);
}

// reset the computer and user totals
function resetGame() {
  writeComputerTotal();
  userTot = 0;
  writeUserTotal(userTot);
  writeStats();
}

function writeStats() {
  $('#wins').text(`Wins: ${wins}`);
  $('#losses').text(`Losses: ${losses}`);
}

// function to check the results each time user clicks
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
  if (userTot === numToEqual){
  // alert you win
  alert("You just won the game!!!!!")
  // add 1 to win
  wins+=1;
  // reset num to equal and usertot
  resetGame();
  }
}




