import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';

import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';


const Home = () => {
   const [cardData,setData]=useState([]);
   const navigate=useNavigate();


   useEffect(()=>{
      axiosInstance.get('/api/blog/').then((res)=>{
         setData(res.data);
        

      }).catch((err)=>{
        console.log(err);
      })
   },[])

   function update_blog(val){
     navigate('/addblogs',{state:{val}})           //through a parameter val we are passing the data to the addblogs page
   }                                     // we use state to pass the values like this in navigate fn
// function delete_blog(id){
//   axiosInstance.delete(`http://localhost:3000/blog/delete/${id}`,cardData).then((res)=>{
//     alert(res.data.message);
//     navigate('/blogs')
//   })
// }

function delete_blog(id) {
  axiosInstance.delete(`/api/blog/delete/${id}`).then((res) => {
      alert(res.data.message);
      // Filter out the deleted blog from the state
      setData((prevData) => prevData.filter((blog) => blog._id !== id));
    })
    .catch((err) => {
      console.error(err);
    });
}


  return (
    
    <div style={{margin:'5%'}}>
     <Grid container spacing={2}>
        {cardData.map((row)=>(     
        <Grid size={3}>
        <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'wheat'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {row.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {row.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='secondary' variant='contained' onClick={(()=>{
          update_blog(row);
        })}>Update</Button>
        <Button size="small" color='warning' variant='contained' onClick={(()=>{
          delete_blog(row._id);
        })}>Delete</Button>
       
      </CardActions>
    </Card>
        </Grid>
        ))}
    </Grid>
     
    </div>
    
  )
}

export default Home




