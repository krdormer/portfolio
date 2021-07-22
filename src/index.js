import React from 'react';
import ReactDOM from 'react-dom';
// Import of base App component
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
// Will wrap base App component, gives access to Routes in App.js
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
