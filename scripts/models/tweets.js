(function(module) {

  // var dictionary = JSON.parse('scripts/models/sentiment_touchstone.json');//Not sure if correct format.
  var tweetObj = {};
  tweetObj.all = [];
  tweetObj.tweetText = [];
  tweetObj.positives = 0;
  tweetObj.negatives = 0;
  tweetObj.neutrals = 0;

  tweetObj.lat = 47.67335; //this is just an example. TODO: get lat from webSQL when user input
  tweetObj.lng = -122.342621; //TODO: get lng from webSQL



  tweetObj.cleanup = function(tweet) {
    tweet
    .toLowerCase()
    .replace(/[.,\/$!%\^\*;:&{}=\-_()`~><+|]/g, '')
    .replace(/'/g, ' ')
    .split(' ').filter(function(tw) {
      return tw.length > 2;
    });
    console.log(tweet
        .toLowerCase()
        .replace(/[.,\/$!%\^\*;:&{}=\-_()`~><+|]/g, '')
        .replace(/'/g, ' ')
        .split(' '));
    console.log(tweet);
    return tweet;
  };

  tweetObj.scoreTweet = function(tweet) {
    var score = 0;
    tweetObj.tweetText.forEach(function(tweet) {
      tweet = tweetObj.cleanup(tweet);
      for (var i = 0; i < tweet.length; i++) {
        if (tweet[i] in dictionary && tweet[i - 1] !== 'not') {
          score += dictionary[tweet[i]];
        }
      }
      if (!score) {
        return tweetobj.neutrals += 1;
      }
      else {
        if (score > 0) {
          tweetObj.positives += 1;
        }
        else {
          tweetObj.negatives += 1;
        }
      }
    });
    page('/results');
  };

  tweetObj.tweetTextCreator = function() {
    tweetObj.all.statuses.forEach(function(tweet) {
      return tweetObj.tweetText.push(tweet.text);
    });
    tweetObj.scoreTweet();
  };



  //this is our request to the server, we need to decide how many tweets we want, right now it's 200 but we can get more easily. We will need to wrap it in a function to be triggered when we get the zipcode and add a call back for the next function we need to call :
  tweetObj.fetchTweets = function() {
    $.get('/search/tweets.json?q=&geocode=' + tweetObj.lat + ',' + tweetObj.lng + ',5mi&lang=en&count=200')
    .done(function(data, message, xhr) {
      tweetObj.all = data;
    }).done(function() {
      tweetObj.tweetTextCreator();
    });
  };


  module.tweetObj = tweetObj;

})(window);
