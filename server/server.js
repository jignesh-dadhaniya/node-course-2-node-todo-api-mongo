var express = require('express');
var bodyParser = require('body-parser');

var{mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

	//console.log(req.body.text);
	var todo = new Todo({
		text: req.body.text,
		completedAt: req.body.completedAt,
		completed: req.body.completed
	})
	
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.send(e);
	});
	//res.send('<h1>Hello Express!</h1>');
})

app.listen(3000, () => {
	console.log('Started on port 3000');
})

//var newTodo = new Todo({
//	text: 'Cook dinner'
//});
//
//newTodo.save().then((doc) => {
//	
//	console.log('Saved todo', doc)
//}, (e) => {
//	console.log('Unable to save todo');
//});

//var user1 = new User({
//	email: 'niraj@gmail.com',
//});
//
//user1.save().then((doc) => {
//	
//	console.log('Saved todo', doc)
//}, (e) => {
//	console.log('Unable to save todo', e);
//});

// User
// email - require - trim it - set type - set min length of 1