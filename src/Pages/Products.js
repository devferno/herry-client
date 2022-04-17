import {useEffect, useState} from "react";
import SearchBar from "../components/SearchBar";
import { Box, Paper, Typography, Grid, Rating, Button } from "@mui/material";
import Original from "../assets/original.jpg";
import {Masonry} from "@mui/lab";
import {Link} from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";

const Products = () => {
  const [productList,setProductList]=useState([]);
  useEffect(()=>{
    axios.get("/product").then(res=>setProductList([...res.data]));
  },[]);
  return (
    <Box>
      <SearchBar />
    
      <Box sx={{ width:"100%", minHeight: 393 }}>
      <Masonry columns={{xs:2,md:3}} spacing={1}>
        {productList.map((product, index) => (
                      <Paper  square elevation={1}>
                      <img src={`data:image/png;base64,${Buffer.from(product.images[0].data.data).toString('base64')}`} alt="" width="100%" />
                      <Box sx={{ p: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                          <Rating
                            name="read-only"
                            value={2.4}
                            precision={0.5}
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: "black",
                              },
                              fontSize: "18px",
                            }}
                            readOnly
                          />
                          <Typography variant="h6">{product.price} $</Typography>
                        </Box>
                        <Typography variant="body2" gutterBottom>{product.description}</Typography>
                        <Box sx={{display:"flex",justifyContent:"end"}}>
                            <Link to={`/products/${product._id}`} style={{textDecoration:"none"}}>
                            <Button variant="contained" disableElevation size="small">See Details</Button>
                            </Link>
                        </Box>
                      </Box>
                    </Paper>
        ))}
      </Masonry>
    </Box>
    </Box>
  );
};

export default Products;
