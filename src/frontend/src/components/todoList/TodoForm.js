import React from 'react';
import PropTypes from 'prop-types'
import '../../styles/TodoList.css';

class TodoForm extends React.Component {
  static propTypes = {
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
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
      const {id, text, done} =this.props
      return (
        this.state.isEdit ? 
        <>
            <div className="ToDoList-Text">{text}</div>                     
            <div className="ToDoList-Buttons">
                <i className="edit icon" onClick={() => this.setState({isEdit: !this.state.isEdit})}></i>              
                <i className="trash icon" onClick={() => done && this.props.deleteTodo(id)}></i>
            </div> 
        </>
        :
        <>            
            <div className="ui mini input focus">
                <input type="text" placeholder="Todo..." value={this.state.value} onChange={this.handleInputChange}/>  
            </div>
            <div className="ToDoList-Buttons">
                <i className="check square outline icon" onClick={() => this.handleSubmit(id)}></i>               
                <i className="trash icon" onClick={() => done && this.props.deleteTodo(id)}></i>
            </div> 
        </>          
      )
  }
}

export default TodoForm
   