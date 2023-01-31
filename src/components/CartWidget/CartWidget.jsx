import React from 'react'

export const CartWidget = ({cantidadCarrito}) => {
  return (
    <>
      <button className="btn nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="../../public/images/iconoCarrito.png" alt="icono carrito" id="icono_carrito" width={20} height={20} /></button>
      <p>{cantidadCarrito}</p>
    </>
  )
}
