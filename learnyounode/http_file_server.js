var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    filepath = process.argv[3];

var server = http.createServer(function(request, response) {
  var file = fs.createReadStream(filepath, {encoding: 'utf-8'});
  file.pipe(response);
});

server.listen(port);

// Official solution:
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
// server.listen(Number(process.argv[2]))