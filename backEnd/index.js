const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongooes = require('mongoose');
const uersRoute = require('./routes/users');
const exercisesRoute = require('./routes/exercises');

require('dotenv').config();

const app = express();
//const port = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

//connecting to mlab using mongooes
//const uri = process.env.ATLAS_URI;
const db = mongooes.connect("mongodb://root123:root123@ds023088.mlab.com:23088/demodata",
 {useNewUrlParser: true },
  (error) =>{
    if(error){
        console.log('internal server error with mlab ');
    }else{
        console.log('Mongooes is connected to mlab DB');
    }
 });

 app.all('*', function(req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/users', uersRoute);
app.use('/exercise', exercisesRoute);
app.get('/api', (req, res) =>{
    return res.json('This is a working routes');
});



//listing port
app.listen(5000, ()=>{
    console.log(`server is running on port 5000`);
});
