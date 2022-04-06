import React from 'react'
import Navbar from './components/Navbar'
import {Container} from "@mui/material"
import Hero from "./components/Hero";
import Signup from './Pages/Signup';
import {Routes,Route} from "react-router-dom"
import Signin from './Pages/Signin';
import Products from './Pages/Products';
const App = () => {

  return (

    <Container>

      <Navbar/>
      <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Hero/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/products" element={<Products/>}/>
      </Routes>
      
    </Container>
  )
}

export default App