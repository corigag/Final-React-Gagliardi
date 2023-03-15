import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCarritoContext } from '../../context/carritoContext'
import { createOrdenCompra, getOrdenCompra, getProduct , updateProduct} from '../../utils/firebase'
import { Link } from 'react-router-dom'

export const Checkout = () => {

  const {carrito, emptyCart , totalPrice} = useCarritoContext() 
  const navigate = useNavigate()
  const datosForm = useRef()

  const consultarForm = (e) => { 
    e.preventDefault()
    const data = new FormData(datosForm.current)
    const cliente = Object.fromEntries(data) 

    
    const aux =   [...carrito]
    
    aux.forEach(prodCarrito => { 
      console.log(prodCarrito.name, prodCarrito.stock , prodCarrito.cant)
      getProduct(prodCarrito.id).then(prodBDD =>{ 
        prodBDD.stock -= prodCarrito.cant
        updateProduct(prodBDD.id , prodBDD)
        
      })
      
      if(cliente.email !== cliente.repeatEmail){
        
        toast.error('El correo electronico ingresado no es correcto.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

      } else {
        const ordenCompra = createOrdenCompra(cliente, {aux} , totalPrice(), new Date().toISOString()).then(ordenCompra => {
          
          toast(`Compra finalizada. /n Gracias por elegir Hampi Yura. Su orden de compra ${ordenCompra.id} por un total de ${totalPrice()} fue realizada con exito`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        })

        e.target.reset()
        emptyCart()
        navigate("/")

      }

    })

  }
  return (
    <>
      {carrito.length === 0
        ?
        <>
        <h2>Carrito Vacio</h2>
        <p>Para finalizar su compra debe seleccionar los productos.</p>
        <Link className="nav-link" to={"/"}><button className="btn btnItem">Volver a la tienda</button> </Link>
        </>

        :
        <main className="page payment-page">
          <section className="payment-form dark"> 
            <div className="container">
              <div className="block-heading">
                <h2>Finalizar Compra</h2>
              </div>
              <form onSubmit={consultarForm} ref={datosForm} name="form"> 
                <div className="card-details mt-1">
                  <h3 className="title">Datos de Contacto</h3>
                    <div className="row">
                      <div className="form-group col-sm-6">
                        <label className="mb-1" htmlFor="card-holder">Nombre</label>
                        <input name="name" type="text" className="form-control"  />
                      </div>
                      <div className="form-group col-sm-6">
                        <label className="mb-1" htmlFor="surname">Apellido</label>
                      <div className="input-group ">
                        <input name="surname" type="text" className="form-control"  />
                      </div>
                    </div>
                    <div className="form-group col-sm-12">
                      <label className="mb-1" htmlFor="card-number">Direccion de Envío</label>
                      <input name="adress" type="text" className="form-control"  />
                    </div>
                    <div className="form-group col-sm-8">
                      <label className="mb-1" htmlFor="card-number">Ciudad</label>
                      <input name="city" type="text" className="form-control" aria-label="Card Holder"  />
                    </div>
                    <div className="form-group col-sm-4">
                      <label className="mb-1" htmlFor="cvc">Código Postal</label>
                      <input name="postCode" type="text" className="form-control" aria-label="Card Holder"  />
                    </div>
                    <div className="form-group col-sm-12">
                      <label className="mb-1" htmlFor="card-number">Correo Electrónico</label>
                      <input name="email" type="text" className="form-control"  />
                    </div>
                    <div className="form-group col-sm-12">
                      <label className="mb-1" htmlFor="card-number">Repetir correo electrónico</label>
                      <input name="repeatEmail" type="text" className="form-control"  />
                    </div>
                    <div className="form-group col-sm-12">
                      <label className="mb-1" htmlFor="card-number">Teléfono</label>
                      <input name="phoneNumber" type="number" className="form-control"  />
                    </div>
                    </div>
                    </div>
                    <div className="form-group col-sm-12 text-center">
                      <button type="submit" name="finishBtn" className="btn finishBtn p-2 mx-3 mb-3">Finalizar</button>
                    </div>
                  </form>      
                </div>
            </section>
           </main>
      }
    </>
  )
}
