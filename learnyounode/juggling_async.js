var http = require('http'),
    bl = require('bl'),
    url_list = process.argv.slice(2, 5),
    length = url_list.length,
    responses_received = 0,
    index = 0,
    responses = [];

var printResponses = function() {
  for (index = 0; index < length; index++)
    console.log(responses[index]);
}

var httpGet = function(index, url) {
  http.get(url, function(response) {
    response.pipe(bl(function(error, data) {
      if (error) return error;
      responses[index] = data.toString();
      responses_received++;
      if (responses_received === length)
        printResponses();
    }));
  });
}

for (index; index < length; index++)
  httpGet(index, url_list[index]);

// Official solution:
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(data)

//       results[index] = data.toString()
//       count++

//       if (count == 3) // yay! we are the last one!
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)