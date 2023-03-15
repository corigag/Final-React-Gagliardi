import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../utils/firebase";

export const ItemsListContainer = () => {

   const [productos, setProductos] = useState([]) 
   const {categoria} = useParams() 

   useEffect(() => {
      if (categoria) { //undefined me da falso
        getProducts().then(products => {
          const prods = products.filter(prod => prod.stock > 0).filter(prod => prod.categoria === categoria)
          const items = <ItemList prods={prods} plantilla="Item" />
          setProductos(items)
        })
      } else {
        getProducts().then(products => {
          const prods = products.filter(prod => prod.stock > 0)
          const items = <ItemList prods={prods} plantilla="Item" />
          setProductos(items)
        })
      }
    }, [categoria])
   //[] vacio hace que se actualice solo una vez cuando se renderiza la app
    
   return (
       <div className="row justify-content-center align-items-center mt-3 p-3">

         {productos}
         
       </div>
    )
  }
