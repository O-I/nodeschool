var http = require('http'),
    url = require('url'),
    port = process.argv[2],
    parsetime, unixtime;

var server = http.createServer(function(request, response) {
  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var parsed_url = url.parse(request.url, true),
        path = parsed_url.pathname,
        datetime = new Date(parsed_url.query.iso);
    if (path === '/api/parsetime') {
      parsetime = {
                     'hour': datetime.getHours(),
                     'minute': datetime.getMinutes(),
                     'second': datetime.getSeconds()
                  };
      response.end(JSON.stringify(parsetime));
    }
    else if (path === '/api/unixtime') {
      unixtime = { 'unixtime': datetime.getTime() };
      response.end(JSON.stringify(unixtime));
    }
  }
});

server.listen(port);

// Official solution:
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))