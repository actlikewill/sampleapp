// create node server
const  http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Worldsh\n');
})
.listen(8081);

console.log('Server running at http://' + 'localhost' + ':' + '8081/');

