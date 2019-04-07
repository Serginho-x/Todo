const express = require('express');
const router = express.Router();
const Todo = require('./models/todo-schema');
const mongoose = require( 'mongoose')

router.get('/todolist/:id', function(req, res, next){
    Todo.findById({_id: req.params._id}).then(function(todo){
    res.send(todo).catch(next);
})
});

router.get('/todolist', function(req, res, next){
  Todo.find({}).then(function(todo){
    console.log(todo);
  res.send(todo).catch(next);
})
});

router.post('/todolist', function(req,res, next){
    Todo.create({ 
      _id: req.body.id,
      text: req.body.text,
      done: false
    }).then(function(todo){
  res.send(todo);
  console.log(todo);
}).catch(next);
});

router.put('/todolist/:id', function(req, res, next){
  console.log("update");
  Todo.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Todo.findOne({_id: req.params.id}).then(function(todo){
            res.send(todo);
        });
    }).catch(next);
});

router.delete('/todolist/:id', function(req,res, next){
  console.log("delete", req);
  Todo.findByIdAndRemove({_id: req.params.id}).then(function(todo){
		res.send(todo);
	}).catch(next);

});

module.exports = router;