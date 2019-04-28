var fs = require('fs');
// reading Sync
var readMe =  fs.readFileSync('./teste.txt','utf8');
console.log(readMe);
// write sync
fs.writeFileSync('./writable.txt', readMe);



// read Async
fs.readFile('./teste.txt','utf8', function (err, data){
  console.log(data);
  // write Async
  fs.writeFile('writeMe.txt', data);
});
