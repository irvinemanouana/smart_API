
var express = require('express');
var port = 8080;
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
(function init() {
  require('./model')(app);
  require('./action')(app);
  require('./routes')(app);

}());

server.listen(process.env.PORT ||port,function(err){
  if (err)
      console.log("unable to listening on port "+port+" "+err);
  else
      console.log("Express SmartJug listening on port "+port);
});

app.get('/',function (req,res) {
    res.sendFile(__dirname+'/index.html')
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});