import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Components 
import { Navbar } from './NavBar/Navbar';
import { ItemsListContainer } from "./ItemsListContainer/ItemsListContainer";
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';


export const App = () => {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/> 
      
      <Routes>
        <Route path='/' element={<ItemsListContainer />}/>
        <Route path='/category/:categoria' element={<ItemsListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}