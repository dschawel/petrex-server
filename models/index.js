let mongoose = require('mongoose')

const MongoClient = require('mongodb').MongoClient;

let uri = process.env.MONGO_URI
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// connect to Mongodb( using Atlas)
mongoose.connect(uri)
  .then((() => console.log('MongoDB conneted...🏈')))
  .catch(err => console.log(err))

module.exports.User = require('./user')
module.exports.Pet = require('./pet')
