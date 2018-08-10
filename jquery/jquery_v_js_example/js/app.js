// hide box using javascript
// const box = document.querySelector('.box');
// box.style.display="none";

// hide box using jquery

//$('.box').hide();

// alert when clicked using js
// const box = document.querySelector('.box');
// box.addEventListener('click', () => {
//   alert('You just clicked the box!');
// });

// alert when clicked using jquery
$('.box').click(() => {
  alert('you just clicked the box using jquery');
});