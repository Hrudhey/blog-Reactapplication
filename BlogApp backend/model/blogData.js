const mongoose= require('mongoose');    // use mongoose to connect to database
const blogSchema= mongoose.Schema({
    title:String,
    description:String,
    image:String
   
})
const blogData= mongoose.model('blogdata',blogSchema);   //collection name without s
module.exports= blogData;
