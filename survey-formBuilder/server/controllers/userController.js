const User=require('../models/userModel')
const asyncHandler=require('express-async-handler')
const registerUser=asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body;
    const userExists=await User.findOne({email});
    if(userExists){
        res.send("Already Exist");
    }

    const user=await User.create({
        name,
        email,
        password,
    });
    if(user)
    {
        res.send("User Added")
    }
    else{
        res.status('Something went wrong')
    }
})
const login=asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user&&(await user.matchPassword(password))){
       res.send("Authenticated")
    }

    else{
        res.send('Something went wrong')
    }
})
module.exports={
    registerUser,
    login
};