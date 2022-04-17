import React from 'react'
import Navbar from './components/Navbar'
import {Container, CssBaseline} from "@mui/material"
import Hero from "./components/Hero";
import Signup from './Pages/Signup';
import {Routes,Route} from "react-router-dom"
import Signin from './Pages/Signin';
import Products from './Pages/Products';
import ProductDetails from "./components/ProductDetails";
import {CartProvider} from "./contexts/CartProduct";
import axios from "axios";

axios.defaults.baseURL="http://localhost:5000";

const App = () => {

  return (

    <Container>
     <CartProvider>
      <Navbar/>
      <CssBaseline/>
      <Routes>

      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Hero/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
      </CartProvider>
    </Container>
  )
}

export default App