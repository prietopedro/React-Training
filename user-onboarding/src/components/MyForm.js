import React from "react";
import { withFormik, Form, Field } from 'formik';

function MyForm(props){
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

            <button type="submit">Sign Up</button>
        </Form>
        </>
    )
}

const myForm = withFormik({
    mapPropsToValues({firstName,lastName,Email,Password}) {
        console.log(firstName);
    return{
        firstName : firstName || "",
        lastName : lastName || "",
        Email : Email || "",
        Password : Password || "",
    }
}})(MyForm);
export default myForm;