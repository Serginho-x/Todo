const router = require('express-promise-router')();
const {register, login} = require ('../controllers/accounts');
const validSignUpReq = require('../middlewares/validSignUpReq')
const validSignInReq = require('../middlewares/validSignInReq')

router.use('/accounts/register', validSignUpReq, register)
router.use('/accounts/login', validSignInReq, login)

module.exports = router
