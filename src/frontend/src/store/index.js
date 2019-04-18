import { combineReducers } from 'redux'
import Todos from './todos/todos-reducers'
import Accounts from './account/account-reducers';
import Modals from './modals/modals-reducers';

export const rootReducer = combineReducers({
    todos: Todos,
    account: Accounts,
    modals: Modals
})