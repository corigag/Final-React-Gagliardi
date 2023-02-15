import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../../utils/funciones"
import { ItemList } from "../ItemList/ItemList";

export const ItemsListContainer = () => {

  

   const {categoria} = useParams() 
   const [productos, setProductos] = useState([]) 


   useEffect(() => {

      
     
      if(categoria) {

         consultarBDD('/json/productos.json').then(products=> {
            const prods = products.filter(prod => prod.categoria === categoria)
            const items = ItemList({prods})
            setProductos(items)
         })

      } else {
         consultarBDD('/json/productos.json').then(prods =>{
            const items = ItemList({prods})
            setProductos(items)
         })
      }  
   } , [categoria]) //[] vacio hace que se actualice solo una vez cuando se renderiza la app
    
   return (
       <div className="row justify-content-center align-items-center mt-3 p-3">

         {productos}
         
       </div>
    )
  }