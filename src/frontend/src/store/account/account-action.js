import {showModal, hideModal} from '../modals/modals-actions';
import axios from 'axios';
import history from '../../history'

const REGISTER_REQUEST = 'REGISTER_REQUEST'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAILURE = 'REGISTER_FAILURE'
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'

export const signUp = (form) => {
    return async (dispatch) => {
        await dispatch(request( form.email ));
        const response = await axios.post(`http://localhost:4000/api/accounts/register/`, {form});
        if (response.status !== 401){  
                dispatch(success(response));               
                history.push('/');
            } else {   
                dispatch(showModal({
                    open: true,
                    title: 'Error',
                    message: 'User with this email already exist',
                    closeModal: () => dispatch(hideModal())
                  }, 'alert'))     
                dispatch(failure(response.error));
            }        
    };

    function request(user) { return { type: REGISTER_REQUEST, user } }
    function success(user) { return { type: REGISTER_SUCCESS, user } }
    function failure(error) { return { type: REGISTER_FAILURE, error } }
}   

export const signIn = ({email, password}) => {
    return async (dispatch) => {
        await dispatch(request( email ));
        const response = await axios.post(`http://localhost:4000/api/accounts/login/`, {email, password});

        if (response.status !== 401){
                localStorage.setItem('user', JSON.stringify(response.data))
                dispatch(success(response.data));
                history.push('/');
            } else { 
                dispatch(showModal({
                    open: true,
                    title: 'Error',
                    message: 'User doesn\'t exist or wrong password',
                    closeModal: () => dispatch(hideModal())
                  }, 'alert'))              
                dispatch(failure(response.error));
            }        
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

export const logout = () => {
    localStorage.removeItem('user');
    return { type: LOGOUT };
}
