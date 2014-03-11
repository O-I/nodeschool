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