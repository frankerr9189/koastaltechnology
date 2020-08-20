import React, {useState} from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Feedback =()=>{
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        uploadedFiles: [],
        buttonText: 'Submit',
        uploadPhotosButtonText:'Upload Files'
    })

    const {name, email, message, phone, uploadedFiles, buttonText, uploadPhotosButtonText}=values;
    const {REACT_APP_API, REACT_APP_CLOUDINARY_CLOUD_NAME, REACT_APP_CLOUDINARY_UPLOAD_SECRET}= process.env;
    
    const uploadWidget= () => {
        window.cloudinary.openUploadWidget({ cloud_name: REACT_APP_CLOUDINARY_CLOUD_NAME, upload_preset: REACT_APP_CLOUDINARY_UPLOAD_SECRET, tags:['clients']},
            function(error, result) {
               // console.log(result);
               setValues({...values, uploadedFiles: result, uploadPhotosButtonText: `${result ? result.length : 0} Documents Uploaded`})
            }
    );
    };

    const handleChange= name=> event => {
        setValues({...values, [name]: event.target.value});
    };

    const handleSubmit= event =>{
        event.preventDefault();
        setValues({...values, buttonText: '...sending'});
        // send to backend
        // console.table({name, email, phone, message, uploadedFiles})

        axios({
            method: 'POST',
            url: `${REACT_APP_API}/feedback`,
            data: {name, email, phone, message, uploadedFiles}
        })
        .then(response => {
            //console.log("feedback response", response)
            if(response.data.success) toast.success('Thank you, we will be reaching out to you shortly');
            setValues({...values, 
            name:'', 
            phone:'', 
            email:'', 
            message: '',
            uploadedFiles:[],
            buttonTest: 'Submitted',
            uploadPhotosButtonText: 'Uploaded'})
        })
        .catch(error => {
            //console.log("sumbit error", error.response)
            if(error.response.data.success) toast.error('Failed! Please resubmit')
        });
    };

    const feedbackForm =() =>(
        <React.Fragment>
            <div className="pt-5">
    <button onClick={()=> uploadWidget()} className="btn btn-outline-secondary btn-block p-5">{uploadPhotosButtonText}</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea onChange={handleChange('message')} type="text" className="form-control" value={message} required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Name: </label>
                    <input className="form-control" type="text" onChange={handleChange('name')} value={name} required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Email: </label>
                    <input className="form-control" type="text" onChange={handleChange('email')} value={email} required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">Phone: </label>
                    <input className="form-control" type="number" onChange={handleChange('phone')} value={phone}/>
                </div>
                <button className="btn btn-outline-primary btn-block">{buttonText}</button>
            </form>
        </React.Fragment>
    )

    return(
        <div>
            <ToastContainer />
            <div>
            <h1>Home Page</h1>
            <hr/>
            <p>
                Home page sheet to fill outa
            </p>
        </div>
            {feedbackForm()}
        </div>
    );
};

export default Feedback;