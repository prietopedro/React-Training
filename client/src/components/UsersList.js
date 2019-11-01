import React from 'react'
import {useDarkMode} from "../hooks"
import Chart from "./Chart"

import User from "./User"

export default function UsersList({users,loading}) {
    const [darkMode, setDarkMode] = useDarkMode(false)

    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <button onClick={setDarkMode}>Change Colors</button>
            <Chart users={users} />
            {users.map(user=><User darkMode={darkMode} user={user} key={user.id} />)}
        </div>
    )
}
