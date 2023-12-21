// Create web server that can accept any request to localhost:3000
// and respond with the contents of comments.json
// Use readFile to read the contents of comments.json and
// respond with the file contents in the callback
// Use createServer to create your server and use listen to start it

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('./comments.json', function (err, data) {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3000);