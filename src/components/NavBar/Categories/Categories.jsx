import React from 'react'
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
  
        <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <button className='btn'> Productos</button> 
           </a>
           <ul className="dropdown-menu">
             <li><Link className="dropdown-item" to={'/category/Tinturas'}>Medicina Natural</Link></li>
             <li><hr className="dropdown-divider" /></li>
             <li><Link className="dropdown-item" to={'/category/Higiene'}>Higiene</Link></li>
             <li><Link className="dropdown-item" to={'/category/Verano'}>Cuidado del sol</Link></li>
             <li><Link className="dropdown-item" to={'/category/Cremas'}>Cuidado de la piel</Link></li>
           </ul>
        </li>
  )
}
