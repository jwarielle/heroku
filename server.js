'use strict';

var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/heroku');

app.use(express.static(__dirname + (process.env.STATIC_DIR)));

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log('server running on port 3000');
});
