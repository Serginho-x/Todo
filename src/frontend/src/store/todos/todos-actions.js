import axios from '../../helpers/axios.interceptor';
import type from './types'

const todolistUrl = 'http://localhost:4000/api/todos';  // URL to todolist

export const fetchAllTodos = () => { 
  return async (dispatch) => {
    try {
      const response = await axios.get(`${todolistUrl}`);
      dispatch(success(response.data));
    } 
    catch(error) {
      console.log(error.message); 
    }
  }       
  function success (data){
    return {
      type: type.FETCH_TODOS_SUCCESS, 
      payload: { data }
    }}
};

export const addTodo = text => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${todolistUrl}`, {text});
      dispatch(success(response.data));
    } 
    catch(error){
      console.log(error.message); 
    }
  }
  function success (data){
    return {
      type: type.ADD_TODO_SUCCESS,
      payload: { data }
    }}
};

export const editTodo = (id, text) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${todolistUrl}/${id}`, {text});
      dispatch(success(response.data));
    }
    catch(error){
      console.log(error.message); 
    }    
  }
  function success(data){
    return {
      type: type.EDIT_TODO,
      payload: { data }
    }}
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      axios.delete(`${todolistUrl}/${id}`);
      dispatch(success(id))
    }
    catch(error){
      console.log(error.message); 
    }
  }
  function success(id){
    return {
      type: type.DELETE_TODO,
      payload: { id }
    }}
};

export const toggleSwitch = (id, done) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${todolistUrl}/${id}`, {done: !done});
      dispatch(success(response.data))
    }
    catch(error){
      console.log(error.message); 
    }
  }
  function success(data){
    return {
      type: type.TOGGLE_SWITCH,
      payload: { data }
    }}
};

export const searchTodo = text => {
  return async (dispatch) => {
    try {
    const response = await axios.get(`${todolistUrl}`);
    const todoList = response.data.filter((todo) => todo.text.toLowerCase().includes(text.toLowerCase()));
      dispatch(success (todoList))
    } catch (error) {
      console.log(error.message); 
    }
  }
  function success(todoList){
    return {
      type: type.SEARCH_TODOS_SUCCESS,
      payload: { todoList }
    }}
}

export const filterTodos = filterType => {
  return {
    type: type.FILTER_TODO,
    payload: filterType    
  }
}