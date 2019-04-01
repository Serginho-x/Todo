import axios from 'axios';
let nextTodoId=0

export const AddTodo = todo => {
  console.log(todo);
    return {
        type: 'ADD_TODO',
        payload: {
          id: nextTodoId++,
          text: todo
        }
    }
  }

export const DeleteTodo = id => {
    return {
      type: 'DELETE_TODO',
      payload: {
        id
      }
    }
  }

export const GetAllTodosSuccess = data => {
  return {
    type: 'GET_ALL_TODOS_SUCCESS',
    payload: {
      data
    }
  }
}

export const GetAllTodos = () => { 
  return (dispatch) => {
    return axios.get(`http://localhost:4000/todolist/`)
      .then(response => {
            dispatch(GetAllTodosSuccess(response.data))
          })
        }       
  };  