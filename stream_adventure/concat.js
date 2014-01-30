var concat = require('concat-stream');
var esrever = function(body) {
  process.stdout.write(body.toString().split('').reverse().join('') + '\n');
}

process.stdin.pipe(concat(esrever));