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