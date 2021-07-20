import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../cartWidget/cartWidget.css'
import { CartContext } from '../../CartContext/CartContext'
import { useContext } from 'react'

export const CartWidget = () => {
    const {cart, removeItem, clear } = useContext(CartContext)

    
    return (
        <div>
          <FontAwesomeIcon className="iconStyle" icon={faShoppingCart}/>
          { /*cart.map((obj)=> (
              <div>
                  <span>Nombre:{obj.item.title}</span>
                  <span>Precio:{obj.item.price} </span>
                  <button onClick={()=> removeItem(obj.item.id) }>Borrar Item</button>
              </div>
          ))
           */}
           <button onClick={()=> clear()}>Limpiar el Carrito</button>
        </div>
      

           
    )
}