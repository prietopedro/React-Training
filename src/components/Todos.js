import React,{useContext} from 'react'
import {TodoContext} from "../contexts/context"

export default function Todos() {
    const {todos} = useContext(TodoContext)

    return (
        <div>
            {todos.map((todo)=><h1>{todo.item}</h1>)}
        </div>
    )
}
