'use strict';

$('#about').on('click', 'a', function() {
  event.preventDefault();
  $('#about').css('top', '15%');
  $('article').hide();
  $('.' + this.className).fadeIn();
});
