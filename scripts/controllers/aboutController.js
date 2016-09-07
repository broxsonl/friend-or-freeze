(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    $('.page-content').hide();
    $('#about').fadeIn();
    $('#about article').hide();


  };
  module.aboutController = aboutController;
})(window);
