
// create reveal spoiler button and append to page at end of spoiler class

const $button = $('<button>Reveial Spoiler</button>');
$('.spoiler').append($button);


// hide the spoiler on page load
$('.spoiler span').hide();

//add the listener to the parent and listen to clicks on children

$('.spoiler').on('click', 'button', () => {
  $('.spoiler button').hide();
  $('.spoiler span').show();
});







