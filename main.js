//what is express?
// express is used to create a web server in node.js. express works on a middleware concept (callback functions).

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});