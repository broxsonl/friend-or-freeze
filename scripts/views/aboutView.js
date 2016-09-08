'use strict';

$('#about').on('click', 'h2', function() {
  event.preventDefault();
  $('#about').css('top', '15%');
  $('article').hide();
  $('.' + this.className).fadeIn();
});
