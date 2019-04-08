const express = require('express');
const router = express.Router();
const Todo = require('./models/todo-schema');
const asyncMiddleware = require('./middleware/asyncMiddleware');

router.get('/todolist/:id', asyncMiddleware (async (req, res, next) => {
  let todo =  await Todo.findById({
    _id: req.params._id
  }); 
  res.json(todo);
  })
);

router.get('/todolist', asyncMiddleware (async (req, res, next) => {
  let todo =  await Todo.find({}); 
  res.json(todo);
  })
);

router.post('/todolist', asyncMiddleware (async (req, res, next) => {
  let todo =  await Todo.create({
    _id: req.body.id,
    text: req.body.text,
    done: false
  });    
  res.json(todo); 
  })
);

router.put('/todolist/:id', asyncMiddleware (async (req, res, next) => {
  await Todo.findByIdAndUpdate({
    _id: req.params.id
  }, req.body)
  let todo = await Todo.findOne({
    _id: req.params.id
  })
    res.json(todo);       
  })
);

router.delete('/todolist/:id', asyncMiddleware (async (req, res, next) => {
  let todo = await Todo.findByIdAndRemove({
    _id: req.params.id
  })
		res.json(todo);
	})
);

module.exports = router;