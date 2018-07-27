function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
while (counter < 10000) {
  let randNum = randomNumber(6);
  document.write(`${randNum} `)
  counter += 1
}
