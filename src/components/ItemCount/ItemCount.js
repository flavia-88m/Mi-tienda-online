
import '../ItemCount/ItemCount.css'
import { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [addItem, setAddItem] = useState(initial)
  const [newStock, setStock] = useState(stock)
  const [QuitarItemCount, setQuitarItemCount] = useState(true)


  const eliminarItem = () => {
    if (addItem > 0) {
        setAddItem(addItem - 1)
        setStock(newStock + 1 )
    }
}

  const agregarItem = () => {
      if (addItem < stock ){
          setAddItem(addItem + 1)
          setStock(newStock - 1)
    }
}



    return (
        <section className="itemCount">
            {
           QuitarItemCount ? <section><button onClick={eliminarItem}>-</button><span>{addItem}</span><button onClick={agregarItem}>+</button><br></br></section> : null
            }                                                                              
              <button onClick={()=>setQuitarItemCount(false)} onClick={onAdd}>Agregar al Carrito</button>
                <p>Agregaste {addItem} items al carrito</p>      
        </section>
    )
}
