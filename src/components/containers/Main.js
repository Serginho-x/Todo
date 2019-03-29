import React from 'react';
import { connect } from 'react-redux'
import {AddTodo} from '../../actions/TodosActions'
import Todo from '../presentationals/Todo'


class Main extends React.Component {  
    renderTodos () {
        const {todos} = this.props;
        console.log(todos.todoList);
        return todos.todoList.map((todo) => {
            return Object.values(todo).map((items, index) => {       
               console.log(todo.text) 
            // return  <Todo key={todo.id}/>  
        })
    })}



    // return users.map((item) => {
    //     return Object.values(item).map((items, index) => {       
    //       const user = Object.values(items, index)  
               
    //       return (
    //         <div className="item" onClick={ () => this.props.dispatchInfo(user, index) }>
    //           <img className="ui avatar image" src={user[0].avatar} />
    //           <div className="content"  >
    //             <a className="header">{user[0].firstName} {user[0].lastName}</a>
    //             <div className="description">{user[1].title}</div>
    //           </div>
    //         </div>          
    //       )
    //         }

render(){
    const {AddTodo} = this.props
    let input;
    return(
        <div>
            <div className="App">
            Todo List           
            </div>
            <div>
                <form className="ui fluid form"  onSubmit={e => {
                                                
                        AddTodo(input.value)
                        input.value = ''
                    }}>
                    <div className="field">
                        <input type="text" placeholder="New TODO"  ref={node => input = node}/>            
                    </div>
                
                    <button className="ui teal button" type="submit" >
                        Add
                    </button>
                    <button className="ui button">
                        Clear
                    </button>  
                </form>
            </div>
            {this.renderTodos()}
           
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



  