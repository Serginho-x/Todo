import * as yup from 'yup';

const validSignUp = yup.object().shape({
    firstName: yup.string()
        .required('Enter First name'),
    lastName: yup.string()
        .required('Enter Last name'),
    nickName: yup.string()
        .max(20, `Password has to be shorter than 20 characters!`)
        .required('Enter Nickname'),
    email: yup.string()
        .email('E-mail is not valid!')
        .required('Enter email'),
    password: yup.string()
        .min(6, `Password has to be longer than 6 characters!`)
        .max(20, `Password has to be shorter than 20 characters!`)
        .required('Enter password')
  });

  export default validSignUp