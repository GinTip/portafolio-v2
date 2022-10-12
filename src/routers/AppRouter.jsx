import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// Importacion de "pages"
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <div className='container mt-5 p-5'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;