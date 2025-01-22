const express= require('express');
const router= express.Router();
const jwt= require('jsonwebtoken');
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const blogModel= require('../model/blogData');     // for performing all crud operations use model file

function verifytoken(req,res,next){
  let token=req.headers.token;            // extract the token from the request
  try {
    if(!token) throw 'Unauthorised access';
    else{
        let payload=jwt.verify(token,'blogApp');       // verifying the token using the secret key
        if(!payload) throw 'Unauthorized access';
        next();                                  // we are specifying explicitly that move on to the next request without errors
    }
  } catch (error) {
    console.log(error);
  }
  
}

// Get Operation
router.get('/',verifytoken,async(req,res)=>{
    try{
        const data= await blogModel.find();
        res.send(data);
    }catch(error){
        res.status(400).send('Data not found');
    }
})

//Post Operation
router.post('/addblog',verifytoken,async (req,res)=>{
    try{
        var thing= req.body;
        const data= new blogModel(thing);           //embedding into the modelname
        await data.save();
        res.status(200).send({message:'Blog added'})
     //   res.redirect('/');
    } catch (error){
        res.status(404).send('Post Unsuccessful');
    }
})

// Put Operation
router.put('/edit/:id',verifytoken,async(req,res)=>{
    try{
        const data=await blogModel.findByIdAndUpdate(req.params.id,req.body);
       res.status(200).send({message:'Updated'});                                      // to update we changed the put into post and then added res.redirect 
    }catch(error){
       res.status(404).send('Update unsuccessful');
    }
})

//Delete Operation
router.delete('/delete/:id',verifytoken,async(req,res)=>{
    try{
        const data= await blogModel.findByIdAndDelete(req.params.id);
        res.status(200).send({message:'Delete Successful'});
    }catch(error){
        res.status(404).send('Delete Unsuccessful');
    }
})






module.exports=router