import React from 'react'
import { useCarritoContext } from '../../context/carritoContext'

export const ItemCart = ({item}) => {
  const { removeItem } = useCarritoContext()

  return (
    <div className="card cardCart m-3" style={{maxWidth: '500px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid rounded-start" alt={`Imagen de ${item.name}`} />
        </div>
        <div className="col-md-8">
        <div className="card-body mt-3">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Cantidad: {item.cant} </p>
          <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.price)} </p>
          <p className="card-text">Subtotal: ${new Intl.NumberFormat('de-DE').format(item.price*item.cant)} </p>
          <button className="btn btnEmpty" onClick={()=> removeItem(item.id)} >Eliminar</button>
        </div>
        </div>
      </div>
    </div>
  )

}
