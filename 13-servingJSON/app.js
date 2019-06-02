var http =  require('http');
var fs = require('fs');


 var server = http.createServer(function(req, res){
   console.log('request was made: ' + req.url);
   res.writeHead(200, {'Content-type': 'application/json'});
   var myJson  = {
   	name: 'Lucas',
   	job: 'Boy programmer',
   	age: 19
   };
   res.end(JSON.stringify(myJson));
 });

 server.listen(3000, '127.0.0.1');
 console.log('server on port 3000');
