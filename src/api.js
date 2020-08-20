import {API} from "./config";
const {REACT_APP_API, REACT_APP_CLOUDINARY_CLOUD_NAME, REACT_APP_CLOUDINARY_UPLOAD_SECRET}= process.env;

export const signup = user => {
    return fetch(`${API}/signup`,{
         method: "POST",
         headers:{
             Accept: "application/json",
             "Content-Type": "application/json"
         },
         body: JSON.stringify(user)
     })
     .then(response=> {
         return response.json();
     })
     .catch(err => {
        // console.log(err);
     });
 };