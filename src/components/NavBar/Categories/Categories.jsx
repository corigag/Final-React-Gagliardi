import React from 'react'
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
  
        <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <button className='btn'> Productos</button> 
           </a>
           <ul className="dropdown-menu">
             <li><Link className="dropdown-item" to={'/category/1'}>Medicina Natural</Link></li>
             <li><hr className="dropdown-divider" /></li>
             <li><Link className="dropdown-item" to={'/category/2'}>Higiene</Link></li>
             <li><Link className="dropdown-item" to={'/category/3'}>Cuidado del sol</Link></li>
             <li><Link className="dropdown-item" to={'/category/4'}>Cuidado de la piel</Link></li>
           </ul>
        </li>
  )
}
