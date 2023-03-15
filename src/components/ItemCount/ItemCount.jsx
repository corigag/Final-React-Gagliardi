import React from 'react';
import { useState } from 'react';

export const ItemCount = ({ValorInicial, stock, onAdd}) => {

    const [contador, setContador] = useState(ValorInicial)

    const sumar = () => contador < stock && setContador(contador+1);
    const restar = () => contador > ValorInicial && setContador(contador-1)
    
  return (
    <div>
        <button type="button" className="btn btnItem m-2" onClick={()=> restar()}>-</button>
        {contador}
        <button type="button" className="btn btnItem m-2" onClick={() => sumar()}>+</button>
        <button type="button" className="btn btn-secondary" onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  )
}
