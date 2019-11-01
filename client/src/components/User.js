import React from 'react'

export default function User({user}) {
    return (
        <div>
            <h1>{user.name}</h1>
            <h3>{user.country}</h3>
        </div>
    )
}
