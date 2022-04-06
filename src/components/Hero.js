import React from 'react'
import {Box,Typography} from "@mui/material";
import Back from "../assets/hero.jpg";

const Hero = () => {
  const style ={color:"#d9b99b",fontWeight:"bold",textShadow:"0px 0px",display:{xs:"none",md:"block"},position:"absolute"}
  return (
    <Box sx={{maxHeight:"600px",height:"100vh",position:"relative"}}>
         <Typography variant="h1" sx={{...style,top:"45%",display:{xs:"block",md:"none"},left:"0"}} >STAND BY YOUR STYLE</Typography>
        <Typography variant="h1" sx={{...style,top:"0",left:"0"}} >STAND BY</Typography>
        
        <Box sx={{width:"500px",maxWidth:"100%",height:"100%",margin:"20px auto"}}>
            <img src={Back} style={{objectFit:"cover",width:"100%",height:"100%"}} alt=""/>
        </Box>
        <Typography variant="h1" sx={{...style,bottom:"0",right:"0"}} >YOUR STYLE</Typography>
    </Box>
  )
}

export default Hero