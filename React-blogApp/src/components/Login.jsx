import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const[form,setForm]=useState({
    Email:'',
    Password:''
  }) 
  const navigate=useNavigate();          // redirecting or navigating to a different page

  function capValue(){
   //console.log(form);
   axios.post('/api/user/login',form).then((res)=>{
    alert(res.data.message);
    if(res.data.key){
      sessionStorage.setItem('logintoken',res.data.key);   // to save the data and token
      navigate('/blogs');
    }
    else{
      navigate('/');
    }
    
   

   }).catch((error)=>{
    alert('Invalid Login');
   })
  }            
  return (
    <div class='container1' style={{margin:'10%'}}>
        <Typography variant='h3' style={{color:'white',marginTop:'20px'}}>BlogApp Login</Typography>
        <br></br><br></br>
        <div>
        <TextField label='Email' variant='outlined' name='Email' onChange={(e)=>{
          setForm({...form,Email:e.target.value})                     // (...form) spread operator to concatenate the object
        }} style={{marginLeft:'50px'}}></TextField>
        </div>
        <br />
        <div>
        <TextField label='password' variant='outlined' name='Password' onChange={(e)=>{
          setForm({...form,Password:e.target.value})
        }} style={{marginLeft:'50px'}}></TextField>
        </div>
        
        <br></br>
        <Button color='secondary' variant='contained' onClick={capValue} style={{marginLeft:'110px'}}>Login</Button> <br />
        <Link to={'/signup'} style={{textDecoration:'none',marginLeft:'55px',color:'white'}}>New user? please Register here</Link>     {/* here the link is there to go to the required page and the path is provided  */}

    </div>
  )
}

export default Login