var child_process = require('child_process').spawn,
    duplex = require('duplexer');

module.exports = function(command, arguments) {
  spawn = child_process(command, arguments);
  return duplex(spawn.stdin, spawn.stdout);
};

//Official solution
// var spawn = require('child_process').spawn;
// var duplexer = require('duplexer');

// module.exports = function (cmd, args) {
//   var ps = spawn(cmd, args);
//   return duplexer(ps.stdin, ps.stdout);
// };