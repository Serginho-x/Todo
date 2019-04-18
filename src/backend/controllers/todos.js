const router = require('express-promise-router')();
const Todo = require('../models/todo-schema');
const jwtDecode = require('jwt-decode');

router.getAllTodos = async (req, res) => {
   const todos = await Todo.find({});
    return  res.json(todos);    
}

router.addTodo = async (req, res) => {
    const { text, token } = req.body;
    const userId = jwtDecode(token).userId;
    const todoData = { text , done: false, userId };
    const todoItem = new Todo(todoData);
    const err = todoItem.joiValidate(todoData)
    if (err.error) {return  res.status(422).json(err)};      
    const todo = await todoItem.save();
     return res.json(todo); 
}

router.updateTodo = async (req, res) => {  
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
      return res.json(todo);
}

router.deleteTodo = async (req, res) => { 
    const todos = await Todo.findByIdAndRemove(req.params.id);
      return res.json(todos);  
}

module.exports = router;