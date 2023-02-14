import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import {NavLink} from 'react-router-dom'
export const Navbar = ({navshow,setnavshow}) => {
  
  return (
    navshow?
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className='toolbar'>
  <NavLink to='/dashboard'>Dashboard</NavLink>
  <NavLink to='/dnd'>Generate Form</NavLink>  
  <NavLink to='/' style={{float:'right',marginRight:'20px',marginLeft:'950px'}} onClick={()=>{
    setnavshow(false);
    localStorage.setItem("userInfo","Failed")
  }}>Logout</NavLink>    
   <Typography variant="title" >
          <img style={{ borderRadius: '50%' }} src={require("../iauro.jpeg")} width={55} height={45} alt='logo'  />
          </Typography>
  </Toolbar>
    </AppBar>
  </Box> : <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className='toolbar'>
 

  <NavLink to='/login'>Login / Signup</NavLink>  
  </Toolbar>
    </AppBar>
  </Box>
  )
}
