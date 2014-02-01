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

// Official solution
// var trumpet = require('trumpet');
// var through = require('through');
// var tr = trumpet();

// var loud = tr.select('.loud').createStream();
// loud.pipe(through(function (buf) {
//     this.queue(buf.toString().toUpperCase());
// })).pipe(loud);

// process.stdin.pipe(tr).pipe(process.stdout);