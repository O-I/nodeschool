var fs = require('fs');
fs.readFile('test.txt', 'utf-8', function newline_count(error, file_contents) {
    if (error) throw error;
    console.log(file_contents.split('\n').length - 1);
});