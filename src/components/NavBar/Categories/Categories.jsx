import React from 'react'

export const Categories = () => {
  return (
  
        <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Productos
           </a>
           <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Medicina Natural</a></li>
             <li><hr className="dropdown-divider" /></li>
             <li><a className="dropdown-item" href="#">Higiene</a></li>
             <li><a className="dropdown-item" href="#">Cuidado del sol</a></li>
             <li><a className="dropdown-item" href="#">Cuidado de la piel</a></li>
           </ul>
        </li>
  )
}
