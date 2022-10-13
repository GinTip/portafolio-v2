import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

//Images
import Diseño from '../images/diseño.png';

const DiseñoPage = () => {
  return (
    <div>
      {/* Header */}
      <header id="header">
        <NavLink to="/" className="title" />
        <nav>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
          </ul>
        </nav>
      </header>
      {/* Wrapper */}
      <div id="wrapper">
        {/* Main */}
        <section id="main" className="wrapper">
          <div className="inner">
            <h1 className="major">Diseñadora gráfica</h1>
            <p>Cuento con experiencia en el desarrollo de conceptos creativos para la creación y el desarrollo de proyectos
              gráficos tales como:</p>
            <ul>
              <li>Branding e identidad visual para marcas</li>
              <li>Diseño de contenido para sitios web y redes sociales</li>
              <li>Edición de video y fotografía</li>
            </ul>
            <p>Para mí los detalles y transmitir el mensaje adecuado a través de lo visual son muy importantes. Son un
              complemento perfecto para que el diseño de interfaces y el desarrollo web logren el objetivo de nuestros
              clientes. Tener sitios web o apps funcionales pero con un estilo estético para representar su marca. </p>
            <h1 className="major">Proyecto</h1>
            <h3>Diseño de Identidad visual - Doodle café</h3>
            <span className="image fit"><img src={Diseño} alt="diseño-grafico" /></span>
            <h4><a href="https://www.behance.net/gallery/124203257/Doodle-caf/modules/706939381" target="_blank" className="button primary">¡Échale un vistazo al proyecto!</a></h4>
            <br />
            <NavLink to="/" className="button">Inicio</NavLink>
          </div>
        </section>
      </div>
    <Footer />
    </div>
  );
};

export default DiseñoPage;