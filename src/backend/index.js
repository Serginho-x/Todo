const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();


mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true });
app.use(bodyParser.json());
app.use(cors());
app.use('/api', require('./todo-api'));
app.use(function(err, req, res, next){
	//console.log(err);
	res.status(400).send({error: err.message})
})


app.listen(process.env.port||4000, function(){
	console.log('go');
})