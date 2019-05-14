const yup = require('yup');

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    nickName: yup.string().max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required()
  });
   
const validSignUpReq = (req, res, next) => {
  schema.isValidSync(req.body) ? next () : res.status(401).json({
        message: 'Incorrect request data'
    });
};
   
module.exports = validSignUpReq