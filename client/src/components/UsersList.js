import React from 'react'
import {useDarkMode} from "../hooks"

import User from "./User"

export default function UsersList({users,loading}) {
    const [darkMode, setDarkMode] = useDarkMode(false)

    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <button onClick={setDarkMode}>Change Colors</button>
            {users.map(user=><User user={user} key={user.id} />)}
        </div>
    )
}
