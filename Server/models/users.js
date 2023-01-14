import mongoose, { model } from "mongoose";

const Schema=mongoose.Schema



const username=new Schema({username:{
type:String,
required:true,
unique:true,
trim :true,
},
},{
    timestamps:true
})
const User=mongoose.model("Exercise",UserSchema)
module.exports= User

