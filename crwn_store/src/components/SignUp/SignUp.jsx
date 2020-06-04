import React,{ useState } from 'react'
import { withRouter } from "react-router-dom"
import "./sign-up.styles.scss"

import FormInput from '../FormInput/FormInput'
import CustomButton from "../CustomButton/CustomButton"

import { auth , createUserProfileDocument } from "../../firebase/firebase"

function SignUp({history}) {
    const [formValues, setFormValues] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async event => {
        event.preventDefault();
        const {password , confirmPassword , displayName , email } = formValues
        if( password !== confirmPassword){
            alert("Password Don't Match")
            return
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {  displayName })
            await auth.signInWithEmailAndPassword(email,password)
            setFormValues({
                displayName: "",
                confirmPassword: "",
                email: "",
                password: ""
            })
        }catch(error){
            console.log(error)
        }        
    }

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name] : e.target.value })
    }
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={formValues.displayName} onChange={handleChange} label='Display Name' required />
                <FormInput type="email" name="email" value={formValues.email} onChange={handleChange} label='Email' required />
                <FormInput type="password" name="password" value={formValues.password} onChange={handleChange} label='Password' required />
                <FormInput type="password" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default withRouter(SignUp)