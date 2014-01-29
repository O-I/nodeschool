var through = require('through');
var tr = through(function(buffer) {
                   this.queue(buffer.toString().toUpperCase());
                 },
                 function(end) {
                   this.queue(null);
                 });

process.stdin.pipe(tr).pipe(process.stdout);

// Official solution:
// var through = require('through');
// var tr = through(function (buf) {
//     this.queue(buf.toString().toUpperCase());
// });
// process.stdin.pipe(tr).pipe(process.stdout);

// Link to similar odd behavior when var tr is declared
// outside of createServer: 
// https://github.com/nodeschool/discussions/issues/124