import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import {NavLink} from 'react-router-dom'
export const Navbar = ({navshow,setnavshow}) => {
  
  return (
    navshow?
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className='toolbar'>
  <NavLink to='/dashboard'>Dashboard</NavLink>
  <NavLink to='/dnd'>Generate</NavLink> 
  {/* <NavLink to='/responces'>Responces</NavLink>  */}
  <NavLink to='/' onClick={()=>{
    setnavshow(false);
    localStorage.setItem("userInfo","Failed")
  }}>Logout</NavLink>    

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
