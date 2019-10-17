import React, {useState, useEffect} from 'react';





function Form (props){

    const [formValue, setFormValue] = useState({name: "", email: "", role: ""})

    const submit = (e) => {
        e.preventDefault();
        if(typeof props.editMember == "string"){
            props.addTeamMember(formValue);
            setFormValue({name: "", email: "", role: ""});
        } else{
            props.editBiach(formValue);
            setFormValue({name: "", email: "", role: ""});
            props.setEditMember("")
        }
    }

    const change = (e) => {
        setFormValue({...formValue,[e.target.name]:e.target.value})
        console.log(formValue)
    }

    useEffect(()=>{
        setFormValue(props.editMember)
    },[props.editMember])

    return(
        <form>

            <div className="nameContainer form">
                <input required onChange={change} className="inputs" type="text" name="name" value={formValue.name} placeholder="Enter Full Name" />
                <label htmlFor="name">Name</label>
            </div>

            <div className="emailContainer form">
                <input required onChange={change} className="inputs" type="email" name="email" value={formValue.email} placeholder="Enter Email Address" />
                <label htmlFor="email">Email Address</label>
            </div>

            <div className="roleContainer form">
                <input required onChange={change} className="inputs" type="text" name="role" value={formValue.role} placeholder="Enter Your Position" />
                <label htmlFor="role">Position</label>
            </div>

            <button className="form btn" onClick={submit}>Submit</button>
        </form>
    )
}

export default Form;