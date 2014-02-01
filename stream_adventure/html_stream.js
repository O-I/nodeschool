var through = require('through'),
    trumpet = require('trumpet'),
    tr = trumpet();

var thru = through(
  function(buffer) {
    this.queue(buffer.toString().toUpperCase());
  });

var embiggen = tr.select('.loud').createStream();

embiggen.pipe(thru).pipe(embiggen);

process.stdin.pipe(tr).pipe(process.stdout);