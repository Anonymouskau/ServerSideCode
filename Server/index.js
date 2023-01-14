import  express  from "express";
import mongoose from "mongoose";
import users from './routes/usersrouter.js'
const app=express()

const port =process.env.port ||5000
const url="mongodb+srv://memories:<password>@cluster0.oo9nqoo.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)});
mongoose.set('strictQuery', false);
 const connection=mongoose.connection 
connection.once('open',()=>{
    console.log("open");
})



app.listen(port,()=>{console.log("coonection on port 5000");})


app.use('/users',usersroute)
