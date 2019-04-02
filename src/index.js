import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/configureStore'
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

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
    document.getElementById('root')
  )
registerServiceWorker()
