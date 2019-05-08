var http =  require('http');


var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);k
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('server on port 3000');
