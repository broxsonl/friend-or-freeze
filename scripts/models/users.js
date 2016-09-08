(function(module) {

  var usersObj = {};
  usersObj.testId = 459301526;
  usersObj.testFollowers = [];
  usersObj.allTweetGeos = [];

  usersObj.getAllUsers = function (tweetArray) {
    $.get('/followers/ids.json?cursor=-1&user_id=' + usersObj.testId)
    .done(function(data, message, xhr) {
      usersObj.testFollowers = data;
      console.log('LOOK AT ALL THESE FOLLOWERS: ' + usersObj.testFollowers.ids);
    });
  };
  usersObj.getAllUsers();

  usersObj.getTweetGeos = function() {
    usersObj.allTweetGeos = tweetObj.all.statuses.map(function(currentTweet) {
      return currentTweet.geo;
    });
    console.log(usersObj.allTweetGeos);
  };


  // var geoArray = tweetObj.all.statuses.filter(function (tweet){
  //  return tweet.geo
  // });

 // https://api.twitter.com/1.1/followers/ids.json?cursor=-1&screen_name=andypiper&count=5000

  module.usersObj = usersObj;

})(window);
