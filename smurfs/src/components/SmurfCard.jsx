import React from 'react'

export default function SmurfCard(props) {
    return (
        <div>
            <h2>{props.smurf.name}</h2>
            <h2>{props.smurf.age}</h2>
            <h2>{props.smurf.height}</h2>
        </div>
    )
}
