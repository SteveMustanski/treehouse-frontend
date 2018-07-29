
function print(message) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

// set up questions and answers
let correct = 0;
let message = '';
let quizArray = [
  ['Who is an awesome developer?', 'Steve'],
  ['Pinapple on a pizza (y/n)?', 'n'],
  ['What language is this written in?', 'javascript']
]

// process array and ask questions

for (let i = 0; i < quizArray.length; i++) {
  let answer = prompt(quizArray[i][0]);

  // evaluate answers and store correct count
  if (answer.toLowerCase === quizArray[i][1].toLowerCase) {
    correct += 1;
  }
  
}
// print final results

message = `You scored ${correct} correct out of ${quizArray.length} questions`;
print(message);