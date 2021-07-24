import '../ItemDetail/ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../CartContext/CartContext'


export const ItemDetail = ({item}) => {
   const [botonActivo, setBotonActivo] = useState(false)
   const { addItem } = useContext(CartContext)
  

    const onAdd = (quantity) => {
    setBotonActivo(true)
    addItem(item, quantity)
  }
 
 const { precio, picture,descripcion} = item

    return (
        <section>   
            <img className="itemDetail" src={item.picture}></img>
              <p className="itemDescripcion">{item.descripcion}</p>
                <span className="itemDescripcion">{item.precio}</span>   
               {/*Con el ternario establecemos la condicion si botonActivo esta clickeado sino mostrame el ItemCount */}
               { botonActivo ? (
                  <Link to={'/cart'}>
                    <button>Termina tu compra</button>
                  </Link>
               ) : (
                <ItemCount initial={1} stock={10} onAdd={onAdd} value={item.id}/> 
               )
               }     
        </section>
    )
  }
