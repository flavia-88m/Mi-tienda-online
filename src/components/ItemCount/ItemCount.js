
import '../ItemCount/ItemCount.css'
import { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [addItem, setAddItem] = useState(initial)
  const [newStock, setStock] = useState(stock)
  

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
        <div className="itemCount">
           <button onClick={eliminarItem}>-</button>
              <span>{addItem}</span>
            <button onClick={agregarItem}>+</button>
            <br></br>                                                                                               
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}