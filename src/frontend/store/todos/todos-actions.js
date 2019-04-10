import axios from 'axios';

const todolistUrl = 'http://localhost:4000/api/todolist';  // URL to todolist

const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const fetchAllTodos = () => { 
  return async (dispatch) => {
    try {
    const response = await axios.get(`${todolistUrl}`);
    dispatch(success(response.data));
    }   catch(error){
      console.log(Object.keys(error), error.message); 
    }}
    
    
    function success (data){
      return {
        type: FETCH_TODOS_SUCCESS, 
        payload: {
          data
        }
      }}
  };

export const addTodo = text => {
  return async (dispatch) => {
    const response = await axios.post(`${todolistUrl}`, {text});
    dispatch(addTodosSuccess(response.data));
    }
  }
 
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const addTodosSuccess = response => {  
  return {
    type: ADD_TODO_SUCCESS,
    payload: {
      id: response._id,
      text: response.text
    }
  }
}

const EDIT_TODO = 'EDIT_TODO'
export const editTodo = (id, text) => {
  axios.put(`${todolistUrl}/${id}`, {text});
  return {
    type: EDIT_TODO,
    payload: {
      id,
      text
    }
  }
}

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => {
  axios.delete(`${todolistUrl}/${id}`);
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}

const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
export const toggleSwitch = (id, done) => {
  axios.put(`${todolistUrl}/${id}`, {done: !done});
  return {
    type: TOGGLE_SWITCH,
    payload: {
      id,
      done: !done
    }
  }
}

const SEARCH_TODOS_SUCCESS = 'SEARCH_TODOS_SUCCESS'
export const searchTodosSuccess = todoList => {
  return {
    type: SEARCH_TODOS_SUCCESS,
    payload: {
      todoList
    }
  }
}

export const searchTodo = text => {
  return async (dispatch) => {
    const response = await axios.get(`${todolistUrl}`);
    const todoList = response.data.filter((todo) => todo.text.toLowerCase().includes(text.toLowerCase()))
      dispatch(searchTodosSuccess (todoList));
  }
}

const FILTER_TODO = 'FILTER_TODO'
export const filterTodos = filterType => {
  return {
    type: FILTER_TODO,
    payload: filterType
    
  }
}