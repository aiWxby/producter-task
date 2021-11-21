import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.min.css';
import './vendor/lib/fontawesome/css/all.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="fullpage">
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
