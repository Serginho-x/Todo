const express = require('express');
const router = express.Router();
const Todo = require('../models/todo-schema');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  }
  catch(err) {
    res.status(500).json(err)
  }
}

 const addTodo = async (req, res) => {
  try {
    const todoItem = new Todo({ text: req.body.text, done: false });
    const todo = await todoItem.save();
    res.json(todo);
  }
  catch(err) {
    res.status(500).json(err)
  }
}

 const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(todo);
  }
  catch(err) {
    res.status(500).json(err)
  }
}

const deleteTodo = async (req, res) => {
  try {
    const todos = await Todo.findByIdAndRemove(req.params.id );
    res.json(todos);
  }
  catch(err) {
    res.status(500).json(err)
  }
}

module.exports = {getAllTodos, updateTodo, addTodo , deleteTodo};