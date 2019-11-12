import React from 'react'
import { Route , Redirect  } from "react-router-dom"

export default function PrivateRoute({component, ...rest}) {
    const Component = props.component
    return (
        <Route {...rest} render={()=>{
            if(localStorage.getItem('token')){
                return <Component /> 
            } else {
                return <Redirect to="/login" />
            }
        }} />
    )
}
