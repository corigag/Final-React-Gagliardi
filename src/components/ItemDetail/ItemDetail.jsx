import React from 'react'
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {
  return (
    <div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`/images/${item.image}`} className="img-fluid rounded-start" alt={`imagen producto ${item.name}`} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">${item.price}</p>
        <ItemCount ValorInicial={1} stock={item.stock}/>
      </div>
    </div>
  </div>
</div>
  )
}

