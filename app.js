
var express = require('express');
var port = 3000;
var app = express();

(function init() {
  require('./model')(app);
  require('./action')(app);
  require('./routes')(app);

}());

app.listen(port,function(err){
  if (err)
      console.log("unable to listening on port "+port+" "+err);
  else
      console.log("Express SmartJug listening on port "+port);
});