//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    
    if (err) {
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    	console.log(result);
    });
    
    // deleteOne();
    
    // findOneAndDelete();
    
    //client.close();
});
