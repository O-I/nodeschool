var duplex = require('duplexer'),
    through = require('through'),
    countries = {};

module.exports = function(counter) {
  var tr = through(
  function(object) {
    countries[object.country] = (countries[object.country] || 0) + 1
    },
  function() {
    counter.setCounts(countries)
  });
  return duplex(tr, counter)
};

//Official solution
// var duplexer = require('duplexer');
// var through = require('through');

// module.exports = function (counter) {
//     var counts = {};
//     var input = through(write, end);
//     return duplexer(input, counter);
    
//     function write (row) {
//         counts[row.country] = (counts[row.country] || 0) + 1;
//     }
//     function end () { counter.setCounts(counts) }
// };