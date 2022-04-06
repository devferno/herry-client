import { Box ,IconButton,Typography,Button,MenuItem,Menu} from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";

const SearchInput=styled("input")(
  ({theme})=>({
    padding:"0 4px",border:"none",borderBottom:"solid black 1px",display:"block",
    "&:focus":{
      outline:"none",
      padding:"5px 4px",
      borderBottom:`solid 2px ${theme.palette.primary.main}`
    }
  })
)

const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Link to="/" style={{textDecoration:"none"}}><Typography variant="h4" sx={{color:"black",letterSpacing:"-8px"}}>HERRY</Typography></Link>
      <Box display="flex" alignItems="center">
        <Box component="form" display="flex" alignItems="center" >
        <SearchInput type="text" required  placeholder="search"/>
        <IconButton type="submit"><SearchIcon/></IconButton>
        </Box>
        <IconButton><ShoppingCartIcon/></IconButton>
        <IconButton
            onClick={handleClick}

            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <PersonIcon/>
          </IconButton>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/signup" style={{textDecoration:"none"}}>
        <MenuItem>
          <Button variant="outlined">Sign up</Button>
        </MenuItem>
        </Link>
        <Link to="/signin" style={{textDecoration:"none"}}>
        <MenuItem>
          <Button variant="contained">Sign in</Button>
        </MenuItem>
        </Link>
      </Menu>
      </Box>
    </Box>
  )
}

export default Navbar