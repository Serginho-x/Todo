import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore'
import Main from './components/containers/Main';

import registerServiceWorker from './registerServiceWorker';
import './App.css';

class App extends Component {
  render() {
    return (
    
      <Main />    
      
      
      
    );
  }
}

ReactDOM.render(
  <Provider store = { store }>
    
      <App />    
   
  </Provider>,
  document.getElementById('app')
)
export default App;
registerServiceWorker()