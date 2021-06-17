import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../cartWidget/cartWidget.css'

export const CartWidget = () => {

    return (
        <nav>
            <ul className="iconStyle">
               <li><FontAwesomeIcon icon={faShoppingCart}/></li>
            </ul>
        </nav>
    )
}