var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

	
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// routing

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About us!');
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
	console.log("Server started");
	console.log("Port: " + PORT)
});