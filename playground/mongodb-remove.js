const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/user');


Todo.findByIdAndRemove('57').then((todo) => {
   console.log(todo);
});