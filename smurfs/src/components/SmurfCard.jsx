import React from 'react'
import {connect} from 'react-redux'
import {smurfDelete,setEdit} from '../Actions'

function SmurfCard(props) {
    const deleteSmurf = (e) => {
        e.preventDefault();
        props.smurfDelete(props.smurf.id)
    }

    const editSmurf = (e) => {
        e.preventDefault();
        props.setEdit(props.smurf)
    }

    return (
        <div style={container}>
            <h2>{props.smurf.name}</h2>
            <h2>{props.smurf.age}</h2>
            <h2>{props.smurf.height}</h2>
            <button className="btn" onClick={editSmurf}>EDIT</button>
            <button className="btn" onClick={deleteSmurf}>DELETE</button>
        </div>
    )
}


const container = {
    border: "1px solid black",
    width: "30%",
    margin: "2rem auto",
    padding: "2rem"
}
export default connect(null,{smurfDelete,setEdit})(SmurfCard)
