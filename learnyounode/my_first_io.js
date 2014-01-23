var fs = require('fs');
var file_contents = fs.readFileSync('test.txt').toString();
console.log(file_contents);