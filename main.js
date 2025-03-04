//what is express?
// express is used to create a web server in node.js. express works on a middleware concept (callback functions).

//import of express module/function

const express = require('express')
const app = express()

// define what to do when someone visits a url

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send('Hello World 2.0')
  })
  

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});