var fs = require('fs');
var path = require('path');
var filtered_file_list = [];

exports.ls_filter = function(pathname, file_extension_filter, callback) {
  fs.readdir(pathname, function(error, files_list) {
    if (error) return callback(error);
    files_list.forEach(function(file) {
      if (path.extname(file) === '.' + file_extension_filter)
        filtered_file_list.push(file);
    });
    return callback(null, filtered_file_list);
  });
}