import { combineReducers } from 'redux'
import Todos from './todos/todos-reducers'
import Auth from './users/auth-reducers';

export const rootReducer = combineReducers({
    todos: Todos,
    auth: Auth
})