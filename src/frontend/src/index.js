import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/configureStore'
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import RecoverPassForm from './components/RecoverPassForm';
import { Route, Router, BrowserRouter, Redirect} from 'react-router-dom';
import serviceWorker from './serviceWorker';

import history from './history'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem('user')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
  )} />
)

class App extends Component {
    render() {
      return ( 
        <Router history={history}>  
          <PrivateRoute exact path="/" component={Main} /> 
          <Route path="/sign-up" component={SignUp}/>       
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/recover-password" component={RecoverPassForm}/>        
          <Route path="/todos" component={Main}/>
        </Router>    
      );
    }
  }

ReactDOM.render(
    <Provider store = { store }>
      <BrowserRouter >
          <App /> 
      </BrowserRouter>         
    </Provider>,
    document.getElementById('root')
  )
serviceWorker()
