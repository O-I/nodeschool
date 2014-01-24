var http = require('http'),
    url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding('utf-8');
  response.on('data', console.log);
  response.on('error', console.error);
});

// Official solution:
// var http = require('http')
    
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })