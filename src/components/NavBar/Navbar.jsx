import React from 'react'
import { Brand } from "./Brand/Brand";
import { Categories } from './Categories/Categories';
import { SocialMedia } from "./SocialMedia/SocialMedia";
import { CartWidget } from '../CartWidget/CartWidget';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
      <div className="container-fluid">
        <Brand/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Categories/>
        </ul>
        <SocialMedia/>
        <CartWidget cantidadCarrito={7}/>
      </div>
      </div>
    </nav>
  )
}
