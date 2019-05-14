const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const Account = require('../models/Account');
const {confirmEmail, recoverPassword} = require('../helpers/sendmail');

const register = async (req, res) => { 
  const account = await Account.findOne({ email : req.body.email});
  if(!account){
    const user = await Account.create(req.body);
    const token = jwt.sign({id: user.id}, 'EMAIL_SECRET', {expiresIn: '1d'});
    const url = `http://localhost:4000/api/accounts/confirmation/${token}`;
    confirmEmail(user.email, url); 
      return res.status(200).json(user);
  } else {
    return res.status(401).json({ message: 'User exist' });
  }
}

const login = async (req, res) => {
  const account = await Account.findOne({ email : req.body.email});
    if (!account){ 
      return res.status(401).json({ message: 'User doesn`t exist or incorrect password' });
    }
    if (!account.confirmed) {
      return res.status(401).json({ message: 'Please confirm your email to login' });
    }
    const isValid = bcrypt.compareSync(req.body.password, account.password);
    if (account && isValid){      
      const token = jwt.sign({ userId: account.id }, 'Vice', { expiresIn: '1h' } ); 
        return res.status(200).json(token);
    } else {
      return res.status(401).json({ message: 'User doesn`t exist or incorrect password' });
    }
  } 

const confirmation = async (req, res) => {
    const user = jwt.verify(req.params.token, 'EMAIL_SECRET');
    await Account.findByIdAndUpdate(user.id, { confirmed: true }, {new: true}); 
     return res.redirect('http://localhost:3000/sign-in');
}

const recoverPass = async (req, res) => { 
  const account = await Account.findOne({ email : req.body.email});
  const salt = await bcrypt.genSalt(12);
  const token = await bcrypt.hash(account.email, salt).catch((err) => next(err));
  await Account.findByIdAndUpdate( account._id, { reset_password_token: token,  reset_password_expires: Date.now() + 86400000 }, {new: true});
  const url = `http://localhost:3000/change-password?token=${token}`;   
  if(account){
    recoverPassword(account.email, url);
      return res.status(200).json('done');
  } else {
    return res.status(401).json({ message: 'User doesn`t exist' });
  }
}

const changePass = async (req, res) => {
  const account = await Account.findOne({
    reset_password_token: req.body.token,
    reset_password_expires: {
      $gt: Date.now()
    }
  })  
  if(account){
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(req.body.password, salt).catch((err) => console.log(err));
      await Account.findByIdAndUpdate(account.id, {
        password : hash,
        reset_password_token : '',
        reset_password_expires : null 
      }, {new: true});      
      return res.status(200).json(account) 
    } else {
      return res.status(401).json({ message: 'Password reset token is invalid or has expired' });
  }
}

module.exports = {register, login, confirmation, recoverPass, changePass}