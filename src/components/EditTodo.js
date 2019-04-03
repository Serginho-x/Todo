import React from 'react';
import PropTypes from 'prop-types'
import '../styles/TodoList.css';

class EditTodo extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        id: PropTypes.number,
        done: PropTypes.bool
      }

    constructor(props) {
        super(props);
        this.state = {
          isEdit: true,
          value: this.props.text
        };    
      }

      handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        this.setState({ value: value })
      }

      handleSubmit = (id) => {
          this.props.editTodo(id, this.state.value);
          this.setState({isEdit: !this.state.isEdit})
      }
      render(){
          const {id, text, done} =this.props
          return (
            this.state.isEdit ? 
            <React.Fragment>
                {text}                     
                <div className="ToDoList-Buttons">
                    <i className="edit icon" onClick={() => this.setState({isEdit: !this.state.isEdit})}></i>              
                    <i className="trash icon" onClick={() => done && this.props.deleteTodo(id)}></i>
                </div> 
            </React.Fragment>
            :
            <React.Fragment>            
                <div className="ui mini input focus">
                    <input type="text" placeholder="Todo..." value={this.state.value} onChange={this.handleInputChange}/>  
                </div>
                <div className="ToDoList-Buttons">
                    <i className="check square outline icon" onClick={() => this.handleSubmit(id)}></i>               
                    <i className="trash icon" onClick={() => done && this.props.deleteTodo(id)}></i>
                </div> 
            </React.Fragment>          
          )
    }
}
export default EditTodo
   