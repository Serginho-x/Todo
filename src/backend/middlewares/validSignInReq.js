const yup = require('yup');

const schema = yup.object().shape({  
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required()
  });
   
const validSignInReq = (req, res, next) => {
  schema.isValidSync(req.body) ? next () : res.status(401).json({
        message: 'Incorrect request data'
    });
  };
   
module.exports = validSignInReq