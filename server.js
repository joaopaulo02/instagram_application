// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/views/index.html');
//    });

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
console.log('Server running at localhost:3000')