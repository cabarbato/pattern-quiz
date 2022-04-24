const path = require('path');
const express = require('express');
const { spawn } = require('child_process');
const { MongoClient } = require('mongodb');

require('dotenv').config();

const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;


let collection = null;

const uri = `mongodb+srv://${process.env["DB_USERNAME"]}:${process.env["DB_PASSWORD"]}@cluster0.ck7kb.mongodb.net/${process.env["DATABASE"]}`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client
  .connect((err) => {
    collection = client.db(process.env["DATABASE"]).collection(process.env["DB_COLLECTION"]);
    // perform actions on the collection object
    const data = collection.find({}) //"_id": process.env["DB_ID"]
    console.log(data)
    client.close();
  });

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
   /* const year = new Date().getFullYear(),
      python = spawn('python', ['server/main.py', toString(year)]);

   python.stdout.on('data', function (d) {
      console.log(`Begin data collection for year ${year}`);
   });

   python.on('close', (d) => {
      console.log(`finished data collection: ${d}`);
   }); */
});