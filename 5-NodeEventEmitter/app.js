var events = require('events');
var util = require('util')

//Mode 1
var myEmmiter = new events.EventEmitter();

myEmmiter.on('someEvent', function(msg){
  console.log(msg)
});

myEmmiter.emit('someEvent', 'event was emmitted');

//Mode 2
var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);


var james = new Person('James');
var mary  = new Person('mary');
var ryu = new Person('ruy');

var people = [james, mary, ryu];

people.forEach(function(person){
  person.on('speak', function(msg) {
    console.log(person.name + ' said:' + msg);
  });
});


james.emit('speak', 'hey');
ryu.emit('speak', 'I am hungry');
