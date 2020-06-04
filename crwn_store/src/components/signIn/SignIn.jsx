import React,{ useState } from 'react'
import { withRouter } from "react-router-dom"
import FormInput from '../FormInput/FormInput'
import CustomButton from "../CustomButton/CustomButton"
import { signInWithGoogle, auth} from "../../firebase/firebase"
import "./signin.scss"

function SignIn({history}) {
    const [ formValues , setFormValues ] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email , password } = formValues

        try{
            await auth.signInWithEmailAndPassword(email,password)
            setFormValues({
                email: "",
                password: ""
            })
        } catch(error){
            console.log(error)
        }
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

export default withRouter(SignIn)
