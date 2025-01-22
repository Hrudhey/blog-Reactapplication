const mongoose= require('mongoose');    // use mongoose to connect to database
const userSchema= mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Phone:Number,
    Address:String
    
})
const userData= mongoose.model('userdata',userSchema);   //collection name without s
module.exports= userData;