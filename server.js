var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

var bearerToken = process.env.TWITTER_BEARER_TOKEN;

var proxyTwitter = function(request, response) {
  console.log(bearerToken);
  (requestProxy({
    url: 'https://api.twitter.com/1.1/search/' + request.params[0],
    json: true,
    headers: {
      'Authorization': 'Bearer ' + bearerToken
    }
  }))(request, response);
};


app.get('/search/*', proxyTwitter);


app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
