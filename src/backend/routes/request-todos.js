const router = require ('../controllers/todos')

router.get('/', router.getAllTodos)
router.post('/', router.addTodo)
router.delete('/:id', router.deleteTodo)
router.put('/:id', router.updateTodo)

module.exports = router
