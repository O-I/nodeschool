var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    filepath = process.argv[3];

var server = http.createServer(function(request, response) {
  var file = fs.createReadStream(filepath, {encoding: 'utf-8'});
  file.pipe(response);
});

server.listen(port);