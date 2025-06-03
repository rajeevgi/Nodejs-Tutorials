const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type' : 'text/Plain'});
    res.end('Hello, rajeev!');

}).listen(8080);
console.log(`Server is running on http://localhost:8080`);