import React from 'react'
import { Link } from 'react-router-dom'
import { useCarritoContext } from '../../context/carritoContext'
import { ItemList } from "../ItemList/ItemList"


export const Cart = () => {
  const {carrito, emptyCart , totalPrice} = useCarritoContext()


  return (
    <>
    {
      carrito.length === 0
      ?
      <div className="container m-5">
        <h2>Carrito Vacio</h2>
        <p>Para finalizar su compra debe seleccionar los productos.</p>
        <Link className="nav-link" to={"/"}><button className="btn btnItem">Volver a la tienda</button> </Link>
      </div>
      :
        <>
        <div className="container cartContainer">
          <div className="container d-flex flex-wrap">
            <ItemList prods={carrito} plantilla="ItemCart" />
          </div>
          <div className="cartButtons text-center">
            <button className="btn btnEmpty mb-3" onClick={() => emptyCart()}>Vaciar Carrito</button>
            <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
            <Link className="nav-link" to={"/"}><button className="btn btnItem">Continuar comprando</button></Link>
            <Link className="nav-link" to={"/checkout"}><button className="btn finishBtn">Finalizar Compra</button></Link>
          </div>
        </div> 
      </>
    }
    </>
  )
}
