import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ Item, setItem ] = useState([])

    const productDetail = [
    {
        id: 1,
        picture:"https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
        descripcion:"Cartera de simil cuero gamuzado con detalles de cadenas",
        precio: "7500"
     },
     {
        id: 2,
        picture:"https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        descripcion:"Cartera de simil cuero azul con detalles en camel",
        precio: "8000"
     },
     {
         id: 3,
         picture:"https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
         descripcion:"Cartera de simil cuero camel con detalle de pompón",
         precio: "7100"
     },
     {
        id: 4,
        picture:"https://images.unsplash.com/flagged/photo-1577479662097-5e0347cbe923?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
        descripcion:"Lentes Rayban",
        precio: "16000"
     },
     {
        id: 5,
        picture:"https://images.unsplash.com/photo-1610136649349-0f646f318053?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        descripcion:"Lentes Rayban",
        precio: "20000"
     },
     {
        id: 6,
        picture:"https://images.unsplash.com/photo-1592318028815-c3b51ef94273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80",
        descripcion:"Lentes Rayban",
        precio: "20000"
     },
    {
        id: 7,
        picture:" https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        descripcion:"Gorra Levis",
        precio: "9800"
     },
     {
        id: 8,
        pictureUrl:"https://images.unsplash.com/photo-1598467917711-69cd5c30190d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        descripcion:"Remera Lucy, mangas cortas",
        precio: "5000"
     },
     {
        id: 9,
        picture:"https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        descripcion:"Remera mangas cortas Force Majeure unisex",
        precio: "20000"
     }]


    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productDetail.find((item) => item.id == id))
                },2000)
        })

      getItems.then((result)=>{
          console.log(result)
          setItem(result)
      })

 },[id])
    
    return(
        <>
        <ItemDetail item={Item}/>
        </>
    )
}
