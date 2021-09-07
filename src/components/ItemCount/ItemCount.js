/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import '../ItemCount/ItemCount.css';
import {useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
  const [addItems, setAddItem] = useState(initial);
  const [newStock, setStock] = useState(stock);


  const eliminarItem = () => {
    if (addItems > 0) {
      setAddItem(addItems - 1);
      setStock(newStock + 1 );
    }
  };

  const agregarItem = () => {
    if (addItems < stock ) {
      setAddItem(addItems + 1);
      setStock(newStock - 1);
    }
  };


  // Con un ternario se pregunta si QuitarItemCount
  // es true mostrame el section sino no me muestres nada
  return (
    <section className="itemCount">
      <section>
        <button className="btn" onClick={eliminarItem}>-</button>
        <span>{addItems}</span>
        <button className="btn" onClick={agregarItem}>+</button>
      </section>
      <button className="btn" onClick={()=>
        onAdd(addItems)}>Agregar al Carrito</button>
      <p className="item-count-p">Agregaste {addItems} items al carrito</p>
    </section>
  );
};
