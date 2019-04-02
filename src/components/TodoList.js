import React from 'react';
import PropTypes from 'prop-types'
import '../styles/TodoList.css';


class TodoList extends React.Component { 
  static propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
    done: PropTypes.bool
  }

  handleInputChange = (id) => (console.log('change'));
 
  render(){
    const {todos} = this.props;
    const todoList = todos.todoList.map((todo) => ( 
    <div className='ToDoList-Item' style={{borderColor: todo.done ? 'red' : ''}}  key={todo.id}>         
    <div className="ToDoList-Checkbox" >
      <div className="ui fitted checkbox">
        <input type="checkbox" checked={todo.done} onClick={this.handleInputChange(todo.id)} />
        <label></label>
      </div>
    </div> 
    {todo.text}
    <div className="ToDoList-Buttons">
      <i className="edit icon" onClick={(e) => alert("edit")}></i>
      <i className="trash icon" onClick={(e) => alert("delete")}></i>
    </div>        
  </div>))

  return(   
      <React.Fragment>
        {todoList}
      </React.Fragment> 
    );
  }    
}

export default TodoList