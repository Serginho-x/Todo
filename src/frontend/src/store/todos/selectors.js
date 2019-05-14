import { createSelector } from 'reselect';

export const getTodos = (state) => state.todoList;
export const getTodosFilter = (state) => state.filter;
export const searchTodos = (state) => state.searchTodos;

const getVisibleTodos = createSelector(
    [getTodos, getTodosFilter],
    (todoList, filters) => {
    switch (filters) {
      case 'Done':
        return todoList.filter(todo => todo.done);
      case 'Undone':
        return todoList.filter(todo => !todo.done);
      default:
        return todoList;
    }
  }
);

export const getVisibleTodosWithSearch = createSelector(
  [ getVisibleTodos, searchTodos ],
  (visibleTodos, keyword) => visibleTodos.filter(
    todo => todo.text.toLowerCase().includes(keyword.toLowerCase())
  )
)