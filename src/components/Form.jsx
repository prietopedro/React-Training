import React from 'react';




function Form (props){

    const submit = (e) => {
        e.preventDefault();
        document.querySelectorAll("input").value = ""
    }

    return(
        <form>

            <div className="nameContainer form">
                <input className="inputs" type="text" name="name" placeholder="Enter Full Name" />
                <label htmlFor="name">Name</label>
            </div>

            <div className="emailContainer form">
                <input className="inputs" type="email" name="email" placeholder="Enter Email Address" />
                <label htmlFor="email">Email Address</label>
            </div>

            <div className="roleContainer form">
                <input className="inputs" type="text" name="role" placeholder="Enter Your Position" />
                <label htmlFor="role">Position</label>
            </div>

            <button className="form btn" onClick={submit}>ADD TEAM MEMBER</button>
        </form>
    )
}

export default Form;