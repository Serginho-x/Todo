let nextTodoId = 0
export const AddTodo = todo => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: todo
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