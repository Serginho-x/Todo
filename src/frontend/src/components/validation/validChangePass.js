import * as yup from 'yup';

const validChangePass = yup.object().shape({  
    password: yup.string()
        .min(6, `Password has to be longer than 6 characters!`)
        .max(20, `Password has to be shorter than 20 characters!`)
        .required('Enter password'),
    confirmedPassword: yup.string()
        .min(6, `Password has to be longer than 6 characters!`)
        .max(20, `Password has to be shorter than 20 characters!`)
        .required('Enter password')
  });

  export default validChangePass