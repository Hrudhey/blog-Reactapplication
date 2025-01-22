import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const token=sessionStorage.getItem('logintoken');
    let verifyUser=false;
    if(token){                     // if token is present the user is true user
        verifyUser=true;
    }
  return (
    verifyUser?<Outlet/>:<Navigate to={'/'}/>       // Outlet gives whatever component that the user goes back after logout, if token is not then goes to login page
    
  )
}

export default PrivateRoutes