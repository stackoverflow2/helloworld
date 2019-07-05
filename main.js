

var http = require('http');
var ur = require('url')
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello there</h1>")
    res.end();
}).listen(8080);
