// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8000;

server.listen(port, function () {
  console.log('Server listening at port: ' + port);
});

// Routing
app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket){
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('join-room', function(sRoomName){
    socket.join(sRoomName);
  });
  
  socket.on('send-message', function(oMessage){
    io.to(oMessage.room).emit('new-message', oMessage);
  });
  
});