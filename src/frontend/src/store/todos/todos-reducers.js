import * as type from './todos-actions'

const initialState = {
    todoList: [],
    filter: 'All',
    searchTodos: ''
}
  
export default function Todos(state=initialState, action){ 
    const payload = action.payload; 
    switch(action.type){        
        case type.FETCH_TODOS_SUCCESS: {                     
            return {...state, todoList: payload}
        }
        case type.ADD_TODO_SUCCESS: {            
            return {...state, todoList: [...state.todoList, payload]}
        }  
        case type.EDIT_TODO: {
            const todoList = state.todoList.map(todo =>
            todo._id === payload._id ? { ...todo, text: payload.text} : todo)
             return {...state, todoList}
        }
        case type.DELETE_TODO: {
            const todoList = state.todoList.filter(todo => todo._id !== payload)
             return {...state, todoList}
        }
        case type.TOGGLE_SWITCH: {
            const todoList = state.todoList.map(todo =>
            todo._id === payload._id ? { ...todo, done: payload.done} : todo)
             return {...state, todoList}
        }
        case type.SEARCH_TODOS_SUCCESS: {
             return {...state, searchTodos: payload}
        }
        case type.FILTER_TODO: {
             return {...state, filter: payload.filter}      
        }
        default:
             return state
    }
}
    