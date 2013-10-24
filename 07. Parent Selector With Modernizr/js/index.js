// if a browser doesn't support SVG,
// add a class of 'no-svg' onto the html element
if (!Modernizr.svg) {
  $('html').addClass('no-svg');
}