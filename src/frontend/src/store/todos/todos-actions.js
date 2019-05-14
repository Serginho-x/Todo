import axios from '../../helpers/axios.interceptor';

const todolistUrl = 'http://localhost:4000/api/todos';  // URL to todolist

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const fetchAllTodos = () => { 
  return async (dispatch) => {
    try {
      const response = await axios.get(`${todolistUrl}`);
      dispatch({
        type: FETCH_TODOS_SUCCESS, 
        payload: response.data 
      });
    } 
    catch(error) {
      console.log(error.message); 
    }
  }
};

export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const addTodo = (text) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${todolistUrl}`, {text});
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: response.data
      });
    } 
    catch(error){
      console.log(error.message); 
    }
  }
};

export const EDIT_TODO = 'EDIT_TODO'
export const editTodo = (id, text) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${todolistUrl}/${id}`, {text});
      dispatch({
        type: EDIT_TODO,
        payload: response.data
      });
    }
    catch(error){
      console.log(error.message); 
    }    
  }
};

export const DELETE_TODO = 'DELETE_TODO '
export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${todolistUrl}/${id}`);
      dispatch({
        type: DELETE_TODO,
        payload: response.data._id
      })
    }
    catch(error){
      console.log(error.message); 
    }
  }
};

export const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
export const toggleSwitch = (id, done) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${todolistUrl}/${id}`, {done: !done});
      dispatch({
        type: TOGGLE_SWITCH,
        payload: response.data
      })
    }
    catch(error){
      console.log(error.message); 
    }
  }
};

export const SEARCH_TODOS_SUCCESS = 'SEARCH_TODOS_SUCCESS'
export const searchTodo = (searchTodos) => {
  return {
    type: SEARCH_TODOS_SUCCESS,
    payload: searchTodos
  }  
}

export const FILTER_TODO = 'FILTER_TODO'
export const filterTodos = filterType => {
  return {
    type: FILTER_TODO,
    payload: filterType    
  }
}