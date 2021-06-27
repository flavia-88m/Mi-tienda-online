import { ItemCount } from '../ItemCount/ItemCount'
import '../Item/Item.css'

export const Item = ({ item }) => {
    return(
      <div className="itemContainer">
        <img className="images" src={item.pictureUrl} alt="img"/>
        <span className="itemPrice">{item.title}</span>
        <p className="itemPrice">{item.price}</p>
        {<ItemCount initial={1} stock={10} onAdd={0}/>}
       </div>
    )
}