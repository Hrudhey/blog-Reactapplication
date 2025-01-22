import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  
   const navigate = useNavigate();

  function handleLogout(){
    // Clear the token
    sessionStorage.removeItem('logintoken');
    // Redirect to login page
     navigate('/');
   }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar style={{backgroundColor:'purple',marginLeft:'0px'}}>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BlogApp
        </Typography>
     <Link to={'/blogs'}> <Button style={{color:'white'}}>Home</Button></Link>
     <Link to={'/addblogs'}> <Button  style={{color:'white'}}>ADDBLOG</Button></Link>
     <Link to={'/'}> <Button  style={{color:'white'}} onClick={handleLogout} >Logout</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar