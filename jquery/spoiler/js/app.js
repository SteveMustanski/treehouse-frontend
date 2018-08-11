
// create reveal spoiler button and append to page at end of spoiler class

const $button = $('<button>Reveal Spoiler</button>');
$('.spoiler').append($button);


// hide the spoiler on page load
$('.spoiler span').hide();

//add the listener to the parent and listen to clicks on children

$('.spoiler').on('click', 'button', (event) => {
  $(event.target).hide();
  $(event.target).prev().show();
});







