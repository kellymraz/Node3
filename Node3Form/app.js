var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', indexController.index);
app.get('/', function(req, res) {
	res.header("Content-Type", "text/html")
	res.send('<form method="post" action="/formsubmit"><input name="email" type="email"><input type="submit"></form>')



})

app.post("/formsubmit", function(req, res) {
	// res.header("Content-Type", "text/html")
	res.redirect('/success')




})

app.get("/success", function(req, res) {
	res.send("Success!")


})

// Above will redirect the user to /success, then we'll need to have a "get" route handler

var server = app.listen(6802, function() {
	console.log('Express server listening on port ' + server.address().port);
});


