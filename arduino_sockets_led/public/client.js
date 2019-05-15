var socket = io();

socket.on('connect',function(){
  socket.emit('message', 'Hello server');
});

$('#light_switch').click(function () {
  if ($(this).is(':checked')) {
    socket.emit("led:on");

  } else {
    socket.emit("led:off");
  }
});