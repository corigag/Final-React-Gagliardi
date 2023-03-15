import { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    //Si existe producto en el carrito
    const isInCart = (id) => {
        //Si existe el producto lo retorna, si no existo retorna undefined 
        return carrito.find(prod => prod.id === id)
    }

    //Agregar producto en el carrito

    const addItem = (producto, cantidad) => {
        
        if (isInCart(producto.id)) {
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad

            toast( `Agregaste ${aux[indice].cant} unidad(es) de ${aux[indice].name} al carrito`, {
                position: "top-right",
                autoClose: 2000,
                 hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    background: 'radial-gradient(circle, rgba(208,199,203,1) 0%, rgba(190,176,188,1) 100%',
                    color: 'black',
                }
            });
            setCarrito(aux)
            
        } else {
            
            const prodCart = {
                ...producto,
                cant: cantidad
            }
            toast( `Agregaste ${prodCart.name} al carrito`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    background: 'radial-gradient(circle, rgba(208,199,203,1) 0%, rgba(190,176,188,1) 100%',
                    color: 'black',
                }
                });

            setCarrito([...carrito, prodCart])
        }

    }

    //Eliminar producto del carrito

    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //Vaciar carrito
    const emptyCart = () => {
        setCarrito([])
    }

    //Cantidad Total de productos en el carrito
    const getItemQuantity = () => {
        //return carrito.length
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //Precio total de la compra
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.price), 0)
    }

    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }} >
            {props.children}
        </CarritoContext.Provider>
    )

}