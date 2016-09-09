(function(module) {

  var aboutController = {};

  aboutController.reveal = function() {
    $('.page-content').hide();
    $('.map-section').hide();
    $('#about').fadeIn();
    $('#about article').hide();
  };

  module.aboutController = aboutController;
})(window);
