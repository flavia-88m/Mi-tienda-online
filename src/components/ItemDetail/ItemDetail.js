/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../ItemDetail/ItemDetail.css';
import {ItemCount} from '../ItemCount/ItemCount';
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const ItemDetail = ({item}) => {
  const [botonActivo, setBotonActivo] = useState(false);
  const {addItem} = useContext(CartContext);

  const onAdd = (quantity) => {
    setBotonActivo(true);
    addItem(item, quantity);
  };

  return (
    <section className="itemDetail-container">
      <img
        className='img-itemDetail'
        src={item.pictureUrl}
        alt='foto del producto'
      ></img>
      <section className='itemDetail'>
        <p className='item-title'>{item.title}</p>
        <p>{item.descripcion}</p>
        <p>ARS ${item.precio}</p>
        {/* Con el ternario establecemos la condicion si botonActivo
       esta clickeado sino mostrame el ItemCount */}
        <section className="itemCount-container">
          {botonActivo ? (
      <Link to={'/cart'} className="button-TerminarCompra">
	  	<button className="btn">Termina tu compra</button>
      </Link>
		   	) : (
		  <ItemCount
				  initial={1}
				  stock={item.stock}
				  onAdd={onAdd}
				  value={item.id}
		  />
			)}
        </section>
      </section>
    </section>
  );
};
