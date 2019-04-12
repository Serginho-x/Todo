const router = require('express-promise-router')();
const User = require('../models/user-schema');

router.register = async (req, res) => {
    const { firstName, lastName, nickName, email, password } = req.body  
    const userData = { firstName, lastName, nickName, email, password }      
    const user = new User(userData)  ;  
    const err = user.joiValidate(userData);
    if (err.error) throw err;      
    const users = await user.save();
      return res.json(users)    
  }

router.login = async (req, res) => {
const { email, password } = req.body
    const user = await User.findOne({ email })
    if(!user) {
    res.status(401).json({ message: 'Wrong password' })
    }
    const isValid = bcrypt.compareSync(password, user.password)    
    if(isValid) {
    const tokens = await updateTokens(user._id)
    res.json(tokens)
    } else {
    res.status(401).json({ message: 'invalid cred' })
    }

}

module.exports = router;