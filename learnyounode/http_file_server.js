var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    filepath = process.argv[3];

var server = http.createServer(function(request, response) {
  response.end(filepath);
});

server.listen(port);