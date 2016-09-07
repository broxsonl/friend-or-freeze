'use strict';

var adjustTweetNumber = function() {
  if (parseInt($('#rangeinput').val()) === 100) {
    $('#rangevalue').css({
      'font-size': '75px',
      'color': 'maroon'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 75) {
    $('#rangevalue').css({
      'font-size': '60px',
      'color': 'magenta'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 60) {
    $('#rangevalue').css({
      'font-size': '50px',
      'color': 'orange'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 50) {
    $('#rangevalue').css({
      'font-size': '40px',
      'color': 'brown'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 40) {
    $('#rangevalue').css({
      'font-size': '30px',
      'color': 'yellow'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 30) {
    $('#rangevalue').css({
      'font-size': '20px',
      'color': 'yellowgreen'
    });
  }
  else if (parseInt($('#rangeinput').val()) <= 25) {
    $('#rangevalue').css({
      'font-size': '15px',
      'color': 'black'
    });
  }
  $('#rangevalue').text($('#rangeinput').val());
};

$('#rangeinput').on('change', adjustTweetNumber);
