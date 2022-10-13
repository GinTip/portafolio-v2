import React from 'react';
import { NavLink } from 'react-router-dom';

// Font awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBehance, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faCode, faCog, faPalette, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

// Images
import PortadaFront from '../images/portada-frontend.png';
import PortadaUiux from '../images/portada-diseñouiux.png';
import PortadaDiseño from '../images/portada-diseño.png';


class HomePage extends React.Component {
  render() {
    return (
      <>
        <section id="sidebar">
          <div className="inner">
            <nav>
              <ul>
                <li><a href="#intro">¡Hola!</a></li>
                <li><a href="#one">Mi trabajo</a></li>
                <li><a href="#two">Habilidades</a></li>
                <li><a href="#three">Contacto</a></li>
              </ul>
            </nav>
          </div>
        </section>
        <body className="is-preload" >
          {/* <section>
            <NavBar />
          </section> */}

          {/* Wrapper */}
          <div id="wrapper">
            {/* Intro */}
            <section id="intro" className="wrapper style1 fullscreen fade-up">
              <div className="inner">
                <h1>¡Hola!</h1>
                <p>Mi nombre es Gina y soy diseñadora gráfica, <br />
                  desarrolladora front-end y diseñadora UX/UI.</p>
                <ul className="actions">
                  <li><a href="#one" className="button scrolly">Mi trabajo</a></li>
                </ul>
              </div>
            </section>
            {/* One */}
            <section id="one" className="wrapper style2 spotlights">
              <section>
                <NavLink to="/frontend" className="image"><img src={PortadaFront} alt="frontend" data-position="center center" /></NavLink>
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
                <NavLink to="/uxui" className="image"><img src={PortadaUiux} alt="uxui" data-position="top center" /></NavLink>
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
                <NavLink to="/diseño" className="image"><img src={PortadaDiseño} alt="diseño" data-position="25% 25%" /></NavLink>
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
                  <FontAwesomeIcon icon={faCode} className='icon' style={{color:'#b74e91z', fontSize:'30px'}}/>
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
                  <FontAwesomeIcon icon={faCircleUser} className='icon' style={{color:'#b74e91z', fontSize:'30px'}}/>
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
                  <FontAwesomeIcon icon={faPalette} className='icon' style={{color:'#b74e91z', fontSize:'30px'}}/>
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
                  <FontAwesomeIcon icon={faCog} className='icon' style={{color:'#b74e91z', fontSize:'30px'}}/>
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
                        <li><a href="https://github.com/GinTip" className="icon brands fa-github"><FontAwesomeIcon icon={faGithub} /><span className="label">GitHub</span></a></li>
                        <li><a href="https://instagram.com/gintipdesign?igshid=YmMyMTA2M2Y=" className="icon brands fa-instagram"><FontAwesomeIcon icon={faInstagram} /><span className="label">Instagram</span></a></li>
                        <li><a href="https://www.linkedin.com/in/gina-beatriz-tipa-herrera-8660ab181/" className="icon brands fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin} /><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://www.behance.net/ginabetipahe" className="icon brands fa-behance"><FontAwesomeIcon icon={faBehance} /><span className="label">Behance</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </section>
              </div>
            </section>
          </div>
          {/* Footer */}
          <footer id="footer" className="wrapper style1-alt">
            <div className="inner">
              <ul className="menu">
                <li>© Gina Herrera. Todos los derechos reservados.</li>
              </ul></div>
          </footer>

        </body>
      </>
    )
  }
}
export default HomePage