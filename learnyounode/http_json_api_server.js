var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var parsetime = function(datetime) {
  return {
            'hour': datetime.getHours(),
            'minute': datetime.getMinutes(),
            'second': datetime.getSeconds()
         };
}

var unixtime = function(datetime) {
  return { 'unixtime': datetime.getTime() };
}

var server = http.createServer(function(request, response) {
  if (request.method === 'GET') {
    var parsed_url = url.parse(request.url, true),
        path = parsed_url.pathname,
        datetime = new Date(parsed_url.query.iso),
        result;
    if (path === '/api/parsetime')
      result = parsetime(datetime);
    else if (path === '/api/unixtime')
      result = unixtime(datetime);
    
    if (result) {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
    }
    else {
      response.writeHead(404);
      response.end("Sorry, I don't recognize that API endpoint\n");
    }  
  }
  else {
    response.writeHead(404);
    response.end('Sorry, I only accept GET requests\n');
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