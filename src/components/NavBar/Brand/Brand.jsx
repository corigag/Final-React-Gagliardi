import React from 'react'
import { Link  } from 'react-router-dom'

export const Brand = () => {
  return (

    <li className="nav-item mx-4" >
        <Link className='nav-link' to={'/'}><img className="mb-2" src="/images/Hampi-Yura.png" alt="logo hampi hojas" width={140} height={90} /></Link>
    </li>      
  )
}

