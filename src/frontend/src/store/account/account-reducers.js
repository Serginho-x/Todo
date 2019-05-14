import * as type from './account-actions';

const initialState = {
    token: null
}
  
export default function Account(state = initialState, action){
switch (action.type) {
    case type.ADD_TOKEN:
    return {
        ...state,
        token: action.payload.token
    }
    case type.REMOVE_TOKEN:
    return {
        ...state,
        token: null
    }
    default:
    return state
}
}