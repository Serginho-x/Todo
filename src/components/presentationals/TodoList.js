import React from 'react';
import PropTypes from 'prop-types'
import './TodoList.css';

export default class TodoList extends React.Component { 
  handleChange = () => (console.log('smth'))

  render(){
  const {todos} = this.props;
    return todos.todoList.map((todo, index) => 
        (<div className='ToDoList-Item' style={{borderColor: todo.done ? 'red' : ''}}  key={index}>
          <div className="ToDoList-Checkbox" >
            <div className="ui fitted checkbox">
              <input type="checkbox"  checked={todo.done} onChange={this.handleChange}/>
              <label></label>
            </div>
          </div>       
          
          {todo.text}
          <div className="ToDoList-Buttons">
            <i className="edit icon" onClick={(e) => alert("edit")}></i>
            <i className="trash icon" onClick={(e) => alert("delete")}></i>
          </div>        
        </div>)
        )}    
  }

TodoList.propTypes = {    
    text: PropTypes.string
  }

