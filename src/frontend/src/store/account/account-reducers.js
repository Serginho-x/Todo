export default function Accounts(state = {}, action) {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {};
    case 'REGISTER_SUCCESS':
      return {};
    case 'REGISTER_FAILURE':
      return {};
    case 'LOGIN_REQUEST':
      return {};
    case 'LOGIN_SUCCESS':
      return {};
    case 'LOGIN_FAILURE':
      return {};
    case 'RECOVER_PASS_REQUEST':
      return {};
    case 'RECOVER_PASS_SUCCESS':
      return {};
    case 'RECOVER_PASS_FAILURE':
      return {};
    case 'CHANGE_PASS_REQUEST':
      return {};
    case 'CHANGE_PASS_SUCCESS':
      return {};
    case 'CHANGE_PASS_FAILURE':
      return {};
    case 'LOGOUT':
      return {};
    default:
      return state
  }
}