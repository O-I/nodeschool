var fs = require('fs');
var path = require('path');
var pathname = '../learnyounode';
var file_extension_filter = 'js';

fs.readdir(pathname, function filtered_ls(error, files_list) {
  if (error) throw error;
  //console.log(files_list.map(path.extname));
  for (var index = 0; index < files_list.length; ++index)
    if (path.extname(files_list[index]) === '.' + file_extension_filter)
      console.log(files_list[index]);
});