/* eslint-disable react/jsx-no-undef*/
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import '../Footer/footer.css';
import logo from '../navBar/logo.jpg';
import {NavLink} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line no-unused-vars
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line no-unused-vars
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <footer>
      <div clasName="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div clasName="logo">
                <img src={logo} alt="logo"/>
              </div>
              <div clasName="a-cerca-de">
                <p>Somos una compañía joven con 5 años de experiencia
              en el mercado de venta online, crecemos día a día gracias
              a tu confianza y esperamos seguir brindando la mejor atención.
                </p>
              </div>
            </div>
            <div className="col">
              <h2>Categorías</h2>
              <ul>
                <NavLink exact to="/" className="navLink-style">
                  <li>Home</li>
                </NavLink>
                <NavLink exact to="/category/carteras"className="navLink-style">
                  <li>Carteras</li>
                </NavLink>
                <NavLink exact to="/category/gafas" className="navLink-style">
                  <li>Gafas</li>
                </NavLink>
                <NavLink exact to="/category/oufits" className="navLink-style">
                  <li>Oufits</li>
                </NavLink>
              </ul>
            </div>
            <div className="col">
              <h2>Compañía</h2>
              <ul>
                <NavLink exact to="/" className="navLink-style">
                  <li>A cerca de nosotros</li>
                </NavLink>
                <NavLink exact to="/" className="navLink-style">
                  <li>Contacto</li>
                </NavLink>
              </ul>
            </div>
            <div className="col">
              <h2>Nuestras Redes</h2>
              <ul>
                <NavLink exact to="/" className="navLink-style">
                  <li><FontAwesomeIcon className="iconStyle"
                    icon={faFacebookSquare}/>Facebook</li>
                </NavLink>
                <NavLink exact to="/" className="navLink-style">
                  <li><FontAwesomeIcon className="iconStyle"
                    icon={faInstagramSquare}/>Instagram</li>
                </NavLink>
                <NavLink exact to="/" className="navLink-style">
                  <li><FontAwesomeIcon className="iconStyle"
                    icon={faTwitterSquare}/>Twitter</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="box-copyright">
        <hr></hr>
        <p>Todos los derechos reservados © 2021. <b>Tienda de Chicas.</b></p>
      </div>
    </footer>
  );
};

