const User=require('../models/userModel')
const asyncHandler=require('express-async-handler')
const validator=require("email-validator");
validator.validate("test@email.com")
const registerUser=asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body;
    if(validator.validate(req.body.email)){
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
}
else{
    res.status('Email is not valid')
}
})
const login=asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    if(validator.validate(req.body.email)){

    const user=await User.findOne({email});
    if(user&&(await user.matchPassword(password))){
       res.send("Authenticated")
    }

    else{
        res.send('Something went wrong')
    }
}
else{
    res.status('Email is not valid')
}

})
module.exports={
    registerUser,
    login
};