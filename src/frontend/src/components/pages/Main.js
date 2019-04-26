import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as actions from '../../store/todos/todos-actions';
import { logout } from '../../store/account/account-action';
import { getVisibleTodos } from '../../store/todos/selectors';
import TodoList from '../todoList/TodoList';
import '../styles/Main.css';
import '../styles/Sign.css';

class Main extends React.Component {  
  static propTypes = {
    todos: PropTypes.array.isRequired,
    fetchAllTodos: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    filterTodos: PropTypes.func.isRequired,
    toggleSwitch: PropTypes.func.isRequired,
    searchTodo: PropTypes.func.isRequired
  }  

  state = {
    value: '',
    isSearch: false,
  };    
  
  componentDidMount() {
    this.props.fetchAllTodos();
  }  

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  //Submit 'Add Todo' Form
  handleSubmit = (event) => {
    event.preventDefault();                                                  
    (this.state.value !== '') && this.props.addTodo(this.state.value);
    this.setState({ value: '' })
  }

  // Reset 'Add Todo' Input
  handleReset = () => {
    this.setState({ value: '' })
  }

  render(){
      const {todos} = this.props
      return(     
       <>
        <div className="header-box">
          <Link to="/sign-in"> 
              <div className="header-box-sign" type="button" onClick={()=> logout()}>
                Log out
              </div>
          </Link>
        </div> 
        <div>
          <div className="App">                       
            <div className="Title">
                Todo List
            </div>
            <div>
              <form className="ui fluid form"  onSubmit={this.handleSubmit}>
                <div className="field input">
                  <input type="text"
                         placeholder="New TODO"
                         value={this.state.value} 
                         onChange={this.handleInputChange}
                  />            
                </div>                  
                <button className="ui teal button">
                  Add
                </button>
                <button className="ui button" onClick={this.handleReset}>
                  Clear
                </button>  
              </form>
            </div>
            <div className="ui divider"></div>
            <div className="search_panel">
              <div className="ui buttons">
                <button className="ui button" onClick={() => this.props.filterTodos({filter: "All"})}>All</button>
                <button className="ui button" onClick={() => this.props.filterTodos({filter: "Done"})}>Done</button>
                <button className="ui button" onClick={() => this.props.filterTodos({filter: "Undone"})}>Undone</button>
              </div>
              <button className="ui teal button" onClick={() => this.setState({isSearch: !this.state.isSearch})}>Search</button>              
            </div>
            {this.state.isSearch && 
              <div className="ui icon input">
                <input type="text" placeholder="Search todos..." onChange={(e) => this.props.searchTodo(e.target.value)}/>
                <i className="search icon"></i>
              </div>
            }
            {todos && 
              <TodoList todos={todos}
                        toggleSwitch={this.props.toggleSwitch}
                        deleteTodo={this.props.deleteTodo}
                        editTodo={this.props.editTodo}
              />
            }
            </div>            
        </div> 
       </>           
      )
    }
  } 

const mapStateToProps = store => {
    return {
      todos: getVisibleTodos(store.todos, store.filter)    
  }
}

export default connect(
    mapStateToProps,
    actions
)(Main)