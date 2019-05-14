const yup = require('yup');

const schema = yup.object().shape({  
    email: yup.string().email().required()
  });
   
const validRecoverPassReq = (req, res, next) => {
  schema.isValidSync(req.body) ? next () : res.status(401).json({
        message: 'Incorrect request data'
    });
  };
   
module.exports = validRecoverPassReq