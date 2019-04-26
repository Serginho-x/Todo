const router = require('express-promise-router')();
const { register,
        login,
        confirmation,
        recoverPass, 
        changePass } = require ('../controllers/accounts');
const validSignUpReq = require('../middlewares/validSignUpReq');
const validSignInReq = require('../middlewares/validSignInReq');

router.use('/accounts/register', validSignUpReq, register);
router.use('/accounts/login', validSignInReq, login);
router.use('/accounts/confirmation/:token', confirmation);
router.use('/accounts/recoverPass', recoverPass);
router.use('/accounts/changePass', changePass)

module.exports = router;
