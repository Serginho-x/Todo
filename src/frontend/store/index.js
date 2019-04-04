import { combineReducers } from 'redux'
import  Todos from './todos/todos-reducers'

export const rootReducer = combineReducers({
    todos: Todos,
})