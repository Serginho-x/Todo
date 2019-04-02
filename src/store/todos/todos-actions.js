import axios from 'axios';
let nextTodoId=0

const ADD_TODO = 'ADD_TODO'
export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: {
          id: nextTodoId++,
          text: todo
        }
    }
  }

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = id => {
    return {
      type: DELETE_TODO,
      payload: {
        id
      }
    }
  }

const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const fetchTodosSuccess = data => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: {
      data
    }
  }
}

export const fetchAllTodos = () => { 
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:4000/todolist/`);
    dispatch(fetchTodosSuccess(response.data));
        }       
  };  

const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
export const toggleSwitch = id => {
  return {
    type: TOGGLE_SWITCH,
    payload: {
      id
    }
  }
}