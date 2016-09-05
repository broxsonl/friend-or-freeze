(function(module) {
  var resultsController = {};

  resultsController.reveal = function() {
    $('.page-content').hide();
    if (tweetObj.positives > tweetObj.negatives) {
      $('#positive-results').fadeIn();
    } else {
      $('#negatives-results').fadeIn();
    }
  };
  module.resultsController = resultsController;

})(window);
