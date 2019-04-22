import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import App from './App';

function bootYourApp() {
  ReactDOM.render(<App />, document.getElementById('root-app'))
}

document.addEventListener('DOMContentLoaded', bootYourApp, false);