let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { loggedIn: true, user } : {};

export default function Accounts(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        user: action.user
      };
    case 'REGISTER_SUCCESS':
      return {
        user: action.user
      };
    case 'REGISTER_FAILURE':
      return {};
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
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