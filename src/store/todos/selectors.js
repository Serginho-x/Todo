// import { createSelector } from 'reselect';

// export const getTodos = (state) => state.todoList;
// // export const getTodosFilter = (state) => getTodos(state).filter;

// export const getVisibleTodos = createSelector(
//   [getTodosFilter, getTodos],
//   (filter, todoList) => {
//     switch (filter) {
//       case 'done':
//         return todoList.filter(todo => !todo.done);
//       case 'undone':
//         return todoList.filter(todo => todo.done);
//       default:
//         return todoList;
//     }
//   }
// );