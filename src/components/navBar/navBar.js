import logo from '../navBar/logo.jpg'
import '../navBar/navBar.css'
import { CartWidget } from '../cartWidget/cartWidget'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



export const NavBar = () => {
const categories = ['Home', 'Carteras', 'Gafas', 'Oufits']

    return (
      
        <nav>
            <ul className="navbar-container">
                <Link to="/">
                   <img className="brand"src={logo} alt="logo"/>
                </Link>
                {categories.map((category) =>(
                      <NavLink to={`/category/${category}`}>
                         <li className="linkNav">{category}</li>
                      </NavLink>
                  ))}
                <li><CartWidget/></li>
            </ul>
        </nav>

    )
}