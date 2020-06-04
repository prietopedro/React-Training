import React from 'react'

export default function User({user,darkMode}) {
    return (
        <div className={(darkMode) ? "darkMode" : ""}>
            <h1>{user.name}</h1>
            <h3>{user.country}</h3>
        </div>
    )
}
