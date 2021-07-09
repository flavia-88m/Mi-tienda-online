import '../ItemDetail/ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ item }) => {
   const [itemComprado, setItemComprado] = useState(0)
   const [ItemCompra, setItemCompra] = useState(0)

    const onAdd = (event) => {
        //Almacenar el valor de itemCount
    setItemComprado(event)
    setItemCompra((event)*item.precio)
        //Desaparecer el ItemCount y aparece el button terminar compra
    document.getElementById("itemAgregado").style.display="none"
    document.getElementById("itemTerminarCompra").style.display="block"
 }

     

    return(
        <section>   
            <img className="itemDetail" src={item.picture}></img>
              <p className="itemDescipcion">{item.descripcion}</p>
                <span className="itemDescipcion">{item.precio}</span>
             <section id="itemAgregado">
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
             </section>  
         {/*boton oculto hasta que el usuario haga click */}
           <section id="itemTerminarCompra" className="finalCompra">
             <p>Tu compra es de: {itemComprado} {item.descripcion} por ${item.precio} tiene un total de ${ItemCompra}</p>
               <Link to={'/cart'}>
                 <button>Termina tu compra</button>
               </Link>
           </section>
        </section>
    )
}