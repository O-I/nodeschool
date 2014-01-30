var concat = require('concat-stream');
// var esrever = function(body) {
//   body.toString().split('').reverse().join('');
// }

process.stdin.pipe(concat(function(body) {
  process.stdout.write(body.toString().split('').reverse().join('') + '\n');
}));