
const express =require('express');

const userRoute=require('./routes/userRouter')
const dotenv=require('dotenv')

const app=express();
app.use(express.json())
const connectDB=require("./config/db")
dotenv.config();
connectDB();

app.get('/',(req,res)=>{
    res.send("Onkar's Backend Development")
})
app.use('/user',userRoute)
app.listen(8080,()=>{
    console.log('Running  on port 8080');
})