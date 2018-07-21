const getRandomNumber = (lowerNum, upperNum) =>  {
  if (isNaN(lowerNum) || isNaN(upperNum)) {
    throw new Error('one of the inputs is not a number');
  }
  return Math.floor(Math.random() * (upperNum - lowerNum + 1)) + lowerNum;
};

alert(getRandomNumber(1,4));
alert(getRandomNumber(1, 20));
alert(getRandomNumber('six', 20));



