//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    
    if (err) {
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
//    db.collection('Todos').find({_id: new ObjectID('5befa9b916d71f26fd4169b2')
//    }).toArray().then((docs) => {
//        
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//        
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });
    
//    db.collection('Todos').find().count().then((count) => {
//        
//        console.log('Todos count:', count);
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });
    
    db.collection('Users').find({name: 'Jignesh', age: 30}).toArray().then((docs) => {
    	
	   console.log('Todos');
       console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });
    
    //client.close();
});
