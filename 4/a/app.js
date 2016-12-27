var express = require('express')
var app = express()

app.get('/', function (req, res) {
	console.log('I am app A');
 	res.send('I am app A');
})

app.listen(3000, function () {
  console.log('A app listening on port 3000!')
})