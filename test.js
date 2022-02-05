import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://root:root@cluster0.gfluf.mongodb.net/motion?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    var obj = {"count": 5}
  const collection = client.db("motion").collection("wifi");
  collection.insertOne(obj, function(err, res) {
      console.log(err)
      console.log("1 Document inserted")
  })

  // perform actions on the collection object
});