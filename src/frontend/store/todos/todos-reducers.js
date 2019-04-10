const initialState = {
    todoList: [],
    filter: 'All'
}
  
export default function Todos(state=initialState, action){    
    switch(action.type){
        case 'FETCH_TODOS_SUCCESS': { 
            console.log('1', action.payload.data)   ;
            console.log('2',Object.values(action.payload.data))          
            return {
                ...state,
                todoList:  action.payload.data
            }}
        case 'ADD_TODO_SUCCESS': {
            const payload = action.payload;
            return { 
                ...state,
                todoList: [...state.todoList, {
                          _id: payload.id,
                          text: payload.text,
                          done: false
                        }]
            }}  
        case 'EDIT_TODO': {
        const todoList = state.todoList.map(todo =>
            todo._id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
            return {
                ...state,
                todoList
            }}
        case 'DELETE_TODO': {
            const todoList = state.todoList.filter(todo => todo._id !== action.payload.id )
            return {
                ...state,
                todoList
            }}
        case 'TOGGLE_SWITCH': {
            const todoList = state.todoList.map(todo =>
            todo._id === action.payload.id ? { ...todo, done: action.payload.done } : todo)
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
        case 'FILTER_TODO': {
            return {
              ...state,
              filter:  action.payload.filter
            }      
        }
        default:
            return state
    }
}


    