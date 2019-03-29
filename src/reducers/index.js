import { combineReducers } from 'redux'
import  Todos from './Todos'


export const rootReducer = combineReducers({
    todos: Todos,
})