var db = require('db');

var collection;
exports.init = function(callback) {
  db.init(function(err, p_client) {
    if (err) return console.error(err);
    p_client.collection('beerds', function(err, _collection) {
      collection = _collection;
      callback();
    });
  });
}

exports.addBeerd = function(beerd, callback) {
  collection.insert(beerd, callback);
}

exports.getBeerds = function(callback) {
  var cursor = collection.find({});
  cursor.limit(10);
  callback(null, cursor);
}