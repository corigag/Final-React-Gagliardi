import React from 'react'
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useCarritoContext } from '../../context/carritoContext'

export const ItemDetail = ({item}) => {

  const {addItem} = useCarritoContext()

  const onAdd = (cantidad) => {
    addItem(item, cantidad)
  }
  return (
    <div className="card m-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid rounded-start" alt={`imagen producto ${item.name}`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">${item.price}</p>
            <ItemCount ValorInicial={1} stock={item.stock} onAdd={onAdd}/>
          <div className="d-flex align-items-end">
            <Link className="nav-link" to={"/"}><button className="btn btnItem">Continuar comprando</button></Link>
            <Link className="nav-link" to= {'/cart'}> <button className='btn finishBtn'>Finalizar Compra</button> </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

