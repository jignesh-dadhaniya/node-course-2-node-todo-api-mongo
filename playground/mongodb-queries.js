const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');

var id = '5bf69df86a72b176c51e076';

if (!ObjectID.isValid(id)) {
	console.log('ID is not valid');
}

//Todo.find({
//	_id: id
//}).then((todos) => {
//	console.log('Todos', todos);
//});
//
//Todo.findOne({
//	_id: id
//}).then((todos) => {
//	console.log('Todos findbyOne', todos);
//});

Todo.findById(id).then((todos) => {
	
	if (!todos) {
		return console.log('Id not found');
	}
	
	console.log('TodoById', todos);
}).catch((e) => {
	console.log(null);
});