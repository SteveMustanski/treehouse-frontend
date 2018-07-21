const getRandomNumber = (upperNum) =>  {
  let randomNumber = Math.floor(Math.random() * upperNum) + 1;
  return randomNumber;
};

alert(getRandomNumber(4));



