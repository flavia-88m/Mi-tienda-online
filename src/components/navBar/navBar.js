/* eslint-disable react/react-in-jsx-scope */
import logo from '../navBar/logo.jpg';
import '../navBar/navBar.css';
import {CartWidget} from '../cartWidget/cartWidget';
import {NavLink} from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav>
      <section className="navbar-superior">
        <span className="text-navbar">
        ♥¡¡NEWS!!ENVÍOS DISPONIBLES
        A DOMICILIO A TODO EL PAÍS♥
        </span></section>
      <section className="navbar">
        <NavLink to="/">
          <img src={logo} alt="logo"/>
        </NavLink>
        <ul>
          <NavLink exact to="/">
            <li>Home</li>
          </NavLink>
          <NavLink exact to="/category/carteras">
            <li>Carteras</li>
          </NavLink>
          <NavLink exact to="/category/gafas">
            <li>Gafas</li>
          </NavLink>
          <NavLink exact to="/category/oufits">
            <li>Oufits</li>
          </NavLink>
          <li><CartWidget/></li>
        </ul>
      </section>
    </nav>

  );
};
