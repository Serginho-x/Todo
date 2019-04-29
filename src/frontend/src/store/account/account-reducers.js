import type from './types'
export default function Accounts(state = {}, action) {
  switch (action.type) {
    case type.REGISTER_REQUEST:
      return {};
    case type.REGISTER_SUCCESS:
      return {};
    case type.REGISTER_FAILURE:
      return {};
    case type.LOGIN_REQUEST:
      return {};
    case type.LOGIN_SUCCESS:
      return {};
    case type.LOGIN_FAILURE:
      return {};
    case type.RECOVER_PASS_REQUEST:
      return {};
    case type.RECOVER_PASS_SUCCESS:
      return {};
    case type.RECOVER_PASS_FAILURE:
      return {};
    case type.CHANGE_PASS_REQUEST:
      return {};
    case type.CHANGE_PASS_SUCCESS:
      return {};
    case type.CHANGE_PASS_FAILURE:
      return {};
    case type.LOGOUT:
      return {};
    default:
      return state
  }
}