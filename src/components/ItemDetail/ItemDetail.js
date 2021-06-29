import '../ItemDetail/ItemDetail.css'


export const ItemDetail = ({ item }) => {

    return(
        <>   
            <img className="itemDetail" src={item.picture} img/>
            <p className="itemDescipcion">{item.descripcion}</p>
            <span className="itemDescipcion">{item.precio}</span>
        </>
    )
}