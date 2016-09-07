(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    $('.page-content').hide();
    $('#about').fadeIn();
    $('div, .aboutLee').hide();
    $('div, .aboutJohn').hide();
    $('div, .aboutMaelle').hide();

    $('h2').on('click', function() {
      $('div', this.className).show();
    });
  };
  module.aboutController = aboutController;
})(window);
