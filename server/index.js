
let apiRoutes = require("../api-routes")

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const express = require('express')
var MongoClient = require('mongodb').MongoClient

const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 


//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/testDB';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('Hello World!!'))

app.use('/api', apiRoutes)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

