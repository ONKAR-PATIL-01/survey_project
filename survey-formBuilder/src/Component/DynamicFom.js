import { TextareaAutosize, TextField, InputLabel, Button, Select } from "@mui/material";
import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import { useLocation } from "react-router-dom";
import axios from 'axios';


export const DynamicFom = () => {
    let location = useLocation()
    var response=[];
    const formData = location.state.id;
    const [formState, setFormState] = useState({});
    const handleChange = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async(event)=> {
        event.preventDefault();
        response.push(formState);
        console.log(response);
        
        try{
            const config={
              headers:{
                "Content-type":"application/json"
              }
            }
            
    const {data}=await axios.post(
      "http://localhost:2000/api/form/addresponse",
      {
       response
      },
      config
    );
          console.log(data);
          
         
        }catch(error){
          
        }
    

    };
    //   useEffect(()=>{

    //   },[setFormState])
    return (
        <form style={{ alignItems: 'center', margin: 'auto', marginLeft: '40%' }} onSubmit={handleSubmit}>
         
            <InputLabel>Iauro's Auto Generated form {JSON.stringify(location.state.id.surveys.title)}</InputLabel>

            {formData.surveys.map(field => (
                <div key={field.label}>
                    <InputLabel htmlFor={field.label}>{field.label}</InputLabel>
                    {field.type === "text" && (
                        <TextField
                            type="text"
                            id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}
                    {field.type === "email" && (
                        <TextField
                            type="email"
                            id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}
                    {field.type === "textarea" && (
                        <TextareaAutosize
                            id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}
                    {field.type === "autocomplete" && (
                        <TextField
                            id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}
                    {field.type === "button" && (
                        <Button
                            id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        >Submit</Button>
                    )}
                    {field.type === "date" && (
                        <Stack component="form" noValidate spacing={3}>
                            <TextField
                                id={field.label}
                                label={field.label}
                                type="date"
                                defaultValue="2017-05-24"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleChange}
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
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}
                    {field.type === "header" && (
                        <header

                            id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        ></header>
                    )}
                    {field.type === "number" && (
                        <TextField
                            type="number"
                            id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}
                    {field.type === "paragraph" && (
                        <p

                            id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                            required={field.required}
                        />
                    )}
                    {field.type === "checkbox-group" && (


                        <InputLabel id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                        >

                            {field.values.map((answer, answerIndex) => (
                                <>
                                    <InputLabel>{answer.value}</InputLabel>
                                    <TextField type='checkbox' ></TextField>
                                </>
                            ))}
                        </InputLabel>
                    )}
                    {field.type === "radio-group" && (


                        <InputLabel id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                        >

                            {field.values.map((answer, answerIndex) => (
                                <>
                                    <InputLabel>{answer.value}</InputLabel>
                                    <TextField type='Radio' ></TextField>
                                </>
                            ))}
                        </InputLabel>
                    )}
                    {field.type === "select" && (


                        <Select id={field.label}
                            name={field.label}
                            onChange={handleChange}
                            value={formState[field.label] || ""}
                        >

                            {field.values.map((answer, answerIndex) => (
                                    <InputLabel>{answer.value}</InputLabel>
                            ))}
                        </Select>
                    )}
                </div>
            ))}
            <Button style={{
                borderRadius: 35,
                backgroundColor: "#000",
                color:'aqua',
                fontWeight: 'bold',
                marginTop: '20px',
                marginLeft: '10%',
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
