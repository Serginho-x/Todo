import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addTodo, editTodo, deleteTodo, fetchAllTodos, toggleSwitch, searchTodo } from '../store/todos/todos-actions'
import TodoList from './TodoList'
import { getVisibleTodos } from '../store/todos/selectors';

import '../styles/Main.css'

class Main extends React.Component {  
  static propTypes = {
    todos: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isSearch: false
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
              <div className="search_panel">
                <div className="ui buttons">
                  <button className="ui button">All</button>
                  <button className="ui button">Done</button>
                  <button className="ui button">Undone</button>
                </div>
                <button className="ui teal button" onClick={() => this.setState({isSearch: !this.state.isSearch})}>Search</button>              
              </div>
              {this.state.isSearch && 
                <div className="ui icon input">
                  <input type="text" placeholder="Search todos..." onChange={(e) => this.props.searchTodo(e.target.value)}/>
                  <i className="search icon"></i>
                </div>
              }
              <TodoList 
                todos={todos}
                toggleSwitch={this.props.toggleSwitch}
                deleteTodo={this.props.deleteTodo}
                editTodo={this.props.editTodo}
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
    deleteTodo: (id) => dispatch(deleteTodo(id)),   
    editTodo: (id, item) => dispatch(editTodo(id, item)),
    fetchAllTodos: (item) => dispatch(fetchAllTodos(item)),
    toggleSwitch: (item) => dispatch(toggleSwitch(item)),
    searchTodo: (id) => dispatch(searchTodo(id)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)



  