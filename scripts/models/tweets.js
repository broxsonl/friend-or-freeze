(function(module) {

  var tweetObj = {};
  tweetObj.all = [];
  var userZipcode = $('#userLocation').val();

  tweetObj.lat = 47.67335; //this is just an example. TODO: get lat from webSQL when user input
  webDB.execute(
    'SELECT lat FROM cities WHERE zip =' +
    userZipCode
  );

  tweetObj.lng = -122.342621; //TODO: get lng from webSQL


  //this is our request to the server, we need to decide how many tweets we want, right now it's but we can get more easily. We will need to wrap it in a function to be triggered when we get the zipcode and add a call back for the next function we need to call :
  $.get('/search/tweets.json?q=&geocode=' + tweetObj.lat + ',' + tweetObj.lng + ',5mi&lang=en&count=200')
  .done(function(data, message, xhr) {
    tweetObj.all = data;
  });

  module.tweetObj = tweetObj;

})(window);
