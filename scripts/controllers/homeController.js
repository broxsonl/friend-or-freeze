(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    $('.page-content').hide();
    $('#homepage').fadeIn();
  };
  module.homeController = homeController;
})(window);
