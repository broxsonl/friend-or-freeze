(function(module) {
  var tweetsView = {};

  tweetsView.tweetCompiler = function(thisTweet) {
    var source = $('#tweet-template').html();
    var templateRender = Handlebars.compile(source);
    // console.log(templateRender(thisTweet));
    return templateRender(thisTweet);
  };

  tweetsView.renderTweets = function() {
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
  //TODO: Need to run the below code in the controller.
  // tweetsView.renderTweets();

  module.tweetsView = tweetsView;

})(window);
