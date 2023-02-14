// import React from 'react'
// import "survey-core/defaultV2.min.css";
// import "survey-creator-core/survey-creator-core.min.css";
// import {Model} from 'survey-core'
// import { SurveyCreator,SurveyCreatorComponent } from "survey-creator-react";
// export const DragAndDrop = () => {
//     const creatorOptions = {
//         showDesignTab:true,
//         showLogicTab: true,
//         isAutoSave: true

//       };
//     const survey=new Model();
//     const creator = new SurveyCreator(creatorOptions);
//     survey.onComplete.add((sender, options) => {console.log(JSON.stringify(sender.data, null, 3));});
//     return <SurveyCreatorComponent creator={creator} />;
 
// }
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import $ from "jquery"; //Load jquery

import React, { Component, createRef, useState } from "react"; //For react component
window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder
require('formBuilder/dist/form-render.min.js')
document.body.style.margin = "30px"; //For add margin in HTML body
var surveys

var options = {
    controlPosition: 'left',
    onSave: function(evt, formData) {
        console.log(JSON.parse(formData));
         surveys =JSON.parse(formData);
       
        window.sessionStorage.setItem('formData', JSON.stringify(formData));
      
      },
      disabledAttrs: [
        'access',
        'className',
        'description',
        'inline',
        'max',
  'maxlength',
  'min',
  'multiple',
  'name',

  'other',
  'required',
  'rows',
  'step',
  'style',
  'subtype',
  'toggle',
  'value'
        
      ],
      disableFields: ['autocomplete',
      'button',
      'header',
      'hidden',
      'paragraph',
      'startRating',
      

    ]

  };
//Initialize formBuilder 
$(function(){
  // $('#fb-editor').hide();
  $('#fb-editor').children().children().hide();
})
class FormBuilder extends Component {
  fb = createRef();
   
  componentDidMount() {
    $(this.fb.current).formBuilder(options);
   
  }
 
 
  render() {
    
    return <div id="fb-editor" ref={this.fb} />;
  }
}

export const DragAndDrop = () => {
     const [email,setemail]=useState("");
     const[title,setTitle]=useState("")
     const [input1, setinput1] = useState({
      title: "",
      email: "",
    });
    
    const handlechange=(e)=>{
       setinput1((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
  
       }))
    }
   
    const  handleSubmit =async(e)=>{
      e.preventDefault();
      setemail(localStorage.getItem("email"));
      setTitle(input1.title);
      if(title)
      try{
        const config={
          headers:{
            "Content-type":"application/json"
          }
        }
        
const {data}=await axios.post(
  "http://localhost:2000/api/form/create",
  {
   email,
   title,
   surveys
  },
  config
);
      console.log(data);
      
     
    }catch(error){
      
    }

  } 
  
  return (
    localStorage.getItem("userInfo")==="Authenticated"?
    <>
    <form style={{marginBottom:'20px',marginTop:'20px'}}  onSubmit={handleSubmit}>
     <TextField
          // onChange={handlechange}
          name="email"
          value={localStorage.getItem("email")}
          disabled={true}
          type={"email"}
          variant="outlined"
          placeholder="Email"
          
        ></TextField>
  <TextField
          onChange={handlechange}
          name="title"
          value={input1.title}
         
          type={"text"}
          variant="outlined"
          placeholder="title"
          
        ></TextField>
       
         <Button 
          type="submit"
            style={{
              borderRadius: 35,
              
              color:'#fff',
              fontWeight: 'bold',
              marginTop:'8px',
             
              marginLeft:'20px'
            }}
            variant="contained"
          >
            Save Form
           
          </Button>
         
         </form>
         
    <FormBuilder />
    </>:<p>Unauthorized user</p>
   
  )
}

