import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getProduct } from '../../utils/firebase';


export const ItemDetailContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() =>{
        getProduct(id).then(prod =>{
            setProducto(prod)
        })

    } , [])
  return (
    <ItemDetail item={producto}/>
  )
}
