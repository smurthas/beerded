var config = require('config');
var mongodb = require('mongodb');
var Db = mongodb.Db;
var Server = mongodb.Server;

var client = new Db(config.db.name, new Server(config.db.host, config.db.port, {}));

function test (err, collection) {
  collection.insert({a:2}, function(err, docs) {

    collection.count(function(err, count) {
      test.assertEquals(1, count);
    });

    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
      test.assertEquals(1, results.length);
      test.assertTrue(results[0].a === 2);

      // Let's close the db
      client.close();
    });
  });
};

exports.init = function(callback) {
  client.open(callback);
}