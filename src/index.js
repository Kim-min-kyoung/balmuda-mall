import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './include/ScrollToTop';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
