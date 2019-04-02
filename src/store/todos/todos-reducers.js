const initialState = {
    todoList: [],
  }
  
export default function Todos(state=initialState, action){    
    switch(action.type){
        case 'FETCH_TODOS_SUCCESS':
            return {
                ...state,
                todoList:  Object.values(action.payload.data)
            }
        case 'ADD_TODO':    
            const payload = action.payload;
            return { 
                ...state,
                todoList: [...state.todoList, {
                          id: payload.id,
                          text: payload.text,
                          done: false
                        }]
            };  
        case 'EDIT_TODO':
            return(console.log('edit'));
        case 'DELETE_TODO':
            return(console.log('delete'));
        case 'TOGGLE_SWITCH':
             state.todoList.map(todo =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo) 
            return {
                state
            }
        default:
            return state
    }
}


    