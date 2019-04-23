const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const Account = require('../models/Account');

const register = async (req, res) => {
    const account = await Account.findOne({ email : req.body.form.email});
    if(!account){      
      const user = await new Account(req.body.form).save();
        return res.status(200).json(user) 
    } else {
      return res.status(401).json({ message: 'User exist' })
    }
  }

const login = async (req, res) => {
    const account = await Account.findOne({ email : req.body.email});
    if (account){  
      const isValid = bcrypt.compareSync(req.body.password, account.password);
      if (account && isValid){      
        const token = jwt.sign({ userId: account.id }, 'Vice', { expiresIn: '1h' } );      
          return res.status(200).json(token);
      } else {
        return res.status(401).json({ message: 'User doesn`t exist or incorrect password' });
      }
    } else {
      return res.status(401).json({ message: 'User doesn`t exist or incorrect password' });
    }
}

module.exports = {register, login};