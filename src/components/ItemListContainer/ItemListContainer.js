import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = (props) => {
  const [catalogo, setCatalogo] = useState([])
  const products =[{
        id: 1,
        pictureUrl:"https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
        title:"Cartera de simil cuero gamuzado con detalles de cadenas",
        price: "$7500"
     },
     {
        id: 2,
        pictureUrl:"https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        title:"Cartera de simil cuero azul con detalles en camel",
        price: "$8000"
     },
     {
         id: 3,
         pictureUrl:"https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
         title:"Cartera de simil cuero camel con detalle de pompón",
         price: "$7100"
    }]


    useEffect(()=> {
        const itemsShop = new Promise (( resolve, reject) => {
            setTimeout(()=> {
              resolve(products)
            },2000)
    
        })
    
        itemsShop.then((result)=>{
            console.log(result)
            setCatalogo(result)
        })

    },[])
  

    return (
        <div>
          <h1 className="title">{props.greeting}</h1>
          <h2>{props.greeting2}</h2>
           <ItemList items={catalogo}/>
    
        </div>
      
     
        
    )
}