import React, {useState} from 'react';
import {GlobalStyle} from "./Styles/GlobalStyle";
import {seaBlue, darker, light} from "./Styles/colors";
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Title} from "./Styles/title";
import axios from 'axios';
import {signup} from './api';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const SectionAreaOne = styled.div`
height: 650px;
margin: 50px 0px 0px 0px;
font-size: 20px;
background-image: url("img/waveapp2.png");
background-position: center;
background-size: cover;
filter: contrast(90%);
@media (max-width: 700px){
  width: 100%    }
`;

export const FormStyle = styled.div`
padding-top: 30px;
padding-left: 185px;
@media (max-width: 700px){ 
  padding-left: 150px;
  padding-right: 20px;
  width: 100%    }
`;

export const TextStyle = styled(Title)`
padding-top: 100px;
padding-left: 270px;
padding-bottom: 5px;
font-size: 45px;
color: ${seaBlue};
text-shadow: 1px 1px 2px #380503;
@media (max-width: 700px){
  padding-left: 150px;
  padding-right: 20px;
  font-size: 25px;
   }
`;

export const TextStyleTwo = styled(Title)`
padding-top: 5px;
padding-left: 250px;
padding-bottom: 10px;
font-size: 30px;
color: black;
@media (max-width: 700px){
  padding-left: 150px;
  padding-right: 20px;
  font-size: 15px;
   }
`;

export const ConfirmButton = styled(Title)`
margin: 10px;
color: white;
border-radius: 5px;
padding: 10px;
text-align: center;
width: 585px;
cursor: pointer;
background-color: ${seaBlue};
${({disabled}) => disabled &&
`
opacity: .5;
background-color: grey;
pointer-events: none;
`}
@media (max-width: 700px){
width: 70%
}
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export function LayoutSectionOne() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    success: ''
    })

   const {name, email, phone, companyName} = values;
   const {REACT_APP_API, REACT_APP_CLOUDINARY_CLOUD_NAME, REACT_APP_CLOUDINARY_UPLOAD_SECRET}= process.env;

   const handleSubmit= event =>{
    event.preventDefault();
    setValues({...values});
    signup({name, email, phone, companyName}).then(response => {
      //console.log("feedback response", response)
      //if(response.data.success) toast.success('Thank you, we will be reaching out to you shortly');
      setValues({...values, 
      name:'', 
      phone:'', 
      email:'', 
      companyName: '',
      success:''
      })
  })
  .catch(error => {
      //console.log("sumbit error", error.response)
      //if(error.response.data.success) toast.error('Failed! Please resubmit')
  });
    // send to backend
    // console.table({name, email, phone, message, uploadedFiles})
    // axios({
    //     method: 'POST',
    //     url: `${REACT_APP_API}/feedback`,
    //     data: {name, email, phone, companyName}
    // // })
    // .then(response => {
    //     //console.log("feedback response", response)
    //     if(response.data.success) toast.success('Thank you, we will be reaching out to you shortly');
    //     setValues({...values, 
    //     name:'', 
    //     phone:'', 
    //     email:'', 
    //     companyName: '',
    //     success:''
    //     })
    // })
    // .catch(error => {
    //     //console.log("sumbit error", error.response)
    //     if(error.response.data.success) toast.error('Failed! Please resubmit')
    // });
};
      

   const handleChange= name=> event => {
    setValues({...values, [name]: event.target.value});
    console.log(values)
};

function newBusinessFrom(){
  return (
    <>
    <TextStyle>
    Koastal-Technology
    </TextStyle>
    <TextStyleTwo>
  <p>Best in class online ordering app!</p>
  </TextStyleTwo>
    <FormStyle>
    <form className={classes.root} autoComplete="off">
      <div>
        <div>
        <TextField
          required
          id="outlined-required"
          type="text"
          label="First and Last Name"
          value={name}
          onChange={handleChange('name')}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="text"
          variant="outlined"
          onChange={handleChange('email')}
          value={email}
        />
        </div>
        <div>
        <TextField
          id="outlined-input"
          label="Phone"
          type="number"
          variant="outlined"
          onChange={handleChange('phone')}
          value={phone}
        />
        <TextField
          id="outlined-input"
          label="Company Name"
          type="text"
          variant="outlined"
          onChange={handleChange('companyName')}
          value={companyName}
        />
        </div>
        <ConfirmButton onClick={handleSubmit}>Request More Information!</ConfirmButton>
      </div>
    </form>
    </FormStyle>
    </>
  );
}

    return (
      <>
      <GlobalStyle/>
      <SectionAreaOne>
      {newBusinessFrom()}
      </SectionAreaOne>

     </>
    );
  };