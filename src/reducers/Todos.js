
const initialState = {
    todoList: [{id: 15, text: '3'}, {id: 25, text: '4'}, {id:35, text: '5'}],
  }
  
export default function Todos(state=initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            let payload = action.todo
            console.log('reducer', payload)
            return Object.assign({}, state, {
                todoList:        
                {
                  id: payload.id,
                  text: payload.text
                }
            });
        case 'DELETE_TODO':
            return(console.log('delete'));
        default:
            return state
    }
}
