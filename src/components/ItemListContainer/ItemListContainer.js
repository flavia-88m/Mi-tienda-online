import '../ItemListContainer/ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = (props) => {

    return (
        <div>
           <h1 className="title">{props.greeting}</h1>
           <h2>{props.greeting2}</h2>
           <ItemCount initial={1} stock={10} onAdd={0}/>
        </div>
      
     
        
    )
}