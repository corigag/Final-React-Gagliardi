import React from 'react'
import { Link } from 'react-router-dom'
import { useCarritoContext } from '../../context/carritoContext'
export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
      <>
        <Link className="nav-link" to={"/cart"}>
          <div className=" d-flex">
            <button className="btn nav-link pt-2 mt-2 " type="button"  ><img src="/images/iconoCarrito.png" alt="icono carrito" id="icono_carrito" width={20} height={20} /></button>
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
          </div>
        </Link>
  
      </>
    )
  }