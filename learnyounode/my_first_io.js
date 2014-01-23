var fs = require('fs');
var file_contents = fs.readFileSync(process.argv[2]).toString();
console.log(file_contents.split('\n').length - 1);