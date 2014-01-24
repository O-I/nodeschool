var http = require('http'),
    url = process.argv[2];
    url = 'http://hi.o-i.im'

http.get(url, function(response) {
  console.log("Response code: " + response.statusCode);
  response.setEncoding('utf-8');
  response.on('data', function(chunk) {
    console.log(chunk);
  });
});