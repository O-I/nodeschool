var through = require('through');
var tr = through(write, end);
var write = function(buffer) {
    return this.queue(buffer.toString().toUpperCase());
  };
var end = function() {
    return this.queue(null);
  };

process.stdin.pipe(tr).pipe(process.stdout);