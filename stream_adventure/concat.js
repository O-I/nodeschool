var concat = require('concat-stream');
var esrever = function(body) {
  process.stdout.write(body.toString().split('').reverse().join('') + '\n');
}

process.stdin.pipe(concat(esrever));

// Official solution
// var concat = require('concat-stream');

// process.stdin.pipe(concat(function (src) {
//     var s = src.toString().split('').reverse().join('');
//     console.log(s);
// }));