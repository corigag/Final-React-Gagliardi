import './App.css'; 
import 'react-toastify/dist/ReactToastify.css';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components 
import { Navbar } from './NavBar/Navbar';
import { ItemsListContainer } from "./ItemsListContainer/ItemsListContainer";
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';

//Toastify
import { ToastContainer } from 'react-toastify';

//Context
import { CarritoProvider } from '../context/carritoContext';

import { cargarBDD } from '../utils/firebase';

export const App = () => {
  cargarBDD()
  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<ItemsListContainer />}/>
          <Route path='/category/:categoria' element={<ItemsListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <ToastContainer/>
      </CarritoProvider>
    </BrowserRouter>
      
    </>
  )
}