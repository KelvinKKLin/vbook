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

app.get('/scenic.html', function(req, res){
    res.sendFile(path.join(__dirname + '/scenic.html'));
})

app.get('/blue.html', function(req, res){
    res.sendFile(path.join(__dirname + '/blue.html'));
})

app.get('/ar.html', function(req, res){
    res.sendFile(path.join(__dirname + '/ar.html'));
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

console.log("STARTING HTTPS ON PORT 8443");
httpServer.listen(8080);
httpsServer.listen(8443);