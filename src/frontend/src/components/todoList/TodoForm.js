import React from 'react';
import PropTypes from 'prop-types'
import '../../styles/TodoList.css';

class TodoForm extends React.Component {
  static propTypes = {
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired      
    }

  state = {
      isEdit: true,
      value: this.props.text
    }; 

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (id) => {
      this.props.editTodo(id, this.state.value);
      this.setState({isEdit: !this.state.isEdit})
  }
  
  render(){
      const {id, text} =this.props
      return (
        this.state.isEdit ? 
        <>
          <div className="todolist-text">{text}</div>                     
          <div className="todolist-buttons">
              <i className="edit icon" onClick={() => this.setState({isEdit: !this.state.isEdit})}></i>              
              <i className="trash icon" onClick={() => this.props.deleteTodo(id)}></i>
          </div> 
        </>
        :
        <>            
          <div className="ui mini input focus todolist-input">
              <input type="text" placeholder="Todo..." value={this.state.value} onChange={this.handleInputChange}/>  
          </div>
          <div className="todolist-buttons">
              <i className="check square outline icon" onClick={() => this.handleSubmit(id)}></i>               
              <i className="trash icon" onClick={() => this.props.deleteTodo(id)}></i>
          </div> 
        </>          
      )
  }
}

export default TodoForm
   