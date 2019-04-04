import { createSelector } from 'reselect';

export const getTodos = (state) => state.todoList;
export const getTodosFilter = (state) => state.filter;

export const getVisibleTodos = createSelector(
    [getTodos, getTodosFilter],
    (todoList, filters) => {
    switch (filters) {
      case 'Done':
        return todoList.filter(todo => !todo.done);
      case 'Undone':
        return todoList.filter(todo => todo.done);
      default:
        return todoList;
    }
  }
);