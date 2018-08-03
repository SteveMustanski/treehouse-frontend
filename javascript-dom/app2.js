const toggle = document.querySelector('#toggleList');
const list = document.querySelector('.list');
const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton')

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
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
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
})