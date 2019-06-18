const express = require('express');

var app = express();


app.get('/',function(req, res){
	res.send('This is the home page');
});
app.get('/contact', function(req,res){
	res.send('This is the contact page');
})
app.get('/profile/:id', function(req,res){
	var id = req.params.id;
	res.send('This is page of the contact' + id);
})

app.listen(8081);