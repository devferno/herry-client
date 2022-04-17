
import {Rating,Typography,Box,Button, Paper} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartList} from '../contexts/CartProduct';
import { useContext ,useEffect,useState} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import {Buffer} from "buffer";
const ProductDetails = () => {

  // const {productList,setProduct}= useContext(CartList);
 const [product,setProductDetails] = useState({images:""});
 const params=useParams();
const {id}=params;
 useEffect(()=>{
   axios.get(`/product/${id}`).then(res=>setProductDetails(res.data));
 },[])
  return (
    <Box component={Paper}  sx={{my:4,display:"flex",flexDirection:{xs:"column",md:"row"},p:2,width:{xs:"100%",md:"80%"},mx:"auto",maxWidth:"1200px"}}>    
      {product.images[0] && <><img src={`data:image/png;base64,${Buffer.from(product.images[0].data.data).toString('base64')}`} alt="" style={{width:"100%",maxWidth:"450px"}}/>
    
      <Box sx={{ml:{xs:"none",md:5},display:"flex",flexDirection:"column",width:{md:"100%"},justifyContent:"space-between"}}>
        <Box>
        <Box sx={{my:2,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Typography variant="h3">{product.name}</Typography>
        <Typography variant="h3">{product.price}$</Typography>
        
        </Box>
        <Typography variant="body1"  gutterBottom>{product.description}</Typography>
        <Typography variant="body2" gutterBottom>Gender</Typography>
        <Typography variant="body1" sx={{border:"1px solid #e3e3e3",p:1,width:"35%"}} gutterBottom>{product.gender}</Typography>
        <Typography variant="body2" gutterBottom>Category</Typography>
        <Typography variant="body1" sx={{border:"1px solid #e3e3e3",p:1,width:"35%"}} gutterBottom>{product.type}</Typography>
        <Rating sx={{my:2}} value={product.rating} readOnly/>
        </Box>
        <Box sx={{mt:1,justifySelf:"flex-end",justifyContent:"space-between",display:"flex"}}>
        <Button variant="outlined" endIcon={<ShoppingCartIcon/>} sx={{flexGrow:1}}>Add To Cart</Button>
        <Button variant="contained" sx={{ml:3,flexGrow:2}} disableElevation>Buy</Button>
        </Box>
      </Box></>}
    </Box>

  )
}

export default ProductDetails