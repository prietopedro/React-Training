import React,{useContext} from 'react'
import {TodoContext} from "../contexts/context"
import Todo from "./Todo"

export default function Todos() {
    const {todos,clearTodos} = useContext(TodoContext)

    return (
        <div>
            {todos.map((todo)=><Todo key={todo.id} todo={todo} />)}
            <button onClick={clearTodos}>Clear Todos</button>
        </div>
    )
}
