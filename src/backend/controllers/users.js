const router = require('express-promise-router')();
const User = require('../models/user-schema');
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')

router.register = async (req, res) => {
    const { firstName, lastName, nickName, email, password } = req.body;
    const userData = { firstName, lastName, nickName, email, password };  
    const userDb = await User.findOne({ email });
    if(!userDb){
      const user = new User(userData);  
      const err = user.joiValidate(userData);
      if (err.error) throw err;      
      const users = await user.save();
        return res.json(users) 
    } else {
      return res.status(401).json({ message: 'User exist' })
    }
  }

router.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email });
    if(!user) {
      return res.status(401).json({ message: 'Wrong password' });
    }
    const isValid = bcrypt.compareSync(password, user.password);
    if (isValid){      
      const token = jwt.sign({ email }, 'Vice', { expiresIn: '1h' } )      
      return res.status(200).json({token});
    } else {
      return res.status(401).json({ message: 'Wrong password' });
    }
}

module.exports = router;