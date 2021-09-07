const express = require('express')
const app = express()
 
// routes 
app.get('/search-bar', function (req, res) {
    res.sendFile(__dirname + '/search_bar/search_bar.html')
})
 
app.listen(3000)
console.log('Server running at localhost:3000')