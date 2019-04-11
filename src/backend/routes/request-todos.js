const express = require('express');
const router = express.Router();

const { getAllTodos, addTodo, deleteTodo, updateTodo } = require( '../controllers/todos')

router.get('/', getAllTodos)
router.post('/', addTodo)
router.delete('/:id', deleteTodo)
router.put('/:id', updateTodo)

module.exports = router
