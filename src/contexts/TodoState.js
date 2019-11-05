import React,{useReducer} from "react"
import {TodoContext} from "./context"
import {ADD_TODO} from "./types"
import TodoReducer from "./TodoReducer"

export default (props) => {
    const initialState = {
        todos: [
            {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
           }
        ],
    }
    const [state,dispatch] = useReducer(TodoReducer,initialState)

    const addTodo = (todoName) => {
        const newTodo = {item: todoName, completed: false, id: new Date}
        dispatch({type: ADD_TODO , payload: newTodo})
    }


    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}