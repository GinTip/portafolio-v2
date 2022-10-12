import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


// Importación de componentes 
import Footer from '../components/Footer';

// Importacion de "pages"
import HomePage from '../pages/HomePage';
import UiuxPage from '../pages/UiuxPage';
import DiseñoPage from '../pages/DiseñoPage';
import FrontendPage from '../pages/FrontendPage';

const AppRouter = () => {
  return (
    <Router>
      <div className='container mt-5 p-5'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diseño" element={<DiseñoPage />} />
          <Route path="/frontend" element={<FrontendPage />} />
          <Route path="/uxui" element={<UiuxPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;