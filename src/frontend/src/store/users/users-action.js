import { _login, _logout} from '../../services/user.service';
import history from '../../history'

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_REQUEST'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(request({ email }));
        await _login(email, password)
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
    _logout();
    return { type: LOGOUT };
}