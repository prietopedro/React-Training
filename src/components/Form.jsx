import React, {useState} from 'react';





function Form (props){

    const [formValue, setFormValue] = useState({})

    const submit = (e) => {
        e.preventDefault();
        props.addTeamMember(formValue);
        setFormValue({});
    }

    const change = (e) => {
        setFormValue({...formValue,[e.target.name]:e.target.value})
        console.log(formValue)
    }


    return(
        <form>

            <div className="nameContainer form">
                <input onChange={change} className="inputs" type="text" name="name" placeholder="Enter Full Name" />
                <label htmlFor="name">Name</label>
            </div>

            <div className="emailContainer form">
                <input onChange={change} className="inputs" type="email" name="email" placeholder="Enter Email Address" />
                <label htmlFor="email">Email Address</label>
            </div>

            <div className="roleContainer form">
                <input onChange={change} className="inputs" type="text" name="role" placeholder="Enter Your Position" />
                <label htmlFor="role">Position</label>
            </div>

            <button className="form btn" onClick={submit}>ADD TEAM MEMBER</button>
        </form>
    )
}

export default Form;