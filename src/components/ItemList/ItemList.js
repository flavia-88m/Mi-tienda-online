import { Item } from '../Item/Item'
import '../ItemList/ItemList.css'

export const ItemList = ({items}) =>{
    return(
        <>
         {items.length === 0 ? (
            <span className="loading">Loading...</span>
          ) : (
            items.map(item =><Item item={item}/>)
          )}
        </>
    )
}