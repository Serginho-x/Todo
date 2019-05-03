import { combineReducers } from 'redux'
import Todos from './todos/todos-reducers'
import Account from './account/account-reducers'
import Modals from './modals/modals-reducers';

export const rootReducer = combineReducers({
    todos: Todos,
    accounts: Account,
    modals: Modals
})