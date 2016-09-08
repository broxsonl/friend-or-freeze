(function(module) {
  var resultsController = {};

  resultsController.reveal = function() {
    $('.page-content').hide();
    console.log('Positive Vibes: ' + tweetObj.positives + ' , Negative Vibes: ' + tweetObj.negatives + ' , and Neutral Vibes: ' + tweetObj.neutrals);
    if (tweetObj.positives > tweetObj.negatives) {
      $('#positive-results').fadeIn(500);
      $('#positive-pic').fadeIn(500);
    } else {
      $('#negative-results').fadeIn();
      $('#negative-pic').fadeIn();
    }
    $('#example-tweets').fadeIn(3000);
    tweetsView.renderTweets();
    tweetObj.tweetText = [];
    tweetObj.positives = 0;
    tweetObj.negatives = 0;
    tweetObj.neutrals = 0;
  };

  module.resultsController = resultsController;

})(window);
