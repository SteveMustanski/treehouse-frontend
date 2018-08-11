
// hide the spoiler on page load

$('.spoiler span').hide();

// when the button is pressed show spoiler and hide button

$('.spoiler button').click( ()=> {
  $('.spoiler button').hide();
  $('.spoiler span').show();
});





