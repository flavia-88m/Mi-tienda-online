import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [ Item, setItem ] = useState({})
    
    const productDetail ={ picture:"https://images.unsplash.com/photo-1545776771-0a6367761ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" ,descripcion:"Mochila simil cuero negro con detalles en dorado LV, medidas 25cm de alto por 12cm de ancho" , precio:"$8300" }


    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productDetail)
                },2000)
        })

      getItems.then((result)=>{
          console.log(result)
          setItem(result)
      })

 },[])
    
    return(
        <>
        <ItemDetail item={Item}/>
        </>
    )
}
