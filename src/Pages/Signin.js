import React from 'react'
import {Box,Typography,Button} from "@mui/material";
import {CustomInput,Wrapper} from "./Signup";
import {Link} from "react-router-dom";
import Back from "../assets/back2.jpg";


const Signin = () => {
    const formStyle={display:"flex",flexDirection:"column",width:{xs:"100%",md:"50%"},padding:4};
    const inputGroupeStyle={display:"flex",flexDirection:"column",margin:"8px 0"}
  return (
   <Wrapper image={Back}>
        <Box component="form" sx={formStyle}>
               <Typography variant="h4" gutterBottom>Sign in</Typography>
               <Box sx={inputGroupeStyle}>
                   <Typography variant="body1">Email</Typography>
                   <CustomInput type="text" placeholder='example@mail.com'/>
               </Box>
               <Box sx={inputGroupeStyle}>
                   <Typography variant="body1">Password</Typography>
                   <CustomInput type="password" placeholder='at least 8 characters'/>
               </Box>
               
                <Button  sx={{width:"100%",margin:"12px 0"}} disableElevation variant="contained">Sign in</Button>

                <Typography variant="body1" marginTop={1}>You dont have  an account ? &nbsp;
                <Link to="/signup" style={{color:"#795548",fontWeight:"bold",textDecoration:"none"}}>
                 Sign up
                </Link>
                </Typography>
           </Box>
   </Wrapper>
  )
}

export default Signin