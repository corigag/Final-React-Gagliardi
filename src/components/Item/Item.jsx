import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
  
  return (
    
      <div className="card m-3" style={{width: '18rem'}}>
        <img src={item.image} className="card-img-top imagen imgProducto mt-2" alt={`imagen producto ${item.name}`} />
        <div className="card-body d-flex justify-content-between">
          <div id="productInfo">
            <h5 className="cardItemTitle">{item.name}</h5>
            <p className="card-text valor">${item.price}</p>
            <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btnItem"> Ver Producto</button></Link> 
          </div>
        </div>
      </div>
  )
}
