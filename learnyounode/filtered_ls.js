var fs = require('fs'),
    path = require('path'),
    pathname = process.argv[2],
    file_extension_filter = process.argv[3];

fs.readdir(pathname, function filtered_ls(error, files_list) {
  if (error) throw error;
  var index = 0, length = files_list.length;
  for (index; index < length; ++index)
    if (path.extname(files_list[index]) === '.' + file_extension_filter)
      console.log(files_list[index]);
});

// Official solution:
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })