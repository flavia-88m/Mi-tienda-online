import { Fragment } from 'react'
import { Item } from '../Item/Item'
import '../ItemList/ItemList.css'

export const ItemList = ({catalogo}) =>{
 const mapDeProductos = catalogo.map((item)=> <Item item={item} key={item.id}/>)
    return(
        <Fragment>
        { mapDeProductos.length === 0 
         ? (<span className="loading">No hay productos disponibles para esta categoría</span>
          ) : (
            mapDeProductos
          )
          }
        </Fragment>
    )
}