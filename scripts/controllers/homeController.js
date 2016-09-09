(function(module) {

  var homeController = {};

  homeController.reveal = function() {
    $('#zipentry').val('');
    $('.page-content').hide();
    $('.map-section').hide();
    $('#homepage').fadeIn();
    if (chartView.tweetChart) {
      chartView.tweetChart.destroy();
    }
  };

  module.homeController = homeController;
})(window);
