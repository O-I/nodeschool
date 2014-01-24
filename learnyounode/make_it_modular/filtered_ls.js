var fs = require('fs');
var path = require('path');
var filtered_file_list = [];

exports.ls_filter = function(pathname, file_extension_filter, callback) {
  // console.log(pathname);
  // console.log(file_extension_filter);
  fs.readdir(pathname, function(error, files_list) {
    if (error) return callback(error);
    // console.log(files_list);
    files_list.forEach(function(file) {
      // console.log(file);
      if (path.extname(file) === '.' + file_extension_filter)
        filtered_file_list.push(file);
    });
    // return callback(null, filtered_file_list);
    console.log(filtered_file_list);
  });
}