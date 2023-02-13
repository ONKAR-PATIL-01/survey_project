import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  
  return (
    // <nav>

    //   <NavLink to='/'>Home</NavLink>

    //   <NavLink to='/login'>Login / Signup</NavLink>
    //   <NavLink to='/dashboard'>Dashboard</NavLink>
    //   <NavLink to='/dnd'>Generate Form</NavLink>
    // </nav>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className='toolbar'>
  <NavLink to='/'>Home</NavLink>

  <NavLink to='/login'>Login / Signup</NavLink>
  <NavLink to='/dashboard'>Dashboard</NavLink>
  <NavLink to='/dnd'>Generate Form</NavLink>      
  </Toolbar>
    </AppBar>
  </Box>
  )
}
