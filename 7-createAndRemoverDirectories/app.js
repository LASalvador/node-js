var fs = require('fs');
// removing a file
//fs.unlink('teste.txt');


// sync directories
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');


// fs.mkdir('stuff', function() {
//   console.log('Dir created');
// });
fs.unlink('./stuff/*.*', function(){
    fs.rmdir('stuff');
})
