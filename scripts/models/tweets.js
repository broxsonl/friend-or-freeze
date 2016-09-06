(function(module) {

  var tweetObj = {};
  tweetObj.all = [];
  tweetObj.numOfTweets = $('#rangeinput').val();
  tweetObj.tweetText = [];
  tweetObj.positives = 0;
  tweetObj.negatives = 0;
  tweetObj.neutrals = 0;

  tweetObj.lat = 47.67335; //this is just an example. TODO: get lat from webSQL when user input
  tweetObj.lng = -122.342621; //TODO: get lng from webSQL

  tweetObj.dictionary = $.getJSON('scripts/models/sentiment_touchstone.json', function(data) {
    tweetObj.dictionary = data[0];
    console.log(tweetObj.dictionary = data[0]);
  });


 //our scoring function, checks the words of each tweet against our sentiment dictionary and handles our counts of neutrals, positives and negatives based on wether each tweet is positive, negative or neutral.
  tweetObj.scoreTweet = function(tweet) {
    var score = 0;
    for (var i = 0; i < tweet.length; i++) {
      if (tweetObj.dictionary.hasOwnProperty(tweet[i])
      && tweet[i - 1] !== 'not') {
        score += tweetObj.dictionary[tweet[i]];
      }
    }
    if (!score) {
      return tweetObj.neutrals += 1;
    }
    else {
      if (score > 0) {
        tweetObj.positives += 1;
      }
      else {
        tweetObj.negatives += 1;
      }
    };
  };

  //our cleanup function, for each tweet in our array of tweets(strings) will put everything to lower case, remove characters we don't need and split strings in individual words. We then filter it so we have only words with more than two letters.
  //then we call our scoring function (above) on each tweet.
  tweetObj.cleanup = function(tweet) {
    tweetObj.tweetText.forEach(function(tweet){
      tweet = tweet
        .toLowerCase()
        .replace(/[.,\/$!%\^\*;:&{}=\-_()`~><+|]/g, '')
        .replace(/'/g, ' ')
        .split(' ').filter(function(tw) {
          return tw.length > 2;
        });
      tweetObj.scoreTweet(tweet);
    });
    page('/results');
  };



  //This creates a new array with each tweet text, then call the cleanup function
  tweetObj.tweetTextCreator = function() {
    tweetObj.all.statuses.forEach(function(tweet) {
      return tweetObj.tweetText.push(tweet.text);
    });
    tweetObj.cleanup();
  };


  //this is our request to the server based on the user choice of zipcode and number of tweets:
  tweetObj.fetchTweets = function() {
    $.get('/search/tweets.json?q=&geocode=' + tweetObj.lat + ',' + tweetObj.lng + ',5mi&lang=en&count=' + tweetObj.numOfTweets)
    .done(function(data, message, xhr) {
      tweetObj.all = data;
    }).done(function() {
      tweetObj.tweetTextCreator();
    });
  };


  //event handler for user input triggering our tweet analysis
  $('#submit-button').on('click', function (event){
    tweetObj.fetchTweets();
    event.preventDefault();
  });

  module.tweetObj = tweetObj;

})(window);
