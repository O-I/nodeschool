var through = require('through'),
    trumpet = require('trumpet'),
    tr = trumpet();

var th = through(
  function(buffer) {
    this.queue(buffer.toString().toUpperCase());
  });

var stream = tr.select('.loud').createStream();

stream.pipe(th).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);