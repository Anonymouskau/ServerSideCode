import { Router  } from "express";
import User  from '../models/users'

let router =Router()



router.route('/').get((req,res)=>{
User.find().then(users=>res.json(users)).catch(err=>res.status(400).json("Error",err))

 


})


router.route('/add').post((req,res)=>{

const username =req.body.username
const newuser =new User({username})



newuser.save().then(()=>{res.json('users added')}).catch(err=>res.status(400).json('Error',err))


})

module.exports=router