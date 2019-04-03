import React from 'react';
import PropTypes from 'prop-types'
import EditTodo from './EditTodo'
import '../styles/TodoList.css';

class TodoList extends React.Component { 
  static propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
    done: PropTypes.bool
  }

  render(){
    const {todos} = this.props;
    const todoList = todos.todoList.map((todo) => ( 
    <div className='ToDoList-Item' style={{borderColor: todo.done ? 'red' : ''}}  key={todo.id}>         
      <div className="ToDoList-Checkbox" >
        <div className="ui fitted checkbox">
          <input type="checkbox" checked={todo.done} onChange={() => this.props.toggleSwitch(todo.id)} />
          <label></label>
        </div>
      </div>       
      <EditTodo 
        id={todo.id}
        text={todo.text}
        done={todo.done}
        editTodo={this.props.editTodo}
        deleteTodo={this.props.deleteTodo}
      />
    </div>))

  return(   
      <React.Fragment>
        {todoList}
      </React.Fragment> 
    );
  }    
}

export default TodoList