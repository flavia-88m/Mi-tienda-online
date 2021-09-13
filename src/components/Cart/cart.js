/* eslint-disable react/react-in-jsx-scope */
import {CartContext} from '../../CartContext/CartContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import '../Cart/cart.css';


export const Cart =() => {
  const {cart, removeItem, clear} = useContext(CartContext);
  let carrito = false;
  if (cart.length > 0) {
    carrito = true;
  }


  return (
    <section>
      <h2 className="title-miCarrito">Mi Carrito</h2>
      { carrito && cart.map((obj) =>
        <div className="cart-container" key={obj.item.id}>
          <img className="cart-img" src={obj.item.pictureUrl}
            alt='foto del producto'></img>
          <ul clasName="cart-content">
            <li><span className="title-cart">
              Detalle del Producto:</span> {obj.item.descripcion}</li>
            <li><span className="title-cart">
              Categoría:</span> {obj.item.category}</li>
            <li><span className="title-cart">
              Precio por unidad:</span> ARS ${(obj.item.precio)}</li>
            <li><span className="title-cart">
              Cantidad:</span> {(obj.quantity)}</li>
            <li><span className="title-cart">
              Total</span> $ {(obj.quantity)*(obj.item.precio)}</li>
            <li><button className="btn" onClick={()=>{
              removeItem(obj.item.id);
            }}>Eliminar el item</button></li>
          </ul>
        </div>,
      )}
      <div className="btn-container">
        <button className="btn" onClick={()=>{
          clear();
        }}>ELIMINAR TODO</button>
      </div>
      { (cart.length > 0) ?
           (<div className="link-finalizarC">
             <Link to={'/checkout'}
               className="link-finalizarC">FINALIZAR COMPRA</Link></div>) :
            (<div className="mensaje-continuar-comprando">
              <p className="p-cart">
                ¡Todavía no has agregado items al carrito!</p>
              <Link exact to={'/'} className="link-finalizar-compra">
                Continuar Compando</Link>
            </div>
               )
      }
    </section>

  );
};
