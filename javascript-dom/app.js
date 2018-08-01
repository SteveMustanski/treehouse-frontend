const myList = document.getElementsByTagName('li');
const errorNotPurple = document.querySelectorAll('.error-not-purple');
const even = document.querySelectorAll('li:nth-child(even)');


for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple';
  
}

for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = 'red';
  
}

for (let i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = 'lightgray';
  
}
