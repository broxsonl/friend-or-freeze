(function(module) {
  var tweetsView = {};

  var tweetCompiler = function(thisTweet) {
    var source = $('#tweet-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(thisTweet);
  };

  tweetsView.renderTweets = function() {
    $('#example-tweets').empty().append(tweetCompiler);
  };

  module.tweetsView = tweetsView;
})(window);
