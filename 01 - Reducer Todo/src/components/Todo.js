import React,{useContext} from 'react'
import {TodoContext} from "../contexts/context"

export default function Todo({todo}) {

    const {markComplete} = useContext(TodoContext)
    
    const handleClick = (e) => {
        e.preventDefault();
        markComplete(todo.id)
    }
    
    return (
        <div onClick={handleClick}>
            <h1 className={(todo.completed) ? "completed" : ""}>{todo.item}</h1>
        </div>
    )
}
