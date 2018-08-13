const $odd = $('a:odd');
const $secuereLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"');

// set attributes using attr
$secuereLinks.attr('target', '_blank');
$pdfs.attr('download', true);

//add classes
$secuereLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', (event) => {
  // check if checkbox has been checked
  // if zero are checked prevent download and alert user
  //prevent default behavior
  if ($(':checked').length === 0) {
    event.preventDefault();
    alert('please check the allow downloads to download a pdf');
  }

});

$('a').each((index, link) => {
  const url = $(link).attr('href');
  $(link).parent().append(`(${url})`);
})