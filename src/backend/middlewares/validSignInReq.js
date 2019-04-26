let yup = require('yup');

let schema = yup.object().shape({  
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required()
  });
   
const validSignInReq = async (req, res, next) => { 
    const request = await schema.isValid(req.body)
    request ? next () : res.status(400).json({ message: 'Incorrect request data'})
  };
   
module.exports = validSignInReq