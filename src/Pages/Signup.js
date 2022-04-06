import React from 'react';
import {styled} from "@mui/material/styles";
import {Box,Paper,Button, Typography} from "@mui/material";
import Back from "../assets/perfum.jpg"
import {Link} from "react-router-dom";

export const CustomInput=styled('input')(
    ({theme})=>({
        padding:"12px 6px",
       
        outline:"none",
        borderRadius:theme.shape.borderRadius,
        border:"2px solid #e6e6e6"
    })
)

export const Wrapper=({image,children})=>{
    return(
        <Box component={Paper} elevation={0} sx={{display:"flex",height:"80vh",padding:0,border:"2px #e3e3e3 solid",alignItems:"center",maxHeight:"550px",overflow:"hidden",margin:"4rem 0"}}>
           <Box sx={{width:"50%",display:{xs:"none",md:"block"}}}>
               <img src={image} alt="perfum" style={{objectFit:"cover",width:"100%"}}/>
           </Box>
           
           {children}
        </Box>
    )
}

const Signup = () => {
    const formStyle={display:"flex",flexDirection:"column",width:{xs:"100%",md:"50%"},padding:4};
    const inputGroupeStyle={display:"flex",flexDirection:"column",margin:"8px 0"}
  return (
   
       <Wrapper image={Back}>
           <Box component="form" sx={formStyle}>
               <Typography variant="h4" gutterBottom>Sign up</Typography>
               <Box sx={inputGroupeStyle}>
               <Typography variant="body1">Fullname</Typography>
               <CustomInput type="text" placeholder='John Smith'/>
               </Box>
               <Box sx={inputGroupeStyle}>
                   <Typography variant="body1">Email</Typography>
                   <CustomInput type="text" placeholder='example@mail.com'/>
               </Box>
               <Box sx={inputGroupeStyle}>
                   <Typography variant="body1">Password</Typography>
                   <CustomInput type="password" placeholder='at least 8 characters'/>
               </Box>
               
                <Button  sx={{width:"100%",margin:"12px 0"}} disableElevation variant="contained">Sign up</Button>

                <Typography variant="body1" marginTop={1}>Already have an account ? &nbsp;
                <Link to="/signin" style={{color:"#795548",fontWeight:"bold",textDecoration:"none"}}>
                 Sign in
                </Link>
                </Typography>
           </Box>
           </Wrapper>
  
  )
}

export default Signup