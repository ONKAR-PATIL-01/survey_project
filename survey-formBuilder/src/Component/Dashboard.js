import React, { useEffect } from 'react'
import { useState } from 'react'
import SurveyTour from './SurveyTour'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [data1, setdata1] = useState("");
  const [length1, setlength1] = useState(0);
  

  useEffect(() => {
    setemail(localStorage.getItem("email"));
    console.log(email);
    const abc = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }

        const { data } = await axios.get(
          `http://localhost:2000/api/form/form/${email}`, config

        );

        //  data1=JSON.stringify(data[0],null,3);
        //  console.log(JSON.stringify(data1[0]));
        console.log(Object.keys(data).length);
        setlength1(Object.keys(data).length)
        setdata1(data);
      } catch (error) {

      }
    }

    abc();

  }, [email])
  useEffect(() => {

  }, [data1])



  console.log("localStorage.getItem().userInfo", localStorage.getItem("userInfo"))


  return (

    localStorage.getItem("userInfo") === "Authenticated" ?
      <>

        <form >

          <Button onClick={() => {
            navigate('/dnd')
          }}

            style={{
              borderRadius: 35,

              color: '#fff',
              fontWeight: 'bold',
              marginTop: '8px',
              float:'right'

            }}
            variant="contained"
          >
            create new

          </Button>

        </form >
        <div style={{ display: "flex", flexWrap: "wrap", padding: '5px', margin: 'auto', marginTop:'60px'}}>
          {
            // data1.map(data=>{
            //   <Button>{data}</Button>
            // })

            (() => {
              var post = [];

              for (let i = 0; i < length1; i++) {
                post.push(

                  <Card  sx={{ maxWidth: 250, borderRadius: '30px', display: "flex", flexWrap: "wrap", marginRight: '20px', marginBottom: '10px' , boxShadow:'5px' }}>
                    <CardMedia
                      component="img"
                      image={require("./io.jpeg")}
                      alt="logo"
                      height="80"

                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {JSON.stringify(data1[i].title)}
                      </Typography>

                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => { navigator.clipboard.writeText(`http://localhost:3000/dynamicform/${data1[i]._id}`) }}
                      >Share</Button>
                      <Button size="small" onClick={ ()=>{navigate(`/responses/${data1[i]._id}`)}}>responses</Button>
                    </CardActions>
                  </Card>


                );
              }
              return post;
            })()
          }
        </div>
       <SurveyTour/>
      </> : <p>Unauthorized User</p>
  )
}

