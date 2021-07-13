import '../ItemDetail/ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ item }) => {
   const [botonActivo, setBotonActivo] = useState(false)
   const [ItemComprados, setItemComprados] = useState([])


    const onAdd = (e) => {
      console.log(e.target.value)
        let aux= null
    {
       ItemComprados.includes(e.target.value) ? (
         aux = ItemComprados.filter(element=>element!== e.target.value)
       ) : (
         aux = ItemComprados.concat(e.target.value)  
       ) 
       setItemComprados(aux)

       //Con esta condicion se hace aparecer el boton de terminar compra que está deshabilitado

       if(aux.length > 0){
         setBotonActivo(true)
         } else {
         setBotonActivo(false)
         }
    }
  }
 

    return(
        <section>   
            <img className="itemDetail" src={item.picture}></img>
              <p className="itemDescripcion">{item.descripcion}</p>
                <span className="itemDescripcion">{item.precio}</span>
                <section>
                   <ItemCount initial={1} stock={10} onAdd={onAdd} value={item.id}/> 
                </section>
              
               {/*boton oculto hasta que el usuario haga click */}
             <section>
               <Link to={'/cart'}>
                 <button hidden={!botonActivo}>Termina tu compra</button>
               </Link>
            </section>
        </section>
    )
}