const toggle = document.querySelector('#toggleList');
const list = document.querySelector('.list');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
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