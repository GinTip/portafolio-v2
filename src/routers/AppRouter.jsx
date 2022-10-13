import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// Importacion de "pages"
import HomePage from '../pages/HomePage';
import UiuxPage from '../pages/UiuxPage';
import DiseñoPage from '../pages/DiseñoPage';
import FrontendPage from '../pages/FrontendPage';

const AppRouter = () => {
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diseño" element={<DiseñoPage />} />
          <Route path="/frontend" element={<FrontendPage />} />
          <Route path="/uxui" element={<UiuxPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;