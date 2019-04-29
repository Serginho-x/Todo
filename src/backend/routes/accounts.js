const router = require('express-promise-router')();
const { register,
        login,
        confirmation,
        recoverPass, 
        changePass } = require ('../controllers/accounts');
const validSignUpReq = require('../middlewares/validSignUpReq');
const validSignInReq = require('../middlewares/validSignInReq');
const validRecoverPassReq = require('../middlewares/validRecoverPassReq');
const validChangePassReq = require('../middlewares/validChangePassReq');

router.use('/accounts/register', validSignUpReq, register);
router.use('/accounts/login', validSignInReq, login);
router.use('/accounts/confirmation/:token', confirmation);
router.use('/accounts/recoverPass', validRecoverPassReq, recoverPass);
router.use('/accounts/changePass', validChangePassReq, changePass);

module.exports = router;
