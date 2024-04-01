import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router, not Routes
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Use Router here */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
