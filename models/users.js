var db = require('db');

var client;
exports.init = function(callback) {
  db.init(function(err, p_client) {
    client = p_client;
    callback();
  });
};

