import axios from 'axios';

const todolistUrl = 'http://localhost:4000/api/todos';  // URL to todolist

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')  
  config.headers.Authorization =  token;
  return config
})

const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const fetchAllTodos = () => { 
  return async (dispatch) => {
    try {
      const response = await axios.get(`${todolistUrl}`);
      dispatch(success(response.data));
    } 
    catch(error) {
      console.log(Object.keys(error), error.message); 
    }
  }       
  function success (data){
    return {
      type: FETCH_TODOS_SUCCESS, 
      payload: { data }
    }}
};

const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const addTodo = text => {
  return async (dispatch) => {
    try {
      var token = window.localStorage.getItem('token');
      const response = await axios.post(`${todolistUrl}`, {text, token});
      dispatch(success(response.data));
    } 
    catch(error){
      console.log(Object.keys(error), error.message); 
    }
  }
  function success (data){
    return {
      type: ADD_TODO_SUCCESS,
      payload: { data }
    }}
};

const EDIT_TODO = 'EDIT_TODO'
export const editTodo = (id, text) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${todolistUrl}/${id}`, {text});
      dispatch(success(response.data));
    }
    catch(error){
      console.log(Object.keys(error), error.message); 
    }    
  }
  function success(data){
    return {
      type: EDIT_TODO,
      payload: { data }
    }}
};

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      axios.delete(`${todolistUrl}/${id}`);
      dispatch(success(id))
    }
    catch(error){
      console.log(Object.keys(error), error.message); 
    }
  }
  function success(id){
    return {
      type: DELETE_TODO,
      payload: { id }
    }}
};

const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
export const toggleSwitch = (id, done) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${todolistUrl}/${id}`, {done: !done});
      dispatch(success(response.data))
    }
    catch(error){
      console.log(Object.keys(error), error.message); 
    }
  }
  function success(data){
    return {
      type: TOGGLE_SWITCH,
      payload: { data }
    }}
};


const SEARCH_TODOS_SUCCESS = 'SEARCH_TODOS_SUCCESS'
export const searchTodo = text => {
  return async (dispatch) => {
    try {
    const response = await axios.get(`${todolistUrl}`);
    const todoList = response.data.filter((todo) => todo.text.toLowerCase().includes(text.toLowerCase()));
      dispatch(success (todoList))
    } catch (error) {
      console.log(Object.keys(error), error.message); 
    }
  }
  function success(todoList){
    return {
      type: SEARCH_TODOS_SUCCESS,
      payload: { todoList }
    }}
}

const FILTER_TODO = 'FILTER_TODO'
export const filterTodos = filterType => {
  return {
    type: FILTER_TODO,
    payload: filterType    
  }
}