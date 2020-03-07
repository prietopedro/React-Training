import React,{useState,useEffect} from 'react'
import AxiosWithAuth from "../utils/AxiosWithAuth"

export default function LogInForm({history}) {
    const values = {
        username: "",
        password: ""
    }
    let token = localStorage.getItem("token")
    useEffect(()=>{
        if(token){
            history.push("/FriendList")
        }
    },[token])

    const [formValues,setFormValues] = useState(values)

    const handleChange = e => {
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        AxiosWithAuth().post("/api/login",formValues).then(res=>localStorage.setItem("token",res.data.payload)).catch(err=>console.log(err))
        setFormValues(values)
    }
    const {username,password} = formValues
    return (
        <div>
            <form>
                <input type="text" required value={username} onChange={handleChange} placeholder="Name" name="username" />
                <input type="password" required value={password} onChange={handleChange} placeholder="password" name="password"/>
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}
