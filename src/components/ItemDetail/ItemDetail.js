import '../ItemDetail/ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ item }) => {

    return(
        <>   
            <img className="itemDetail" src={item.picture}></img>
            <p className="itemDescipcion">{item.descripcion}</p>
            <span className="itemDescipcion">{item.precio}</span>
            <ItemCount initial={1} stock={10} onAdd={0}/>
        </>
    )
}