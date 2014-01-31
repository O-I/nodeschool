var http = require('http'),
    fs = require('fs'),
    through = require('through')
    port = process.argv[2];

var server = http.createServer(function(request, response) {
  if (request.method === 'POST') {
    var tr = through(
    function(buffer) {
      this.queue(buffer.toString().toUpperCase());
    },
    function(end) {
      this.queue(null)
    });
    request.pipe(tr).pipe(response);
  }
  else
    response.end('I only accept POST requests\n');
});

server.listen(port);

// Official solution
// var http = require('http');
// var through = require('through');

// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(through(function (buf) {
//             this.queue(buf.toString().toUpperCase());
//         })).pipe(res);
//     }
//     else res.end('send me a POST\n');
// });
// server.listen(parseInt(process.argv[2]));