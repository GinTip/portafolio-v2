import React from 'react';
import AppRouter from './routers/AppRouter';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./css/fontawesome-all.min.css";
import "./css/main.css";
import "./css/noscript.css";

const App = () => {


  const element = <FontAwesomeIcon icon={faEnvelope} />

  ReactDOM.render(element, document.body);

  return (
    <AppRouter />
  );
};

export default App;