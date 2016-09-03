var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

var R = require('request');

var url = 'https://api.twitter.com/1.1/search/tweets.json?q=&geocode=47.67335,-122.342621,1km&lang=en&count=50';
var bearerToken = process.env.TWITTER_BEARER_TOKEN; //the bearer token obtained from the last script

R({ url: url,
    method:'GET',
    json:true,
    headers: {
      'Authorization': 'Bearer ' + bearerToken
    }

}, function(err, resp, body) {
  if (err) {
    console.dir(err);
  } else {
    console.dir(body);
  }

});
