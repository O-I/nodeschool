var websocket = require('websocket-stream'),
    url = 'ws://localhost:8000',
    stream = websocket(url),
    output = 'hello\n';

stream.write(output);
stream.end();

// Official solution:
// var ws = require('websocket-stream');
// var stream = ws('ws://localhost:8000');
// stream.end('hello\n');