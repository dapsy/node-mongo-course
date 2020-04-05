// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID;
// console.log(obj);
// var user = {name: "Adedapo", age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err) {
   return console.log('Unable to connect to mongodb server')
}
console.log('Connected to MongoDB server');
//const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//     text: "Something to do",
//     completed: false
// }, (err, result) => {
//     if (err) {
//         return console.log('Unable to insert Todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
// });

//
// db.collection('Users').insertOne({
//     name: 'Adedapo Fabowale',
//     age: 29,
//     location: 'Lagos',
//     completed: false
// }, (err, result) => {
//     if (err) {
//         return console.log('Unable to insert Users', err);
//     }
//     console.log(result.ops[0]._id);
// });
// client.close();
// });

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// (async function() {
//   // Connection URL
//   const url = 'mongodb://localhost:27017/TodoApp';
//   // Database Name
//   const dbName = 'TodoApp';
//   const client = new MongoClient(url, { useNewUrlParser: true });

//   try {
//     // Use connect method to connect to the Server
//     await client.connect();

//     const db = client.db(dbName);
//   } catch (err) {
//     console.log(err.stack);
//   }

  client.close();
 });