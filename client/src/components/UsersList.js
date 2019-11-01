import React from 'react'

import User from "./User"

export default function UsersList({users,loading}) {
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {users.map(user=><User user={user} key={user.id} />)}
        </div>
    )
}
