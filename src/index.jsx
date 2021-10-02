import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// providers
import { GoogleAuthProvider } from './providers/authentication.provider';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from 'providers/api.provider';

ReactDOM.render(
  <React.StrictMode>
    <GoogleAuthProvider>
      <BrowserRouter>
        <ApiProvider>
          <App />
        </ApiProvider>
      </BrowserRouter>
    </GoogleAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
