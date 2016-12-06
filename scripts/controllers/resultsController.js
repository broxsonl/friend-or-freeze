(function(module) {

  var resultsController = {};

  resultsController.reveal = function() {
    $('.page-content').hide();
    //Keeping this log in so that this is visible in the console on purpose.

    chartView.vibes.push(tweetObj.positives, tweetObj.negatives, tweetObj.neutrals);

    if (tweetObj.positives > tweetObj.negatives) {
      $('#positive-results').fadeIn(500);
      $('#positive-pic').fadeIn(500);
    } else if (tweetObj.negatives > tweetObj.positives) {
      $('#negative-results').fadeIn();
      $('#negative-pic').fadeIn();
    } else {
      $('#neutral-results').fadeIn();
      $('#neutral-pic').fadeIn();
    }
  };

  module.resultsController = resultsController;

})(window);
