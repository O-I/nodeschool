var websocket = require('websocket-stream'),
    url = 'ws://localhost:8000',
    stream = websocket(url),
    output = 'hello\n';

stream.write(output);
stream.end();