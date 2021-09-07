/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {Fragment} from 'react';
import {Item} from '../Item/Item';
import '../ItemList/ItemList.css';

export const ItemList = ({catalogoProductos}) =>{
  return (
    <Fragment className="item-List">
      {
        catalogoProductos.map((item) =>(<Item item={item} key={item.id}/>))
      }
    </Fragment>
  );
};
