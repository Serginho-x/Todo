import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Todos from './todos/todos-reducers';
import Account from './account/account-reducers';
import Modals from './modals/modals-reducers';

export const rootReducer = combineReducers({
    todos: Todos,
    accounts: Account,
    modals: Modals
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
