import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import axiosInstance from '../axiosInterceptor';
const Addblog = () => {
  const[form,setForm]=useState({
    title:'',
    description:'',
    image:''
  }) 
  const navigate=useNavigate();          // redirecting or navigating to a different page
  const location=useLocation();

  function capValue(){
   if(location.state!=null){
        axiosInstance.put('/api/blog/edit/'+location.state.val._id,form).then((res)=>{
          alert(res.data.message);
          navigate('/blogs')
        })
   }else{
    axiosInstance.post('/api/blog/addblog',form).then((res)=>{
      alert(res.data.message);
      navigate('/blogs');
     
  
     }).catch((error)=>{
      alert('Invalid Login');
     })
   }
   
  }
   useEffect(()=>{
      if (location.state!=null) {                                  // to extract the data passed in the navigate we use a react hook called useLocation
        setForm({...form,title:location.state.val.title,
          description:location.state.val.description,
          image:location.state.val.image
        })
      } else {
        setForm({...form,title:'',
          description:'',
          image:''
      })
    }
   },[])

  return (
    <div style={{margin:'8%'}}>
         <Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 6 }}>
    <TextField fullWidth label='title' variant='outlined' value={form.title} name='title' onChange={(e)=>{
          setForm({...form,title:e.target.value})
  }}></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Description' variant='outlined' value={form.description} name='description' onChange={(e)=>{
          setForm({...form,description:e.target.value})
  }}></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <TextField fullWidth label='Image url' variant='outlined' value={form.image} name='image' multiline rows={4} onChange={(e)=>{
          setForm({...form,image:e.target.value})
  }}></TextField>
  </Grid>
  <Button color='secondary' variant='contained' onClick={capValue}>AddBlog</Button> <br />
  
</Grid>
    </div>
  )
}


export default Addblog
// {app.js, routes, crud of blog, model {files- schema- title,description,image}, user-model-{schema- Name, email,password,phone, address}}

