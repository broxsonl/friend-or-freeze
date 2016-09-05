(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    $('.page-content').hide();
    $('#about').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
