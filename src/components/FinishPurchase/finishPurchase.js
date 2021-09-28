/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import '../Cart/cart.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext';
import {useContext} from 'react';


export const FinishPurchase = () => {
  const {cart} = useContext(CartContext);

  return (
    <section>
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
