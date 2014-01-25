var http = require('http'),
    bl = require('bl'),
    url_list = process.argv.slice(2, 5),
    length = url_list.length,
    responses_received = 0,
    index = 0,
    responses = [];

var httpGet = function(index, url) {
  http.get(url, function(response) {
    responses[index] = '';
    response.pipe(bl(function(error, data) {
      if (error) return error;
      responses[index] += data.toString();
    }));
    response.on('end', function() {
      responses_received++;
      if (responses_received === length)
        for (index; index < length; index++)
          console.log(responses[index]);
    });
  });
}

for (index; index < length; index++)
  httpGet(index, url_list[index]);

// for (i; i < length; i++) {
//   (function(index) {
//     url = url_list[index];
//     // console.log(url);
//     http.get(url, function(response) {
//     //   console.log(response);
//       response.pipe(bl(function(error, data) {
//         if (error) return error;
//         // console.log(data.toString());
//         text[index] = data.toString();
//         count++;
//         if (count === length)
//           text.forEach(console.log);
//       }));
//     });
//   }(i));
// }