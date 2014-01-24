var http = require('http'),
    bl = require('bl'),
    url_list = process.argv.slice(2, 5),
    length = url_list.length,
    count = 0,
    index = 0,
    i = 0,
    url = '',
    text = [];

for (i; i < length; i++) {
  (function(index) {
    url = url_list[index];
    console.log(url);
    http.get(url, function(response) {
    //   console.log(response);
      response.pipe(bl(function(error, data) {
        if (error) return error;
        console.log(data.toString());
        text[index] = data.toString();
        count++;
        if (count === length)
          text.forEach(console.log);
      }));
    });
  }(i));
}