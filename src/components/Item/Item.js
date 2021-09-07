/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '../Item/Item.css';
import {Link} from 'react-router-dom';
import {Fragment} from 'react';

export const Item = ({item}) => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Fragment className="item-container">
      <Link to={`/item/${item.id}`}>
        <section id={item.id} className="items">
          <img className="images" src={item.pictureUrl} alt="img"/>
          <p className="itemPrice">{item.title}</p>
          <p className="item-price2">ARS$ {item.precio}</p>
        </section>
      </Link>
    </Fragment>
  );
};
