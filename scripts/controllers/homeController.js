(function(module) {

  var homeController = {};
  
  homeController.reveal = function() {
    $('#zipentry').val('');
    $('.page-content').hide();
    $('#homepage').fadeIn();
    if (chartView.tweetChart) {
      chartView.tweetChart.destroy();
    }
  };

  module.homeController = homeController;
})(window);
