const initialState = {
    todoList: [],
  }
  
export default function Todos(state=initialState, action){    
    switch(action.type){
        case 'FETCH_TODOS_SUCCESS': {
            return {
                ...state,
                todoList:  Object.values(action.payload.data)
            }}
        case 'ADD_TODO': {
            const payload = action.payload;
            return { 
                ...state,
                todoList: [...state.todoList, {
                          id: payload.id,
                          text: payload.text,
                          done: false
                        }]
            }}  
        case 'EDIT_TODO':{
        const todoList = state.todoList.map(todo =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
            return {
                ...state,
                todoList
            }}
        case 'DELETE_TODO': {
            const todoList = state.todoList.filter(todo => todo.id !== action.payload.id )
            return {
                ...state,
                todoList
            }}
        case 'TOGGLE_SWITCH': {
            const todoList = state.todoList.map(todo =>
            todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo)
            return {
                ...state,
                todoList
            }}

        case 'SEARCH_TODOS_SUCCESS': {
            return {
              ...state,
              todoList:  action.payload.todoList
            }      
        }
        default:
            return state
    }
}


    