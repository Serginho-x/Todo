const express = require('express');
const router = express.Router();
const User = require('../models/user-schema');

 const register = async (req, res) => {
    const { email, password } = req.body  
    try {
      const userData = await new User({ email, password })  
      const user = await userData.save()  
      res.json(user)
    }
    catch(err) {
      res.status(500).json(err)
    }
  }

const login = async (req, res) => {
const { email, password } = req.body
try {
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
catch(err) {
    res.status(500).json(err)
}
}



module.exports = {register, login};