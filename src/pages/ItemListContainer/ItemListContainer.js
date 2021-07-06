import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { ItemList } from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = (props) => {
  const { id } = useParams()
  const [catalogo, setCatalogo] = useState([])
  const products =[
    {
        id: 1,
        pictureUrl:"https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
        title:"Cartera de simil cuero gamuzado con detalles de cadenas",
        price: "$7500",
        categoryId:"Carteras"
     },
     {
        id: 2,
        pictureUrl:"https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        title:"Cartera de simil cuero azul con detalles en camel",
        price: "$8000",
        categoryId:"Carteras"
     },
     {
         id: 3,
         pictureUrl:"https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
         title:"Cartera de simil cuero camel con detalle de pompón",
         price: "$7100",
         categoryId:"Carteras"
     },
     {
        id: 4,
        pictureUrl:"https://images.unsplash.com/flagged/photo-1577479662097-5e0347cbe923?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
        title:"Lentes Rayban",
        price: "$16000",
        categoryId:"Gafas"
     },
     {
        id: 5,
        pictureUrl:"https://images.unsplash.com/photo-1610136649349-0f646f318053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title:"Lentes Rayban",
        price: "$20000",
        categoryId:"Gafas"
     },
     {
        id: 6,
        pictureUrl:"https://images.unsplash.com/photo-1592318028815-c3b51ef94273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80",
        title:"Lentes Rayban",
        price: "$20000",
        categoryId:"Gafas"
     },
    {
        id: 7,
        pictureUrl:" https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title:"Gorra Levis",
        price: "$9800",
        categoryId:"Oufits"
     },
     {
        id: 8,
        pictureUrl:"https://images.unsplash.com/photo-1598467917711-69cd5c30190d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        title:"Remera Lucy, mangas cortas",
        price: "$5000",
        categoryId:"Oufits"
     },
     {
        id: 9,
        pictureUrl:"https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title:"Remera mangas cortas Force Majeure unisex",
        price: "$20000",
        categoryId:"Oufits"
     }]


    useEffect(()=> {
        const getItemsShop = new Promise (( resolve, reject) => {
           
            setTimeout(()=> {
              resolve(products.filter((item) => item.categoryId == id))
            },2000)
      
        })
    
        getItemsShop.then((result)=>{
            console.log(result)
            setCatalogo(result)
        })
            
    },[id])
  

    return (
        <div>
          <h1 className="title">{props.greeting}</h1>
          <h2>{props.greeting2}</h2>
           <ItemList items={catalogo}/>
        </div>
      
     
        
    )
}