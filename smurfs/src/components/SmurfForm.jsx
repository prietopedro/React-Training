import React,{ useState , useEffect} from 'react'
import {connect} from "react-redux"
import {smurfPost,smurfEdit} from "../Actions"

function SmurfForm(props) {
    const [ formValues , setFormValues ] = useState({
        name: "",
        age: "",
        height: ""
    })

    useEffect(()=>{
        setFormValues(props.editingSmurf)
    },[props.editingSmurf])

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!props.isEditing){
            props.smurfPost(formValues)
            setFormValues({
                name: "",
                age: "",
                height: ""
            })
        } else {
            props.smurfEdit(formValues)
            setFormValues({
                name: "",
                age: "",
                height: ""
        })
    }
    }
    return (
        <div>
            <form>
                <input name="name" onChange={handleChange} value={formValues.name} placeholder="Enter Name" />
                <input name="age" onChange={handleChange} value={formValues.age} placeholder="Enter Age" />
                <input name="height" onChange={handleChange} value={formValues.height} placeholder="Enter Height" />
                <button onClick={handleSubmit}>{(props.isEditing) ? "Edit" : "Submit"}</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => ({
    editingSmurf : state.editingSmurf,
    isEditing : state.isEditing
})
export default connect(mapStateToProps,{smurfPost,smurfEdit})(SmurfForm)