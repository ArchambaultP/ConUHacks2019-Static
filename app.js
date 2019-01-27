
var express = require('express')
var app = express()
app.use(express.static(__dirname));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/need', function (req, res) {
  res.sendFile(__dirname + '/need.html');
})

app.get('/need-match', function (req, res) {
  res.sendfile(__dirname + '/need-match.html');
})

app.get('/select', function (req, res) {
  res.sendFile(__dirname + '/select.html');
})

app.get('/share-form', function (req, res) {
  res.sendFile(__dirname + '/share-form.html');
})

var server = app.listen(3000, function () {
 
});
