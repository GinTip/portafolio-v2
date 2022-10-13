import React from 'react';
import { NavLink } from 'react-router-dom';

//Images
import FrontEnd from '../images/front-end.png'
import Landing1 from '../images/doodle-1.png';
import Landing2 from '../images/doodle-2.png';
import Landing3 from '../images/idiomas-1.jpg';
import Landing4 from '../images/idiomas-2.jpg';
import Footer from '../components/Footer';

const FrontendPage = () => {
  return (
    <>
      {/* Header */}
      <header id="header">
        <NavLink to="/" className="title" />
        <nav>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
          </ul>
        </nav>
      </header>
      <>
        {/* Wrapper */}
        <div id="wrapper">
          {/* Main */}
          <section id="main" className="wrapper">
            <div className="inner">
              <h1 className="major">Desarrolladora front-end</h1>
              <p>Como desarrolladora front-end he tenido experiencia en el uso de lenguajes de
                programación como:</p>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
              <p>Dichas herramientas me han permitido realizar proyectos tales como; landing pages, crud, catálogos, entro
                otros. Siempre teniendo en cuenta la funcionalidad, el diseño responsivo y el diseño visual.
              </p>
              <p>A través de estos proyectos, he adquirido habilidades de organización. Elaboro código limpio que me permite
                colaborar con otros programadores o departamentos.</p>
              <h1 className="major">Proyectos</h1>
              <h3 className="major">Landing page - Doodle Café</h3>
              <span className="image fit"><img src={FrontEnd} alt="#" /></span>
              <span className="image fit"><img src={Landing1} alt="#" /></span>
              <span className="image fit"><img src={Landing2} alt="#" /></span>
              <h4><a href="https://strong-torte-219610.netlify.app/" target="_blank" className="button primary">¡Échale un vistazo!</a></h4>
              <br />
              <h3>Landing page - Cursos de idiomas</h3>
              <span className="image fit"><img src={Landing3} alt="#" /></span>
              <span className="image fit"><img src={Landing4} alt="#" /></span>
              <h4><a href="https://adorable-bombolone-37e7d4.netlify.app/" target="_blank" className="button primary">¡Échale un vistazo!</a></h4>
              <br />
              <NavLink to="/" className="button">Inicio</NavLink>
            </div>
          </section>
        </div>
        <Footer />
      </>
    </>
  )
};

export default FrontendPage;