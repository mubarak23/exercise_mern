const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongooes = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

//connecting to mlab using mongooes
const uri = process.env.ATLAS_URI;
mongoes.connect(uri,{useNewUrlParser: true, userCreateIndex: true });
const connection = mongooes.connection;
connection.once('open', () => {
    console.log("MongoDB Database Connection was established");
}) ;




//listing port
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
