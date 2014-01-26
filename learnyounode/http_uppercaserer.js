var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];

var server = http.createServer(function(request, response) {
  if (request.method === 'POST')
    request.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  else
    return response.end('I only accept POST requests\n');
});

server.listen(port);

// Official solution:
// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))