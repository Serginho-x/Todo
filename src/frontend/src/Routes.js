import React from 'react';
import { Router, Route } from 'react-router'
import Main from './components/pages/Main';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import PrivateRoute from './PrivateRouter';
import RecoverPassForm from './components/pages/RecoverPassForm';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

const Routers = () => {
  return (
    <Router history={history}>  
        <PrivateRoute exact path="/" component={Main} /> 
        <Route path="/sign-up" component={SignUp}/>       
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/recover-password" component={RecoverPassForm}/> 
    </Router>    
  );
}

export default Routers;
