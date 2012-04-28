var express = require('express');
var connect = require('connect');

var routes = require('./routes');

var app = express.createServer();

// post a photo
app.post('/shot', function(req, res) {

});

// start the auth process
app.get('/frauth/:service', function(req, res) {

});

// a new share
app.post('/beerd', routes.saveBeerd);

// get friends shares
app.get('/beerds', routes.getBeerds);

// get facebook friends
app.get('/fbeefriends', function(req, res) {

});

// add a friend
app.post('/beerfriend', function(req, res) {

});

routes.init(function(err) {
  if(err) return console.error(err);
  app.listen(process.env.PORT);
  console.log('listening on', process.env.PORT);
})