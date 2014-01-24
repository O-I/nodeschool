var ls_filter = require('./filtered_ls'),
    pathname = process.argv[2],
    file_extension_filter = process.argv[3];

ls_filter(pathname, file_extension_filter, function(error, files_list) {
  if (error) throw error;
  files_list.forEach(function(file) {
    console.log(file);
  });
});

// Official solution:
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })