var request = require('request'),
    url = 'http://localhost:8000',
    req = request.post(url);

process.stdin.pipe(req).pipe(process.stdout);

// Official solution:
// var request = require('request');
// var r = request.post('http://localhost:8000');
// process.stdin.pipe(r).pipe(process.stdout);