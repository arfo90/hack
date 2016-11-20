var http = require('http');

var express = require("express");
var app = express();

var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

var port = process.env.PORT || 5000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.get('/', function(req, res) {
    res.render('index');
});


console.log('Booting..');
console.log('Here we go..');
console.log('Server is Started');


app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
    console.log('Server host %d', server_host);
});
