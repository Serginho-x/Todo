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

const EDIT_TODO = 'EDIT_TODO'
export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      text
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
    const response = await axios.get(`http://localhost:4000/todolist/`);
    const todoList = response.data.filter((todo) => todo.text.toLowerCase().includes(text.toLowerCase()))
      dispatch(searchTodosSuccess (todoList));
  }
}

const FILTER_TODO = 'FILTER_TODO'
export const filterTodos = filterType => {
  return {
    type: FILTER_TODO,
    payload: {
      filterType
    }
  }
}