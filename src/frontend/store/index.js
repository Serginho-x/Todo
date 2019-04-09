import { combineReducers } from 'redux'
import Todos from './todos/todos-reducers'
import Users from './users/users-reducers';

export const rootReducer = combineReducers({
    todos: Todos,
    users: Users
})