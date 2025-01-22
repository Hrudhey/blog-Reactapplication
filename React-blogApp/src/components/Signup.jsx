import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
   const[form,setForm]=useState({
    Name:'',  
    Email:'',
    Password:'',
    Phone:'',
    Address:''
    }) 
    const navigate=useNavigate();

    function capValue(){
      //console.log(form);
      axios.post('/api/user/signUp',form).then((res)=>{
       alert(res.data.message);
       navigate('/');
      
   
      }).catch((error)=>{
       alert('Please SignUp');
      })
     }    

  return (
    <div style={{margin:'8%'}}>
         <Typography variant='h3' style={{color:'#faf0ca',fontFamily:'monospace'}}>Signup</Typography>
         <br></br><br></br>
        <Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 6 }}>
    <TextField fullWidth label='Name' variant='outlined' name='Name' onChange={(e)=>{
          setForm({...form,Name:e.target.value})
        }}></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Email' variant='outlined' name='Email' onChange={(e)=>{
          setForm({...form,Email:e.target.value})
        }}></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Password' variant='outlined' name='Password' onChange={(e)=>{
          setForm({...form,Password:e.target.value})
        }}></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Phone' variant='outlined' name='Phone' onChange={(e)=>{
          setForm({...form,Phone:e.target.value})
        }}></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <TextField fullWidth label='Address' variant='outlined' name='Address' multiline rows={4} onChange={(e)=>{
          setForm({...form,Address:e.target.value})
        }}></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }} > 
  <Button variant='contained' color='warning' onClick={capValue}>Register</Button>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
   <Link to={'/'} style={{textDecoration:'none'}}>Alredy Registered? Login here</Link>
  </Grid>
</Grid>
    </div>
  )
}

export default Signup