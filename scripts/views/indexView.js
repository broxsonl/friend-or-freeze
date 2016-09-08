'use strict';

var adjustTweetNumber = function() {
  $('#rangevalue').val()

  if (parseInt($('#rangeinput').val()) === 100) {
    $('#rangevalue').css({
      'font-size': '75px'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 80) {
    $('#rangevalue').css({
      'font-size': '60px'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 60) {
    $('#rangevalue').css({
      'font-size': '50px'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 50) {
    $('#rangevalue').css({
      'font-size': '40px'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 40) {
    $('#rangevalue').css({
      'font-size': '30px'
    });
  }
  else if (parseInt($('#rangeinput').val()) > 25) {
    $('#rangevalue').css({
      'font-size': '25px'
    });
  }
  else if (parseInt($('#rangeinput').val()) <= 25) {
    $('#rangevalue').css({
      'font-size': '20px'
    });
  }
  $('#rangevalue').text($('#rangeinput').val());
};

$('#rangeinput').on('change', adjustTweetNumber);
