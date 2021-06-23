import img1 from '../ItemListContainer/img/img.1.jpg'
import '../ItemCount/ItemCount.css'
import { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd}) => {
  const [addItem, setAddItem] = useState(initial)
  const [newStock, setStock] = useState(stock)
  

  const eliminarItem = () => {
    if (addItem > 0) {
        setAddItem(addItem - 1)
        setStock(newStock + 1 )
    }
}

  const agregarItem = () => {
      if (addItem !== 0){
          setAddItem(addItem + 1)
          setStock(newStock - 1)
    }
}

    return (
        <div>
            <img src={img1} className="img1" alt=""/>
             <br></br>
           <button onClick={eliminarItem}>-</button>
              <spam>{addItem}</spam>
            <button onClick={agregarItem}>+</button>
            <br></br>                                                                                               
            <button >Agregar al Carrito</button>
             <br></br>
        </div>
    )
}