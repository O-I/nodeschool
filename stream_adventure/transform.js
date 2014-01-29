var through = require('through');
var tr = through(write, end);
var write = function(buffer) {
    this.queue(buffer.toString().toUpperCase());
  };
var end = function() {
    this.queue(null);
  };

process.stdin.pipe(tr).pipe(process.stdout);