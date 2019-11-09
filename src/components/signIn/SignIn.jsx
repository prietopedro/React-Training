import React,{ useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from "../CustomButton/CustomButton"
import {signInWithGoogle} from "../../firebase/firebase"
import "./signin.scss"

export default function SignIn() {
    const [ formValues , setFormValues ] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues({
            email: "",
            passign: ""
        })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={formValues.email} required handleChange={handleChange} label="Email" />
                <FormInput type="password" name="password" value={formValues.password} handleChange={handleChange} required label="Password" />
                <div className="buttons">
                    <CustomButton type="submit">SUBMIT</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}
