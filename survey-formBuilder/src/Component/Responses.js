import React, { useEffect,useState } from 'react'
import axios  from "axios";
import { CSVLink } from 'react-csv';
import {Button} from '@mui/material'
import  JsonTable from "./DataTable";

export const Responses = () => {
    const[response1,setresponse1]=useState([]);
    // const[length,setlength1]=useState(0);
    useEffect(()=>{
        const formId = (window.location.href).split('/')[4];
        const clickedforresponse=async()=>{
    
            try {
              const config = {
                  headers: {
                      "Content-type": "application/json"
                  }
              }
        
              const { data } = await axios.get(
                  `http://localhost:2000/api/form/getresponse/${formId}`,
                
                  config
              );
             
              setresponse1(data)
              // setlength1(Object.keys(data).length)
          } catch (error) {
        
          }
        
        
          }
          clickedforresponse();
    },[])
  
   
     
  return (
   <div style={{marginTop:'10px'}}>
    {/* {response1.map((eachRecord, index)=>{ return <JsonTable data={eachRecord.response} />})} */}
    <JsonTable  data={response1.map((eachRecord,index)=>{return (eachRecord.response[0])})}/>
    
    <div>
    <Button onClick={()=>{document.getElementById("myCheck").click()}}>Download CSV</Button>
      <CSVLink data={response1.map((eachRecord,index)=>{return (eachRecord.response[0])})} filename={'schema-definition-data.csv'}>
        <div id="myCheck" />
        </CSVLink>
        </div>
    </div>
  )
}
