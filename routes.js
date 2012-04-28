var async = require('async');
var beerds = require('models/beerds');

exports.init = function(callback) {
  beerds.init(function(err) {
    callback(err);
  });
}

exports.saveBeerd = function(req, res) {

}

exports.getBeerds = function(req, res) {
  beerds.getBeerds(function(err, docs) {
    console.error("DEBUG: docs", docs);
  });
}