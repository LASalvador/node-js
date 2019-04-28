console.log('hello world');

var time = 0;
var timer = setInterval(function(){
  time+=2;
  console.log(time +' seconds have passed before hello world');

  if(time > 5){
    clearInterval(timer);
  }
}, 1000);
console.log(__filename);
console.log(__dirname);
