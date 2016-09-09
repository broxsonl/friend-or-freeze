(function(module) {

  var resultsStatsController = {};
  resultsStatsController.reveal = function() {
    $('.page-content').hide();
    $('#resultsStats').show(2000);
    $('#example-tweets').show(2000);
    $('.map-section').show();
    $('.chartjs-hidden-iframe').remove();
    tweetsView.renderTweets();
    chartView.drawChart();
    mapView.getTheStuff();
    mapView.showTheStuff();

    //Code below to reset scorekeeping
    tweetObj.tweetText = [];
    tweetObj.positives = 0;
    tweetObj.negatives = 0;
    tweetObj.neutrals = 0;
    chartView.vibes = [];
  };

  module.resultsStatsController = resultsStatsController;
})(window);
