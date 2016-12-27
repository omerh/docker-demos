var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('I am app B');
  res.send('I am app B');
})

app.listen(3000, function () {
  console.log('B app listening on port 3000!')
})