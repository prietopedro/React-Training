import React,{useState} from 'react'
import AxiosWithAuth from "../utils/AxiosWithAuth"

export default function FriendsForm() {
    const values = {
        name: "",
        age: "",
        email: ""
    }
    const [formValues,setFormValues] = useState(values)
    const handleChange = e => {
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }
    const submitForm = e => {
        e.preventDefault();
        AxiosWithAuth().post('/api/friends',formValues).then()
        setFormValues(values)
    }
    const {name,age,email} = formValues
    return (
        <div>
            <form>
                <input type="text" required value={name} onChange={handleChange} placeholder="Name" name="name" />
                <input type="number" required value={age} onChange={handleChange} placeholder="Age" name="age"/>
                <input type="email" required value={email} onChange={handleChange} placeholder="Email" name="email"/>
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}
