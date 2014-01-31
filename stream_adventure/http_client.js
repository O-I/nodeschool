var request = require('request'),
    url = 'http://localhost:8000',
    req = request.post(url);

process.stdin.pipe(req).pipe(process.stdout);