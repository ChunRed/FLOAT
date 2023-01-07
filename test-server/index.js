var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //res.sendFile(__dirname + '/web_control.js');
});

var userId = 0;
var ClickValue = 0;
var Value = 0;
var Text = "";
var members = [12,13,15,14];

io.on('connection', function(socket){
  socket.userId = userId ++;
  console.log('a user connected, user id: ' + socket.userId);

  socket.on('value', function(msg){

    console.log('#' + socket.userId + ": value : " + msg);
    //io.emit('value', msg);
    ClickValue = msg;
    Value = msg;
    
  });

  socket.on('Text', function(msg){

    console.log('#' + socket.userId + ": Text : " + msg);
    //io.emit('Text', msg);
    ClickValue = msg;
    Text = msg;
    
  });

  socket.on('Member', function(msg){

    console.log("Member : " + msg + "done");
    members.push(msg);
  });



});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


var clock = setInterval(function (){

  if(members.length > 0){
    console.log(members);
    io.emit("Member", members[0]);
    io.emit("Text", Text);
    io.emit("value", Value);
    members.shift();
  }
  else {
    console.log("wait members");
    io.emit("Member", 0);
  }
  
} , 5000);