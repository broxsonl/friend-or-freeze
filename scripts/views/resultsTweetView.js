(function(module) {
  var tweetsView = {};

  tweetsView.tweetCompiler = function(thisTweet) {
    var source = $('#tweet-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(thisTweet);
  };

  tweetsView.renderTweets = function() {
    $('#example-tweets').empty().append(tweetCompiler);
  };

  tweetsView.createEmbeddedTweets = function() {
    return tweetObj.all().map(function(currentTweet) {
      return {
        name: currentTweet.statuses.,
        screen_name: a,
        text: a,
        date: a
      };
    });
  };

  module.tweetsView = tweetsView;

})(window);
