import {showModal, hideModal} from '../modals/modals-actions';
import axios from 'axios';
import history from '../../history'
import type from './types'

export const signUp = (form) => {
    return async (dispatch) => {
        await dispatch(request());
        try {
            await axios.post(`http://localhost:4000/api/accounts/register/`, form);
            dispatch(showModal({
                open: true,
                title: 'Done',
                message: 'We send you message on e-mail',
                closeModal: () => dispatch(hideModal())
            }))   
            dispatch(success());               
            history.push('/');
        }
        catch(error) {   
            dispatch(showModal({
                open: true,
                title: 'Alert',
                message: error.response.data.message,
                closeModal: () => dispatch(hideModal())
            }))     
            dispatch(failure());
        }        
    };
    function request() { return { type: type.REGISTER_REQUEST } }
    function success() { return { type: type.REGISTER_SUCCESS } }
    function failure() { return { type: type.REGISTER_FAILURE } }
}  

export const signIn = ({email, password}) => {
    return async (dispatch) => {
        await dispatch(request());
        try {
            const response = await axios.post(`http://localhost:4000/api/accounts/login/`, {email, password});            
            localStorage.setItem('token', response.data)
            dispatch(success());
            history.push('/');
        } 
        catch(error) {             
            dispatch(showModal({
                open: true,
                title: 'Alert',
                message: error.response.data.message,
                closeModal: () => dispatch(hideModal())
            }))               
            dispatch(failure());
        }        
    };
    function request() { return { type: type.LOGIN_REQUEST } }
    function success() { return { type: type.LOGIN_SUCCESS } }
    function failure() { return { type: type.LOGIN_FAILURE } }
}

export const recoverPass = ({email}) => {
    return async(dispatch) => {
        await dispatch(request());
        try {
            const response = await axios.post(`http://localhost:4000/api/accounts/recoverPass/`, {email});
            const recoverToken = response.data;
            dispatch(showModal({
                open: true,
                title: 'OK',
                message: 'Check your e-mail for message with instructions',
                closeModal: () => dispatch(hideModal())
            }))   
            dispatch(success(recoverToken));  
        }
        catch(error) {
            dispatch(showModal({
                open: true,
                title: 'Alert',
                message: error.response.data.message,
                closeModal: () => dispatch(hideModal())
            }))     
            dispatch(failure());
        }
    }
    function request() { return { type: type.RECOVER_PASS_REQUEST } }
    function success() { return { type: type.RECOVER_PASS_SUCCESS } }
    function failure() { return { type: type.RECOVER_PASS_FAILURE } }
}

export const changePass = ({password, confirmedPassword, token}) => {
    return async(dispatch) => {
        await dispatch(request(password, confirmedPassword, token));
        try {
            await axios.post(`http://localhost:4000/api/accounts/changePass/`, {password, confirmedPassword, token});  
            dispatch(success());  
            history.push('/');
        }
        catch(error) {
            dispatch(showModal({
                open: true,
                title: 'Alert',
                message: error.response.data.message,
                closeModal: () => dispatch(hideModal())
            }))     
            dispatch(failure());
        }
    }
    function request() { return { type: type.CHANGE_PASS_REQUEST } }
    function success() { return { type: type.CHANGE_PASS_SUCCESS } }
    function failure() { return { type: type.CHANGE_PASS_FAILURE } }
}

export const logout = () => {
    localStorage.removeItem('token');
    return { type: type.LOGOUT };
}