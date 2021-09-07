const express = require('express')
const app = express()

// serve the css as static
app.use(express.static('search_bar'))

// routes 
app.get('/search-bar', function (req, res) {
    res.sendFile(__dirname + '/search_bar/search_bar.html')
})

app.listen(3000)
console.log('Server running at localhost:3000')