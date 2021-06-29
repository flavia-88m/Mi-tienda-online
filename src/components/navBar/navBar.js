import logo from '../navBar/logo.jpg'
import '../navBar/navBar.css'
import { CartWidget } from '../cartWidget/cartWidget'



export const NavBar = () => {

    return (
        <nav>
            <ul className="navbar-container">
                <img className="brand"src={logo} alt="logo"/><li className="linkNav">Home</li>
                <li className="linkNav">Gafas</li>
                <li className="linkNav">Pañuelos</li>
                <li className="linkNav">Carteras</li>
                <li><CartWidget/></li>
            </ul>
        </nav>

    )
}