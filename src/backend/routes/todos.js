const router = require('express-promise-router')();
const { getAllTodos, addTodo, deleteTodo, updateTodo }  = require ('../controllers/todos');
const checkAuth = require('../middlewares/auth');

router.get('/todos', checkAuth, getAllTodos);
router.post('/todos', checkAuth, addTodo);
router.delete('/todos/:id', checkAuth, deleteTodo);
router.put('/todos/:id', checkAuth, updateTodo);

module.exports = router;
