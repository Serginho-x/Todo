import React from 'react';
import { connect } from 'react-redux'
import {AddTodo, GetAllTodos} from '../../actions/TodosActions'
import TodoList from '../presentationals/TodoList'
import { store } from '../../store/configureStore'
import './Main.css'

class Main extends React.Component {  
    
componentDidMount() {
    store.dispatch(GetAllTodos());
}

render(){
    const {AddTodo, todos} = this.props
    let input;
    return(
        <div className="App">
           <div> 
               <div className="Title">
                    Todo List
               </div>
            <div>
                <form className="ui fluid form"  onSubmit={e => {                                                
                        AddTodo(input.value)
                        input.value = ''
                    }}>
                    <div className="field input">
                        <input type="text" placeholder="New TODO"  ref={node => input = node}/>            
                    </div>
                
                    <button className="ui teal button" >
                        Add
                    </button>
                    <button className="ui button" type="reset">
                        Clear
                    </button>  
                </form>
            </div>
            <div className="ui divider"></div>
            <TodoList  todos={todos}/>
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
    AddTodo: (item) => dispatch(AddTodo(item)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)



  