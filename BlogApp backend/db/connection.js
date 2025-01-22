const mongoose= require('mongoose');   
mongoose.connect(process.env.MongoDb_url).then(()=>{   // even if env file is not given the url can be pasted here
    console.log("Connection established to DB");
}).catch(()=>{
    console.log("Not connected");
})