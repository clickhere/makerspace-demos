let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let five = require('johnny-five');
let board = five.Board();

app.use(express.static('public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

board.on('ready', function() {

  let led = new five.Led(13);

  io.on('connection', function(socket){
    console.log('a user connected with id ', socket.id);

    socket.on('disconnect', function(){
      console.log('user disconnected', socket.id);
    });

    socket.on('message', function(msg){
      console.log(msg);
    });

    socket.on('led:on', function() {
      socket.emit('led:on');
      console.log('Broadcasting: led:on');
      led.on();
    });

    socket.on('led:off', function() {
      socket.emit('led:off');
      console.log('Broadcasting: led:off');
      led.off();
    });

  });

});