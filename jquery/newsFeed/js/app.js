const $odd = $('a:odd');
const $secuereLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"');

// set attributes using attr

$secuereLinks.attr('target', '_blank');
$pdfs.attr('download', true);