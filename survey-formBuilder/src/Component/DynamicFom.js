import { TextareaAutosize, TextField, InputLabel, Button, RadioGroup, FormControlLabel, Radio, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';

import axios from 'axios';


export const DynamicFom = () => {

    var response = [];
    const [formData, setFormData] = useState();
    // const formData = location.state.id;


    useEffect(() => {
        const id = (window.location.href).split('/')[4];
        const fun = async () => {
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                const { data } = await axios.get(
                    `http://localhost:2000/api/form/form/id/${id}`, config

                );

                //  data1=JSON.stringify(data[0],null,3);
                //  console.log(JSON.stringify(data1[0]));
                console.log(data.surveys);

                setFormData(data);
                console.log(data.surveys);
            } catch (error) {

            }
        }
        fun();
    }, [])
    const [formState, setFormState] = useState({});
    // const [checkboxdata,setcheckboxdata]=useState([]);
    const handleChange1= event =>{
        const demo = formState[event.target.name] ||[]
        console.log('demo', event.target.name, event.target.value, demo)
        event.target.checked===true?demo.push(event.target.value):  delete demo[demo.indexOf(event.target.value)];
        // setcheckboxdata([...checkboxdata,event.target.value])
        setFormState({...formState, [event.target.name]:[demo]})
        // formState && formState[event.target.name] &&setFormState({...formState, [event.target.name]:[...formState?.[event.target.name][0],event.target.value]})
        // setFormState({
        //     ...formState,
        //     [event.target.name]: [checkboxdata]
          
        // });
    }
    
    console.log('123',formState)
    const handleChange = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        response.push(formState);
        console.log(response);
        const formId = (window.location.href).split('/')[4];
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const { data } = await axios.post(
                "http://localhost:2000/api/form/addresponse",
                {
                    formId,
                    response
                },
                config
            );
            console.log(data);
            setFormData({})


        } catch (error) {

        }

      window.alert("You Have Successfully Submitted The Survey....")
    };
    //   useEffect(()=>{

    //   },[setFormState])
    return (
        <form style={{ alignItems: 'center', margin: 'auto', marginTop: '25px', padding: '10px' }} onSubmit={handleSubmit}>

            {/* <InputLabel>Iauro's Auto Generated form {JSON.stringify(location.state.id.surveys.title)}</InputLabel> */}

            {formData?.surveys?.map(field => (
                <div key={field.label}>
                    <InputLabel htmlFor={field.label}>{field.label}</InputLabel>
                    {field.type === "text" && (
                        <TextField
                            type="text"
                            id={field.label}
                            name={field.label}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}

                    {field.type === "textarea" && (
                        <TextareaAutosize
                            id={field.label}
                            name={field.label}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}


                    {field.type === "date" && (
                        <Stack component="form" noValidate spacing={3}>
                            <TextField
                                id={field.label}
                                name={field.label}
                                placeholder={field.placeholder}
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={formState[field.label] || ""}
                               
                                required={field.required}
                            />
                        </Stack>
                    )}
                    {field.type === "file" && (
                        <TextField
                            type="file"
                            id={field.label}
                            name={field.label}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}

                    {field.type === "number" && (
                        <TextField
                            type="number"
                            id={field.label}
                            name={field.label}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}

                    {field.type === "checkbox-group" && (


                        <FormGroup
                        id={field.label}
                        name={field.label}
                        // onChange={handleChange}
                        // value={formState[field.label] || ""}
                        >

                            {field.values.map((answer, answerIndex) => (
                                <>
                                    <InputLabel>{answer.label}</InputLabel>
                                    <TextField name={field.label} type='checkbox' value={answer.label} onChange={handleChange1}></TextField>
                                </>
                            ))}
                        </FormGroup>
                    )}
                    {field.type === "radio-group" && (                      
                        <RadioGroup
                        id={field.label}
                        name={field.label}
                        
                        onChange={handleChange}
                        value={formState[field.label] || ""}
                        >

                            {field.values.map((answer, answerIndex) => (
                               
                               <FormControlLabel value={answer.value} control={<Radio />} label={answer.label}    onChange={handleChange}
                               />
                            ))}
                        </RadioGroup>
                    )}
                    {/* {field.type === "radio-group" && (


                        <RadioGroup 
                        id={field.label}
                        name={field.label}
                        
                        onChange={handleChange}
                        value={formState[field.label] || ""}
                        
                        >

                            {field.values.map((answer, answerIndex) => (
                                <>
                                    <InputLabel>{answer.value}</InputLabel>
                                    <FormControlLabel control={<Radio />}  value={formState[field.label] || ""} onChange={handleChange}></FormControlLabel>
                                </>

                            ))}
                        </RadioGroup>

                    )} */}

                </div>
            ))}
            <Button style={{
                borderRadius: 35,
                backgroundColor: "#000",
                color: 'aqua',
                fontWeight: 'bold',
                marginTop: '20px',
                marginLeft: '45%',
                fontSize: "18px",
            }} type="submit">Submit</Button>
        </form>
    );
}
































// import { useLocation } from 'react-router-dom'
// import React, { useState } from 'react';
// import CheckBox from "@mui/material/Checkbox";
// export const DynamicForm = () => {
//     const [formData, setFormData] = useState({});
//     const location = useLocation();
//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };
//     // const handleSelectChange = (event) => {
//     //     const { name, options } = event.target;
//     //     const selectedValues = [];
//     //     for (let i = 0; i < options.length; i++) {
//     //       if (options[i].selected) {
//     //         selectedValues.push(options[i].value);
//     //       }
//     //     }
//     //     setFormData({ ...formData, [name]: selectedValues });
//     // };
//     // const handleCheckboxChange = (event) => {
//     //     setFormData({ ...formData, [event.target.name]: event.target.checked });
//     // };



//     return (
//         <form>
//             {
//                 location.state.id.surveys.map((field) => {
//                     switch (field.type) {
//                         case 'text-field':
//                         case 'email':
//                         case 'password':
//                             return (
//                                 <div key={field.label}>
//                                     <label>{field.label}</label>
//                                     <input
//                                         type={field.type}
//                                         name={field.label}
//                                         value={formData[field.label] || ''}
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             );
//                         // case 'select':
//                         //     return (
//                         //         <div key={field.label}>
//                         //             <label>
//                         //                 {field.label}
//                         //                 <select
//                         //                     name={field.label}
//                         //                     multiple
//                         //                     value={formData[field.label]}
//                         //                     onChange={handleSelectChange}
//                         //                 >
//                         //                     {field.values.map((option) => (
//                         //                         <option key={option.value} value={option.value}>
//                         //                             {option.label}
//                         //                         </option>
//                         //                     ))}
//                         //                 </select>
//                         //             </label>
//                         //         </div>
//                         //     );

//                         default:
//                             return null;
//                     }
//                 })
//             }
//         </form>
//     );
// }
