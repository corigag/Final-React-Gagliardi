import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() =>{
        consultarBDD('../json/productos.json').then(prods =>{
             const prod = prods.find(item => item.id === parseInt(id));
            setProducto(prod)
        })

    }

    )
  return (
    <ItemDetail item={producto}/>
  )
}
