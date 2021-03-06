import React, { useState , useContext } from 'react'
import GithubContext from "../../context/github/githubContext"
import AlertContext from "../../context/alert/alertContext"
import Alert from "../layout/Alert"

const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const { searchUsers , clearUsers , users } = githubContext
    const { setAlert } = alertContext

    const [text,setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ""){
            setAlert('Please Enter Something')
        } else{
            searchUsers(text)
            setText("")
        }
    }
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
                    <Alert />
                    <input type="submit" value="Search" className="btn btn-primary btn-block"/>
                </form>
                {(users.length > 0) ? (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>) : null}
            </div>
        )
    }


export default Search
