import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Brand = () => {
  return (

    <li className="nav-item mx-4" >
        <Link className='nav-link' to={'/'}><img src="/images/Hampi-Yura.png" alt="logo hampi hojas" width={140} height={90} /></Link>
    </li>      
  )
}
