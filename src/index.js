import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './frontend/store/configureStore'
import Main from './frontend/components/Main';
import SignIn from './frontend/components/SignIn';
import SignUp from './frontend/components/SignUp';
import RecoverPassForm from './frontend/components/RecoverPassForm';
import { Route, Router, BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import history from './history'

class App extends Component {
    render() {
      return ( 
        <Router history={history}>   
        <Route exact= {true} path="/" component={SignUp}/>       
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
registerServiceWorker()
