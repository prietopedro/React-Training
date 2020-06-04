import React,{useState,useContext} from 'react'
import {TodoContext} from "../contexts/context"

export default function TodoForm() {
    const [formValue,setFormValue] = useState("")

    const {addTodo} = useContext(TodoContext)

    const onChange = (e) => {
        setFormValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(formValue);
        setFormValue("")
    }

    return (
        <div>
            <form>
                <label htmlFor="todo">Add a Todo</label>
                <input type="text" name="todo" value={formValue} onChange={onChange}/>
                <button onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}
