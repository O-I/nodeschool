var through = require('through'),
    split = require('split'),
    line_number = 0, result;

var tr = through(
         function(buffer){
           line_number++;
           if (line_number % 2 === 0)
             result = buffer.toString().toUpperCase();
           else
             result = buffer.toString().toLowerCase();
           this.queue(result + '\n');
         },
         function(end){
           this.queue(null);
         });

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

// Official solution:
// var through = require('through');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf) {
//     var line = buf.toString();
//     this.queue(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
// });
// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);