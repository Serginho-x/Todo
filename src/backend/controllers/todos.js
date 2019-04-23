const Todo = require('../models/Todo');

const getAllTodos = async (req, res) => {
   const todos = await Todo.find({userId: req.userId});
    return res.json(todos);    
}

const addTodo = async (req, res) => {
    const todoData = { text: req.body.text, userId: req.userId };
    const todo = await new Todo(todoData).save();
     return res.status(200).json(todo); 
}

const updateTodo = async (req, res) => {  
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
      return res.json(todo);
}

const deleteTodo = async (req, res) => { 
    const todos = await Todo.findByIdAndRemove(req.params.id);
      return res.json(todos);  
}

module.exports = {getAllTodos, addTodo, updateTodo, deleteTodo};