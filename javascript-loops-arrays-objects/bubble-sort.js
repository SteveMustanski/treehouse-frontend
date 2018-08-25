let jumbleArray = [5, 2, 7, 4, 9, 1, 12, 29, 15, 32, 9];

function bubbleSort(array) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true; 
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        isSorted = false;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(jumbleArray));
