import React from 'react';
import AppRouter from './routers/AppRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./css/fontawesome-all.min.css";
import "./css/main.css";
import "./css/noscript.css";

const App = () => {

  return (
    <AppRouter />
  );
};

export default App;