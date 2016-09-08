(function(module) {
  var resultsStatsController = {};
  resultsStatsController.reveal = function() {
    $('.page-content').hide();
    $('#resultsStats').show();
    $('#example-tweets').fadeIn(3000);
    $('.chartjs-hidden-iframe').remove();
    tweetsView.renderTweets();
    chartView.drawChart();
    tweetObj.tweetText = [];
    tweetObj.positives = 0;
    tweetObj.negatives = 0;
    tweetObj.neutrals = 0;
    chartView.vibes = [];
  };
  module.resultsStatsController = resultsStatsController;
})(window);
