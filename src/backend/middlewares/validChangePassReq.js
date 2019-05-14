const yup = require('yup');

const schema = yup.object().shape({  
    password: yup.string().min(6).max(20).required(),
    token: yup.string().required()
  });
   
const validChangePassReq = (req, res, next) => {
    schema.isValidSync(req.body) ? next () : res.status(401).json({
         message: 'Incorrect request data'
      });
  };
   
module.exports = validChangePassReq