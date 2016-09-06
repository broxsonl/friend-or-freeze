(function(module) {

  var usersObj = {};
  usersObj.testId = 459301526;
  usersObj.testFollowers = [];

  usersObj.getAllUsers = function (tweetArray) {
    $.get('/followers/ids.json?cursor=-1&user_id=' + usersObj.testId)
    .done(function(data, message, xhr) {
      console.log(data);
      usersObj.testFollowers = data;
      console.log(usersObj.testFollowers);
    });
  };
  usersObj.getAllUsers();
  console.log('users js is running');

 // https://api.twitter.com/1.1/followers/ids.json?cursor=-1&screen_name=andypiper&count=5000

  module.usersObj = usersObj;

})(window);
