const router = require('express-promise-router')();
const { getAllTodos, addTodo, deleteTodo, updateTodo }  = require ('../controllers/todos')
const checkAuth = require('../middlewares/auth')

router.get('/todos',  getAllTodos)
router.post('/todos',  addTodo)
router.delete('/todos/:id', deleteTodo)
router.put('/todos/:id',  updateTodo)

module.exports = router
