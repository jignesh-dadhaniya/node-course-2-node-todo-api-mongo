var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp2', {useNewUrlParser: true});

module.exports = {mongoose};