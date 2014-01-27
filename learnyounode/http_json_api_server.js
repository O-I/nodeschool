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