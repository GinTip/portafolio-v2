import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      {/* Sidebar */}
      <section id="sidebar">
          <div className="inner">
            <nav>
              <ul>
                <li><NavLink to="#intro">¡Hola!</NavLink></li>
                <li><NavLink to="#one">Mi trabajo</NavLink></li>
                <li><NavLink to="#two">Habilidades</NavLink></li>
                <li><NavLink to="#three">Contacto</NavLink></li>
              </ul>
            </nav>
          </div>
        </section>
    </>
  );
};

export default NavBar;