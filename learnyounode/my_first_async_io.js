var fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', function newline_count(error, file_contents) {
    if (error) throw error;
    console.log(file_contents.split('\n').length - 1);
});

// Official solution:
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })