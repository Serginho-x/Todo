const express = require('express');
const router = express.Router();
const Todo = require('./models/todo-schema');


router.get('/todo/:id', function(req, res, next){
    Todo.findById({_id: req.params.id}).then(function(todo){
    res.send(todo).catch(next);
})
})
;
router.post('/todo', function(req,res, next){
    Todo.create({ text: req.body.name}).then(function(todo){
  res.send(todo);
  console.log(todo);
}).catch(next);
});

router.put('/todo/:id', function(req, res, next){
  console.log("update");
  Todo.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Todo.findOne({_id: req.params.id}).then(function(todo){
            res.send(todo);
        });
    }).catch(next);
});

router.delete('/todo/:id', function(req,res, next){
  console.log("delete");
  Todo.findByIdAndRemove({_id: req.params.id}).then(function(todo){
		res.send(todo);
	}).catch(next);

});

module.exports = router;