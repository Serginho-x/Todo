import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import serviceWorker from './serviceWorker';
import Routes from './Routes'
import './index.css';

ReactDOM.render(
    <Provider store = { store }>
      <BrowserRouter >
        <App >
          <Routes />
        </App> 
      </BrowserRouter>         
    </Provider>,
    document.getElementById('root')
  )
serviceWorker()
