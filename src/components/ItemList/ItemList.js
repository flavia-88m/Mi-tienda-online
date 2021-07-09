import { Item } from '../Item/Item'
import '../ItemList/ItemList.css'

export const ItemList = ({ items }) =>{
    return(
        <>
         {items.length === 0 ? (
            <span className="loading"></span>
          ) : (
            items.map(item =><Item key={item.id} item={item}/>)
          )}
        </>
    )
}