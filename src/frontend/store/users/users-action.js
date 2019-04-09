import { userService } from '../_services';
import { history } from '../../../history';

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_REQUEST'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'
const GETALL_REQUEST = 'GETALL_REQUEST'
const GETALL_SUCCESS = 'GETALL_SUCCESS'
const GETALL_FAILURE = 'GETALL_FAILURE'

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(request({ email }));
        await userService.login(email, password)
        .then(
            user => { 
                dispatch(success(user));
                history.push('/');
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}

export const logout = () => {
    userService.logout();
    return { type: LOGOUT };
}

export const getAll = () => {
    return async (dispatch) => {
        dispatch(request());
        await userService.getAll()
        .then(
            users => dispatch(success(users)),
            error => dispatch(failure(error))
        );            
    };

    function request() { return { type: GETALL_REQUEST } }
    function success(users) { return { type: GETALL_SUCCESS, users } }
    function failure(error) { return { type: GETALL_FAILURE, error } }
}