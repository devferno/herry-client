import React from "react";
import SearchBar from "../components/SearchBar";
import { Box, Paper, Typography, Grid, Rating, Button } from "@mui/material";
import Original from "../assets/original.jpg";
import {Link} from "react-router-dom";

const Products = () => {
  const productList = [
    { title: "Sweath Shirt",description:"Sweat Shirt Lofkf jsj lorem upsum domen soou ", image: Original, price: 98, rating: 4 },
    { title: "Sweath Shirt",description:"Sweat Shirt Lofkf jsj lorem upsum domen soou ", image: Original, price: 98, rating: 4 },
    { title: "Sweath Shirt",description:"Sweat Shirt Lofkf jsj lorem upsum domen soou ", image: Original, price: 98, rating: 4 },
    { title: "Sweath Shirt",description:"Sweat Shirt Lofkf jsj lorem upsum domen soou ", image: Original, price: 98, rating: 4 },
    { title: "Sweath Shirt",description:"Sweat Shirt Lofkf jsj lorem upsum domen soou ", image: Original, price: 98, rating: 4 },
    { title: "Sweath Shirt",description:"Sweat Shirt Lofkf jsj lorem upsum domen soou ", image: Original, price: 98, rating: 4 },
  ];
  return (
    <Box>
      <SearchBar />
      <Grid container>
        {productList.map((product,index) => (
          <Grid key={index} xs={12} md={4} lg={3}>
            <Paper sx={{ m: 1 }} square elevation={1}>
              <img src={product.image} alt="" width="100%" />
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
                    <Link to={`/product/${product._id}`} style={{textDecoration:"none"}}>
                    <Button variant="contained" disableElevation size="small">See Details</Button>
                    </Link>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
