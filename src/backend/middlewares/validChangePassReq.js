let yup = require('yup');

let schema = yup.object().shape({  
    password: yup.string().min(6).max(20).required(),
    confirmedPassword: yup.string().min(6).max(20).required(),
  });
   
const validChangePassReq = async (req, res, next) =>  {
    const request = await schema.isValid(req.body);
    request ? next () : res.status(401).json({ message: 'Incorrect request data'});
  };
   
module.exports = validChangePassReq