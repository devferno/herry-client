import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const SearchBar = () => {
  const categoryList = [
    "SHIRTS",
    "T-SHIRTS",
    "SHOES",
    "GILETS",
    "JEANS",
    "BAGS",
    "HOODIES",
    "PERFUM",
  ];
  return (
    <Box>
      <Box
        component="form"
        sx={{
          
          display: "flex",
          alignItems: "end",
          padding: 1,
          my: 2,
          justifyContent: "center",
        }}
      >
        <FormControl
          variant="standard"
          sx={{ justifyContent: "center", m: 1, minWidth: 100 }}
        >
          <InputLabel id="demo-simple-select-standard-label">gender</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="gender"
          >
            <MenuItem value={"men"}>MEN</MenuItem>
            <MenuItem value={"women"}>WOMEN</MenuItem>
            <MenuItem value={"kids"}>KIDS</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ justifyContent: "center", m: 1, minWidth: 100 }}
        >
          <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="price"
          >
            <MenuItem value={50}>0-50</MenuItem>
            <MenuItem value={100}>50-100</MenuItem>
            <MenuItem value={150}>50-150</MenuItem>
            <MenuItem value={200}>150-200</MenuItem>
            <MenuItem value={250}>200+</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Category"
          >
            {categoryList.map((item, index) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          color="beige"
          sx={{ m: 1 }}
          disableElevation
          variant="contained"
        >
          SEARCH
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
