const express= require('express');
const morgan= require('morgan');
const index= new express();
const cors= require('cors');
index.use(morgan('dev'));
index.use(cors());
require('dotenv').config();
require('./db/connection');


const blogRoutes= require('./route/routes');
const userRoutes= require('./route/userRoute');
index.use('/blog',blogRoutes);
index.use('/user',userRoutes);









index.listen(process.env.PORT,()=>{
    console.log(`Server is listening at ${process.env.PORT}`);
})