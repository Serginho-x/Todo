import { combineReducers } from 'redux'
import Todos from './todos/todos-reducers'
import Users from './users/users-reducers';
import Modals from './modals/modals-reducers';

export const rootReducer = combineReducers({
    todos: Todos,
    users: Users,
    modals: Modals
})