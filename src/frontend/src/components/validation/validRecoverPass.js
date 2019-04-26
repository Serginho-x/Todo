import * as yup from 'yup';

const validRecoverPass = yup.object().shape({   
    email: yup.string()
        .email('E-mail is not valid!')
        .required('Enter email')
  });

  export default validRecoverPass