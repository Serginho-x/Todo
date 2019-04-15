let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};
export default function Auth(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        user: action.user
      };
    case 'REGISTER_SUCCESS':
    console.log('success')
      return {
        user: action.user
      };
    case 'REGISTER_FAILURE':
    console.log('fail')
      return {};
    case 'LOGIN_REQUEST':
      return {
        loggingIn: true,
        user: action.user
      };
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user
      };
    case 'LOGIN_FAILURE':
      return {};
    case 'LOGOUT':
      return {};
    default:
      return state
  }
}