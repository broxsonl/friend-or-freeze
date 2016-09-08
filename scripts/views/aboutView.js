'use strict';

$('#about').on('click', 'h2', function() {
  event.preventDefault();
  $('article').hide();
  $('.' + this.className).fadeIn();
});
