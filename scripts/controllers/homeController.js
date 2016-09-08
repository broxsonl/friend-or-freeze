(function(module) {
  var homeController = {};
  homeController.reveal = function() {
    $('#zipentry').val('');
    $('.page-content').hide();
    $('#homepage').fadeIn();
  };
  module.homeController = homeController;
})(window);
