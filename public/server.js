//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/introduction.html'));
});
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/expectations.html'));
});app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/guidelines.html'));
});app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/http.html'));
});app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/hyperback.html'));
});app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/responsive.html'));
});app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/strategies.html'));
});app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/TECHNIQUES.html'));
});app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/url.html'));

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});