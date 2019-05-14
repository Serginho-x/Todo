import {showModal, hideModal} from '../modals/modals-actions';
import axios from 'axios';
import {history} from '../../App'

export const signUp = (form) => {
    return async (dispatch) => {       
        try {
            await axios.post(`http://localhost:4000/api/accounts/register/`, form);
            dispatch(showModal({
                open: true,
                title: 'Done',
                message: 'We send you message on e-mail',
                closeModal: () => dispatch(hideModal())
            }))                             
            history.push('/');
        }
        catch(error) {   
            dispatch(showModal({
                open: true,
                title: 'Alert',
                message: error.response.data.message,
                closeModal: () => dispatch(hideModal())
            }))
        }        
    };  
}  

export const ADD_TOKEN = 'ADD_TOKEN'
export const signIn = ({email, password}) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/accounts/login/`, {email, password});            
            localStorage.setItem('token', response.data);
            history.push('/');
            return {
                type: ADD_TOKEN,
                payload: {
                    token: response.data
                }
            }
        } 
        catch(error) {             
            dispatch(showModal({
                open: true,
                title: 'Alert',
                message: error.response.data.message,
                closeModal: () => dispatch(hideModal())
            }))
        }        
    };   
}

export const recoverPass = ({email}) => {
    return async(dispatch) => {
        try {
            await axios.post(`http://localhost:4000/api/accounts/recoverPass/`, {email});
            dispatch(showModal({
                open: true,
                title: 'OK',
                message: 'Check your e-mail for message with instructions',
                closeModal: () => dispatch(hideModal())
            })) 
        }
        catch(error) {
            dispatch(showModal({
                open: true,
                title: 'Alert',
                message: error.response.data.message,
                closeModal: () => dispatch(hideModal())
            })) 
        }
    }
}

export const changePass = (password, token) => {
    return async(dispatch) => {
        try {
            console.log(password, token)
            await axios.post(`http://localhost:4000/api/accounts/changePass/`, {password, token}); 
            history.push('/');
        }
        catch(error) {
            dispatch(showModal({
                open: true,
                title: 'Alert',
                message: error.response.data.message,
                closeModal: () => dispatch(hideModal())
            }))
        }
    }
}

export const REMOVE_TOKEN = 'REMOVE_TOKEN'
export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: REMOVE_TOKEN
    }
}