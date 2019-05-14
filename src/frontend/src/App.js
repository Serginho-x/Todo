import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRouter';
import Main from './components/pages/Main';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import RecoverPassForm from './components/pages/RecoverPassForm';
import ChangePassForm from './components/pages/ChangePassForm';
import ModalAlert from './components/modals/ModalAlert';

export const history = createBrowserHistory(); 

class App extends Component {
    render() {
      return (
        <BrowserRouter>       
            <Router history={history}>  
                <PrivateRoute exact path="/" component={Main}/>
                <Route path="/" component={ModalAlert}/>
                <Route path="/sign-up" component={SignUp}/>       
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/recover-password" component={RecoverPassForm}/> 
                <Route path="/change-password" component={ChangePassForm}/>
            </Router>  
        </BrowserRouter>      
      )
    }
  }

export default App