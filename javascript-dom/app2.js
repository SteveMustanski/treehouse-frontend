const toggle = document.querySelector('#toggleList');
const list = document.querySelector('.list');
const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton')
const removeItemButton = document.querySelector('button.removeItemButton')

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
})

toggle.addEventListener('click', () => {
  if (list.style.display === 'none') {
    toggle.textContent = 'Hide List'
    list.style.display = 'block';
  } else {
    toggle.textContent = 'Show List';
    list.style.display = 'none';
  }
})

addItemButton.addEventListener('click', () => {
  // select the first ul item in the array 
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  // clear the text input field
  addItemInput.value = '';
})

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  // select the last child
  let lastLi = document.querySelector('li:last-child');
  ul.removeChild(lastLi);
})