var child_process = require('child_process').spawn,
    duplex = require('duplexer');

module.exports = function(command, arguments) {
  spawn = child_process(command, arguments);
  //return spawn.stdout;
  // return duplex(spawn.stdout, spawn.stdin);
};