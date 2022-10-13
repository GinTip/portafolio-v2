import React from 'react';
import { NavLink } from 'react-router-dom';

// Images
import DiseñoUiux from '../images/diseñouiux.png';
import Desarrollo from '../images/desarrollo.png';


const UiuxPage = () => {
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
            <h1 className="major">Diseñadora UX/UI</h1>
            <p>En el diseño de experiencias e interfaces de usuario he tenido la oportunidad de trabajar en distintos
              proyectos.</p>
            <p>Tengo habilidades en la creación de diseños centrados en los usuarios. Con el fin de cubrir las necesidades
              del cliente optimizando la relación consumidor-producto. Como UX me encargo de empatizar con el usuario e
              investigar su comportamiento con el producto, además de conocer a la competencia.</p>
            <p>Por el lado del UI tengo experiencia en el diseño de interfaces funcionales y atractivas, adicionalmente
              realizo el prototipado y testeo de las mismas. Siempre en conjunto con el equipo de desarrollo front-end.</p>
            <h1 className="major">Proyecto</h1>
            <h3>App de Citas Médicas - AgendApp</h3>
            <span className="image fit"><img src={Desarrollo} alt="proceso-de-desarrollo" /></span>
            <span className="image fit"><img src={DiseñoUiux} alt="prototipado-andegapp" /></span>
            <h4><a href="https://www.figma.com/proto/UCLbIMIaNwWYU2uAVKsP8a/Moodboard-%2F-UI-Kit?node-id=25%3A824&starting-point-node-id=25%3A824" target="_blank" className="button primary">¡Échale un vistazo al UI kit!</a></h4>
            <br />
            <NavLink to="/" className="button">Inicio</NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UiuxPage;