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
        <div style={{border: "1px solid black" , marginBottom: "2rem"}}>
            <h2>{props.smurf.name}</h2>
            <h2>{props.smurf.age}</h2>
            <h2>{props.smurf.height}</h2>
            <button onClick={editSmurf}>EDIT</button>
            <button onClick={deleteSmurf}>DELETE</button>
        </div>
    )
}

export default connect(null,{smurfDelete,setEdit})(SmurfCard)
