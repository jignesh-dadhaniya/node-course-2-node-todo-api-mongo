//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    
	if (err) {
		console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
	
//	db.collection('Todos').insertOne({
//		text: 'Something to do',
//		completed: false
//	}, (err, result) => {
//		
//		if (err) {
//			return console.log('Unable to insert todo', err);
//		}
//		
//		console.log(JSON.stringify(result.ops, undefined, 2));
//	});
	
//	db.collection('Users').insertOne({
//		name: 'Jignesh',
//		age: 35,
//		location: 'Vadodara'
//	}, (err, result) => {
//		
//		if (err) {
//			return console.log('Unable to insert Users', err);
//		}
//		
//		console.log(JSON.stringify(result.ops, undefined, 2));
//	});
	
	client.close();
});