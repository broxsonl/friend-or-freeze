'use strict';

var adjustTweetNumber = function() {
  $('rangeinput').on('change', function() {
    $('rangevalue').val()
  })
  if (parseInt($('#rangeinput').val()) > 25) {
    console.log('do this');
    $('#rangevalue').css('font-size', '100px');
  }
  else if (parseInt($('#rangeinput').val()) > 35) {
    console.log('do this');
    $('#rangevalue').css('font-size', '100px');
  }
  else if (parseInt($('#rangeinput').val()) > 50) {
    console.log('do this');
    $('#rangevalue').css('font-size', '100px');
  }
  else if (parseInt($('#rangeinput').val()) > 60) {
    console.log('do this');
    $('#rangevalue').css('font-size', '100px');
  }
  else if (parseInt($('#rangeinput').val()) > 75) {
    console.log('do this');
    $('#rangevalue').css('font-size', '100px');
  }
  else if (parseInt($('#rangeinput').val()) === 100) {
    console.log('do this');
    $('#rangevalue').css('font-size', '100px');
  }
  else if (parseInt($('#rangeinput').val()) <= 26) {
    console.log('do this');
    $('#rangevalue').css('font-size', '20px');
  }
};

$('#rangeInput').on('change', adjustTweetNumber);
