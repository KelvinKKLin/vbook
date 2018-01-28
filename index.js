/*var express = require('express')
var app = express()
 var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

console.log("Listening on localhost:5000")
app.listen(5000, "0.0.0.0")*/
var express = require('express')
var path = require('path');

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('host.key', 'utf8');
var certificate = fs.readFileSync('host.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);