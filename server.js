// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(8000, function () {
  console.log('Server listening at port: 8000');
});

// Routing
app.use(express.static(__dirname + '/public'));