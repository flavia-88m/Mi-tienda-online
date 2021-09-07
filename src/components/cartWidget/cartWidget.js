/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import cartIcon from '../../assets/icons/cartIcon.svg';
import '../cartWidget/cartWidget.css';
import {NavLink} from 'react-router-dom';
import {CartContext} from '../../CartContext/CartContext';
import {useContext} from 'react';

export const CartWidget = () => {
  const {cartQuantity} = useContext(CartContext);

  return (
    <section className="icon-container">
      <NavLink to="/cart">
        <img src={cartIcon} alt='cartIcon'/>
        <span className=
          {`cartQuantity ${cartQuantity === 0 ? 'hidden' :
       'visible'}`}>
          {cartQuantity}
        </span>
      </NavLink>
    </section>

  );
};
