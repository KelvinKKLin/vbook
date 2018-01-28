var express = require('express')
var app = express()
 var path = require('path');
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

console.log("Listening on localhost:5000")
app.listen(5000, "0.0.0.0")
