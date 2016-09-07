(function(module) {
  var resultsController = {};

  resultsController.reveal = function() {
    $('.page-content').hide();
    console.log('Positive Vibes: ' + tweetObj.positives + ' , Negative Vibes: ' + tweetObj.negatives + ' , and Neutral Vibes: ' + tweetObj.neutrals);
    if (tweetObj.positives > tweetObj.negatives) {
      $('#positive-results').fadeIn();
      $('#positive-pic').fadeIn();
    } else {
      $('#negatives-results').fadeIn();
      $('#negative-pic').fadeIn();
    }
    $('#example-tweets').fadeIn();
    tweetsView.renderTweets();
  };
  module.resultsController = resultsController;

})(window);
