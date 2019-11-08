import React,{useState} from 'react'
import {connect} from "react-redux"
import {smurfPost} from "../Actions"

function SmurfForm(props) {
    const [ formValues , setFormValues ] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.smurfPost(formValues)
        setFormValues({
            name: "",
            age: "",
            height: ""
        })
    }
    return (
        <div>
            <form>
                <input name="name" onChange={handleChange} value={formValues.name} placeholder="Enter Name" />
                <input name="age" onChange={handleChange} value={formValues.age} placeholder="Enter Age" />
                <input name="height" onChange={handleChange} value={formValues.height} placeholder="Enter Height" />
                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default connect(null,{smurfPost})(SmurfForm)