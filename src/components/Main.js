import React from 'react';
import { connect } from 'react-redux'
import { addTodo, fetchAllTodos, toggleSwitch } from '../store/todos/todos-actions'
import TodoList from './TodoList'
import PropTypes from 'prop-types'
import '../styles/Main.css'

class Main extends React.Component {  
  static propTypes = {
    todos: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };    
  }

  componentDidMount() {
    this.props.fetchAllTodos();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    this.setState({ value: value })
  }

  handleSubmit = (event) => {
    const addTodo = this.props.addTodo;
    event.preventDefault();                                                  
    (this.state.value !== '') && addTodo(this.state.value);
    this.setState({ value: '' })
  }

  handleReset = () => {
    this.setState({ value: '' })
  }

  render(){
      const {todos} = this.props
      return(      
          <div className="App">
            <div> 
                <div className="Title">
                      Todo List
                </div>
              <div>
                  <form className="ui fluid form"  onSubmit={this.handleSubmit}>
                      <div className="field input">
                          <input type="text" placeholder="New TODO"
                          value={this.state.value} onChange={this.handleInputChange}/>            
                      </div>
                  
                      <button className="ui teal button">
                          Add
                      </button>
                      <button className="ui button" type="reset" onClick={this.handleReset}>
                          Clear
                      </button>  
                  </form>
              </div>
              <div className="ui divider"></div>
                  <TodoList 
                   todos={todos}
                   toggleSwitch={this.props.toggleSwitch}
                  />
              </div>
          </div>      
      )
    }
  } 

const mapStateToProps = store => {
    return {
      todos: store.todos     
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (item) => dispatch(addTodo(item)),
    fetchAllTodos: (item) => dispatch(fetchAllTodos(item)),
    toggleSwitch: (item) => dispatch(toggleSwitch(item))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)



  