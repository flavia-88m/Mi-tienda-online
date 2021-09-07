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

export const Footer = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <footer>
      <div clasName="footer-container">
        <div className="box-footer">
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
        <div className="box-footer">
          <h2>Categorías</h2>
          <NavLink exact to="/">
              Home
          </NavLink>
          <NavLink exact to="/category/carteras">
              Carteras
          </NavLink>
          <NavLink exact to="/category/gafas">
              Gafas
          </NavLink>
          <NavLink exact to="/category/oufits">
              Oufits
          </NavLink>
        </div>
        <div className="box-footer">
          <h2>Compañía</h2>
          <li>A cerca de nosotros</li>
          <li>Contacto</li>
        </div>
        <div className="box-footer">
          <h2>Nuestras Redes</h2>
          <li><FontAwesomeIcon className="iconStyle"
            icon={faFacebookSquare}/>Facebook</li>
          <li><FontAwesomeIcon className="iconStyle"
            icon={faInstagramSquare}/>Instagram</li>
          <li><FontAwesomeIcon className="iconStyle"
            icon={faTwitterSquare}/>Twitter</li>
        </div>
      </div>
      <div className="box-copyright">
        <p>© 2021. Tienda de Chicas. Todos los derechos reservados.
        Cordoba, Argentina.</p>
      </div>
    </footer>
  );
};
