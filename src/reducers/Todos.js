const initialState = {
    todoList: [],
  }
  
export default function Todos(state=initialState, action){    
    switch(action.type){
        case 'GET_ALL_TODOS_SUCCESS':
        let payload = action.payload.data;
            return {
                ...state,
                todoList:  Object.values(payload)
            }
        case 'ADD_TODO':    
            payload = action.payload;        
            console.log('reducer', payload)
            return { 
                ...state,
                todoList: []
            };  
        case 'DELETE_TODO':
            return(console.log('delete'));
        default:
            return state
    }
}


    