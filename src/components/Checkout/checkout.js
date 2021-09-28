/* eslint-disable react/react-in-jsx-scope */
import {CartContext} from '../../CartContext/CartContext';
import '../Checkout/checkout.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Form} from '../Form/form';
import {useContext, Fragment} from 'react';
import {Link} from 'react-router-dom';


export const Checkout = () => {
  const {cart, totalDeItems} = useContext(CartContext);

  return (
    <Fragment>
      <section className="checkout-container">
        <h2 className="title-checkout">DETALLE DE TU COMPRA:</h2>
        {cart.map((obj) => (
          <ul key={obj.item.id}>
            <li><span className="font-checkout">
                Cantidad de productos:</span> {(obj.quantity)}</li>
            <li>{obj.item.title}</li>
            <li><span className="font-checkout">
                ARS $</span> {obj.item.precio}</li>
          </ul>))
        }
        <span className="font-checkout">Total ${totalDeItems}</span>
        <Form />
      </section>
      <div className="volver-al-home">
        <Link className="link-volver-home" extact to="/">Volver al home</Link>
      </div>
    </Fragment>
  );
};

