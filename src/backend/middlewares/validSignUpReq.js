let yup = require('yup');

let schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    nickName: yup.string().max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required()
  });
   
const validSignUpReq = async (req, res, next) => 
   { const request = await schema.isValid(req.body)
    request ? next () : res.status(400).json({ message: 'Incorrect request data'})
    };
   
module.exports = validSignUpReq