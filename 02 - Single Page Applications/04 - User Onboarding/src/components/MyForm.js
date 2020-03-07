import React,{useState,useEffect} from "react";
import { withFormik, Form, Field } from 'formik';
import axios from "axios";
import {Link} from "react-router-dom"


function MyForm(props){
    // const [users,setUsers] = useState([])
    let statusye = props.status;
    useEffect(() => {
        props.status && props.setUsers(users => [...users, props.status])
        console.log("hey")
      },[statusye]);

    return(
        <>
        <h1>Create a New Account</h1>
        <p>It's quick and easy</p>
        <Form className="form-container">

            <div className="name-container">
            <Field className="field-name" type="text" name="firstName" placeholder="First Name" />
            <Field className="field-name" type="text" name="lastName" placeholder="Last Name" />  
            </div>

            <Field type="text" name="Email" placeholder="Email" />
            <Field type="password" name="Password" placeholder="New Password" />
            
            {/* <Field type="checkbox" name="terms" /> */}
            <button type="submit">Sign Up</button>
            <Link to="/Welcome">CLICK</Link>
        </Form>
        </>
    )
}

const myFormm = withFormik({
    mapPropsToValues({firstName,lastName,Email,Password}) {
    return{
        firstName : firstName || "",
        lastName : lastName || "",
        Email : Email || "",
        Password : Password || "",
    }
},
handleSubmit(values, {setStatus,props}) { 
    axios.post('https://reqres.in/api/users/', values) 
          .then( res => { setStatus(res.data); })
          .then( ()=>{
            const path = `/Welcome`;
            props.history.push(path)
          })
          .catch(err => console.log(err.response));
    }
})(MyForm);
export default myFormm;