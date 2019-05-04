//Define global variables

const express = require('express')
const path = require('path')
const app = express()
const request = require('request')

//Serve React app from React's build directory
app.use(express.static(path.join(__dirname, '../client/build')));

//Use React's index.html as root
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
 });

//Define port
const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('App listening on', port)
});



//Get Github repos

//HTTP headers and options
const options = {
  url: 'https://www.api.github.com/users/defunkt',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'lollyyy'
  }
}

//Define callback function for request
function callback(error, response, body) {
  console.error('error:', error); //Log errors
  console.log('statusCode:', response && response.statusCode); //Log HTTP response
  app.get("/github", function(req, res) {
    res.set('Content-Type', 'application/json')
    res.send(body)
  })
}

//Make HTTP request
request(options, callback);



//Basic error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Oops! Something broke!')
})

//Send error message for HTTP 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry! Didn't find that :(")
})
