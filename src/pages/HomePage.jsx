import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          {/* Wrapper */}
          <div id="wrapper">
            {/* Intro */}
            <section id="intro" className="wrapper style1 fullscreen fade-up">
              <div className="inner">
                <h1>¡Hola!</h1>
                <p>Mi nombre es Gina y soy diseñadora gráfica, <br />
                  desarrolladora front-end y diseñadora UX/UI.</p>
                <ul className="actions">
                  <li><NavLink to="#one" className="button scrolly">Mi trabajo</NavLink></li>
                </ul>
              </div>
            </section>
            {/* One */}
            <section id="one" className="wrapper style2 spotlights">
              <section>
                <NavLink to="/frontend" className="image"><img src="./images/portada-frontend.png" alt="frontend" data-position="center center" /></NavLink>
                <div className="content">
                  <div className="inner">
                    <h2>Desarrollo front-end</h2>
                    <p>Tengo experiencia en la creación de interfaces de usuario desde el punto de vista de código.</p>
                    <ul className="actions">
                      <li><NavLink to="/frontend" className="button">Saber más</NavLink></li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <NavLink to="/uxui" className="image"><img src="./images/portada-diseñouiux.png" alt="uxui" data-position="top center" /></NavLink>
                <div className="content">
                  <div className="inner">
                    <h2>Diseño UX/UI</h2>
                    <p>Experiencia en el desarrollo e investigacion del usuario para el diseño de interfaces.</p>
                    <ul className="actions">
                      <li><NavLink to="/uxui" className="button">Saber más</NavLink></li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <NavLink to="/diseño" className="image"><img src="./images/portada-diseño.png" alt="diseño" data-position="25% 25%" /></NavLink>
                <div className="content">
                  <div className="inner">
                    <h2>Diseño gráfico</h2>
                    <p>Experiencia en la creación de una identidad de una marca; contenido para web y redes sociales.</p>
                    <ul className="actions">
                      <li><NavLink to="/diseño" className="button">Saber más</NavLink></li>
                    </ul>
                  </div>
                </div>
              </section>
            </section>
            {/* Two */}
            <section id="two" className="wrapper style3 fade-up">
              <div className="inner">
                <h2>Habilidades</h2>
                <div className="features">
                  <section>
                    <span className="icon solid major fa-code" />
                    <h3>Programación</h3>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>NodeJS</li>
                      <li>GitHub</li>
                    </ul>
                  </section>
                  <section>
                    <span className="icon solid major fa-user" />
                    <h3>UX/UI</h3>
                    <ul>
                      <li>Figma</li>
                      <li>Adobe XD</li>
                      <li>Desk research</li>
                      <li>Bench marking</li>
                      <li>Diseño responsivo</li>
                      <li>Prototipado</li>
                      <li>Landing pages</li>
                    </ul>
                  </section>
                  <section>
                    <span className="icon solid major fa-palette" />
                    <h3>Diseño</h3>
                    <ul>
                      <li>Composición</li>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Premiere Pro</li>
                      <li>After Effects</li>
                    </ul>
                  </section>
                  <section>
                    <span className="icon solid major fa-cog" />
                    <h3>Otras habilidades</h3>
                    <ul>
                      <li>Inglés B2</li>
                      <li>Responsabilidad</li>
                      <li>Trabajo en equipo</li>
                      <li>Organización</li>
                      <li>Responsabilidad</li>
                    </ul>
                  </section>
                </div>
              </div>
            </section>
            {/* Three */}
            <section id="three" className="wrapper style1 fade-up">
              <div className="inner">
                <h2>Contacto</h2>
                <section>
                  <ul className="contact">
                    <li>
                      <h3>Email</h3>
                      <p>ginat.herrera@gmail.com</p>
                    </li>
                    <li>
                      <h3>Celular</h3>
                      <span>+52 (222) 715-0125</span>
                    </li>
                    <li>
                      <h3>Mis redes</h3>
                      <ul className="icons">
                        <li><NavLink to="https://github.com/GinTip" className="icon brands fa-github"><span className="label">GitHub</span></NavLink></li>
                        <li><NavLink to="https://instagram.com/gintipdesign?igshid=YmMyMTA2M2Y=" className="icon brands fa-instagram"><span className="label">Instagram</span></NavLink></li>
                        <li><NavLink to="https://www.linkedin.com/in/gina-beatriz-tipa-herrera-8660ab181/" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></NavLink></li>
                        <li><NavLink to="https://www.behance.net/ginabetipahe" className="icon brands fa-behance"><span className="label">Behance</span></NavLink></li>
                      </ul>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }
}
export default HomePage