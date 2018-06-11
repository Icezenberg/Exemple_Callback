const express = require('express');
const app = express();
const port = "3999";

app.get('/', (req, res) => {
    usingItNow(myCallback);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Example app listening on port port!');
});


var myCallback = function(err, data) {
    if (err) throw err; // Check for the error and throw if it exists.
    console.log('got data: '+data); // Otherwise proceed as usual.
  };
  
  var usingItNow = function(callback) {
    callback(null, 'get it?'); // I dont want to throw an error, so I pass null for the error argument
  };