let yup = require('yup');

let schema = yup.object().shape({  
    email: yup.string().email().required()
  });
   
const validRecoverPassReq = async (req, res, next) => { 
    const request = await schema.isValid(req.body)
    request ? next () : res.status(400).json({ message: 'Incorrect request data'});
  };
   
module.exports = validRecoverPassReq