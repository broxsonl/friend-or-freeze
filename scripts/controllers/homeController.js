(function(module) {
  var homeController = {};

  homeController.reveal = function() {

    $('.page-content').hide();
    $('#homepage').fadeIn();
  };
  module.homeController = homeController;
})(window);

//Note*** Changed homepage section class from 'page-content' to 'home-content' so that it doesn't get hidden with the other 'page-content' sections.
