var bl = require('bl'),
    http = require('http'),
    url = process.argv[2];

http.get(url, function(response) {
  response.pipe(bl(function(error, data) {
    if (error) return error;
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});

// Official solution:
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(data)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })