(function(module) {

  var dictionary = JSON.parse('scripts/models/sentiment_touchstone.json');//Not sure if correct format.
  var tweetObj = {};
  tweetObj.all = [];

  tweetObj.lat = 47.67335; //this is just an example. TODO: get lat from webSQL when user input
  tweetObj.lng = -122.342621; //TODO: get lng from webSQL


  //this is our request to the server, we need to decide how many tweets we want, right now it's 200 but we can get more easily. We will need to wrap it in a function to be triggered when we get the zipcode and add a call back for the next function we need to call :
  $.get('/search/tweets.json?q=&geocode=' + tweetObj.lat + ',' + tweetObj.lng + ',5mi&lang=en&count=200')
  .done(function(data, message, xhr) {
    tweetObj.all = data;
  });

  function cleanup(tweet) {
    tweet = tweet
    .replace(/[.,\/$!%\^\*;:&{}=\-_()`~><+|]/g, '')
    .replace(/'/g, ' ')
    .split(' ').filter(function(tw) {
      return tw.length > 2;
    });
  }

  function analyzeTweet(tweet) {
    var score = 0;
    tweet = cleanup(tweet)
  }




  module.tweetObj = tweetObj;

})(window);
