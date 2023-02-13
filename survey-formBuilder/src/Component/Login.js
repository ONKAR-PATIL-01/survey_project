import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Box, Button, TextField, Typography } from "@mui/material";
export const Login = () => {
  const [isSignup, setisSignup] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate();
  const [input1, setinput1] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlechange=(e)=>{
     setinput1((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value

     }))
  }
 
  const  handleSubmit =async(e)=>{
    e.preventDefault();
    setemail(input1.email);
    setname(input1.name);
    setpassword(input1.password);
    try{
      const config={
        headers:{
          "Content-type":"application/json"
        }
      }
    
const {data}=await axios.post(
  "http://localhost:8080/user/login",
  {
   email,
   password,
  },
  config
);
      console.log(data);
      localStorage.setItem('userInfo',JSON.stringify(data))
      if(data==="Authenticated")
      {
      
          navigate('/dashboard');
        
      }
    }catch(error){
      
    }

  
  if(isSignup)
  {
    try{
      const config={
        headers:{
          "Content-type":"application/json"
        }
      }
    const {data}=await axios.post(
      "http://localhost:8080/user",
      {
       name,
       email,
       password,
      },
      config
    );

          console.log(data);
          localStorage.setItem('userInfo',JSON.stringify(data))
        
        
        }catch(error){
          
        }
      }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={300}
        alignItems={"center"}
        justifyContent={"center"}
        margin="auto"
        marginTop={10}
        padding={3}
        boxShadow={"5px 5px 10px #000"}
        borderRadius={15}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 15px #000",
          },
        }}
      >
        <Typography variant="h3" padding={2}>
          {isSignup ? "Signup" : "Login"}
        </Typography>
        {isSignup && (
          <TextField
            onChange={handlechange}
            name="name"
            value={input1.name}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
          >
            Name
          </TextField>
        )}
        <TextField
          onChange={handlechange}
          name="email"
          value={input1.email}
          margin="normal"
          type={"email"}
          variant="outlined"
          placeholder="Email"
          
        >
          Email
        </TextField>
        <TextField
          onChange={handlechange}
          name="password"
          value={input1.password}
          margin="normal"
          type={"password"}
          variant="outlined"
          placeholder="Password"
        >
          Password
        </TextField>
        <Button
          style={{
            borderRadius: 35,
            color: "#000",
            fontWeight:'bold',
            padding: "18px 36px",
            fontSize: "18px",
          }}
          onClick={() => setisSignup(!isSignup)}
        >
          {" "}
          {isSignup ? "Already a User Login" : "New User Signup"}
        </Button>

        <div>
      
          <Button 
          type="submit"
            style={{
              borderRadius: 35,
              backgroundColor: "#000",
              color:'#fff',
              fontWeight: 'bold',
              padding: "18px 36px",
              fontSize: "18px",
            }}
            variant="contained"
          >
            {isSignup ? "Signup" : "Login"}
           
          </Button>
         
        </div>
      </Box>
    </form>
  );
};
