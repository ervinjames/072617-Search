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
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/introduction.html'));
});
app.get('/expectations.html', function(req, res){
  res.sendFile(path.join(__dirname, 'public/expectations.html'));

});app.get('/guidelines.html', function(req, res){
  res.sendFile(path.join(__dirname, 'public/guidelines.html'));

});app.get('/http.html', function(req, res){
  res.sendFile(path.join(__dirname, 'public/http.html'));

});app.get('/hyperback.html', function(req, res){
  res.sendFile(path.join(__dirname, 'public/hyperback.html'));

});app.get('/responsive.html', function(req, res){
  res.sendFile(path.join(__dirname, 'public/responsive.html'));

});app.get('/strategies.html', function(req, res){
  res.sendFile(path.join(__dirname, 'public/strategies.html'));

});app.get('/TECHNIQUES.html', function(req, res){
  res.sendFile(path.join(__dirname, 'public/TECHNIQUES.html'));

});app.get('/url.html', function(req, res){
  res.sendFile(path.join(__dirname, 'public/url.html'));

app.get('/about.html', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});