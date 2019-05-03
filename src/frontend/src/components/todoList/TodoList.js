import React from 'react';
import PropTypes from 'prop-types'
import TodoForm from './TodoForm'
import '../../styles/TodoList.css';

class TodoList extends React.Component { 
  static propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSwitch: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    return(   
        <>
          { this.props.todos.map((todo) => ( 
            <div className={"ToDoList-Item " + (todo.done ? "done-border" : '')} key={todo._id}>         
              <div className="ToDoList-Checkbox" >
                <div className="ui fitted checkbox">
                  <input type="checkbox" checked={todo.done} onChange={() => this.props.toggleSwitch(todo._id, todo.done)} />
                  <label></label>
                </div>
              </div>       
              <TodoForm 
                id={todo._id}
                text={todo.text}
                done={todo.done}
                editTodo={this.props.editTodo}
                deleteTodo={this.props.deleteTodo}  
              />
            </div>))}
        </> 
      );
    }    
  }

export default TodoList