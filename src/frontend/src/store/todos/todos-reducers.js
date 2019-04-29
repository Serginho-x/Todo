import type from './types'

const initialState = {
    todoList: [],
    filter: 'All'
}
  
export default function Todos(state=initialState, action){    
    switch(action.type){
        case type.FETCH_TODOS_SUCCESS: {                     
            return {
                ...state,
                todoList:  action.payload.data
            }}
        case type.ADD_TODO_SUCCESS: {
            const payload = action.payload.data;
            return { 
                ...state,
                todoList: [...state.todoList, {
                          _id: payload._id,
                          text: payload.text,
                          done: false,
                          userId: payload.userId
                        }]
            }}  
        case type.EDIT_TODO: {
            const payload = action.payload.data;
            const todoList = state.todoList.map(todo =>
            todo._id === payload._id ? { ...todo, text: payload.text } : todo)
            return {
                ...state,
                todoList
            }}
        case type.DELETE_TODO: {
            const todoList = state.todoList.filter(todo => 
            todo._id !== action.payload.id )
            return {
                ...state,
                todoList
            }}
        case type.TOGGLE_SWITCH: {
            const payload = action.payload.data;
            const todoList = state.todoList.map(todo =>
            todo._id === payload._id ? { ...todo, done: payload.done } : todo)
            return {
                ...state,
                todoList
            }}
        case type.SEARCH_TODOS_SUCCESS: {
            return {
              ...state,
              todoList:  action.payload.todoList
            }      
        }
        case type.FILTER_TODO: {
            return {
              ...state,
              filter:  action.payload.filter
            }      
        }
        default:
            return state
    }
}


    