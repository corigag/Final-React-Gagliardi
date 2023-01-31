import React from 'react'

export const SocialMedia = () => {
  return (
        <ul className="navbar-nav justify-content-end pt-2 mt-2 me-5 flex-grow-1 pe-3">      
          <li>
            <a className="nav-link pb-3" href="https://www.instagram.com/hampi_yura/?hl=es" target="_blank" rel="noreferrer"><img src="public/images/insta.svg" alt="logo Instagram" width={20} height={20} /></a>
          </li>
          <li>
            <a className="nav-link" href="https://api.whatsapp.com/send?phone=+5495312597763&text=Hola%20Hampi%20Yura%20%F0%9F%8D%83%20" target="_blank" rel="noreferrer"><img src="public/images/icono-whatsapp.svg" alt="icono whatsapp" width={20} height={20} /></a>
          </li>               
        </ul>
  )
}
