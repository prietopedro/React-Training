import React from 'react'
import SignIn from "../../components/signIn/SignIn"
import SignUp from "../../components/SignUp/SignUp"

import "./sign-in-and-sign-up.styles.scss"

export default function SignForm() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}
