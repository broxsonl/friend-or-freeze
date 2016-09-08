(function(module) {
  var tweetsView = {};

  tweetsView.tweetCompiler = function(thisTweet) {
    var source = $('#tweet-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(thisTweet);
  };

  tweetsView.renderTweets = function() {
    $('#example-tweets').empty();
    for (var i = 0; i < 5; i++) {
      tweet = tweetsView.createEmbeddedTweets()[i];
      $('#example-tweets').append(tweetsView.tweetCompiler(tweet));
    };
  };
  tweetsView.createEmbeddedTweets = function() {
    return tweetObj.all.statuses.map(function(currentTweet) {
      return {
        text: currentTweet.text,
        date: currentTweet.created_at,
        name: currentTweet.user.name,
        screen_name: currentTweet.user.screen_name,
        id: currentTweet.id_str
      };
    });
  };

  module.tweetsView = tweetsView;

})(window);
