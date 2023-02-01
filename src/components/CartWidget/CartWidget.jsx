import React from 'react'

export const CartWidget = ({cantidadCarrito}) => {
  return (
    <>
      <button className="btn nav-link pt-2 mt-2 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src="/images/iconoCarrito.png" alt="icono carrito" id="icono_carrito" width={20} height={20} /></button>
      <p className="pt-3 mt-2 me-2">{cantidadCarrito}</p>
    </>
  )
}
