const router = require ('../controllers/users')

router.post('/register', router.register)
router.post('/login', router.login)

module.exports = router
