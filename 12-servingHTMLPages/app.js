var http =  require('http');
var fs = require('fs');


 var server = http.createServer(function(req, res){
   console.log('request was made: ' + req.url);
   res.writeHead(200, {'Content-type': 'text/html'});
   var ReaderStream = fs.createReadStream(__dirname + '/index.html' , 'utf8');

   ReaderStream.pipe(res);
 });

 server.listen(3000, '127.0.0.1');
 console.log('server on port 3000');
