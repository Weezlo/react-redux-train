var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist'));

app.use('/', function(req,res){
  res.sendFile(path.resolve('client/index.html'));
});

app.listen(3000, function(error){
  if(error) throw error;
  console.log('express server listening on port 3000');
})
