import React,{useReducer} from "react"
import {TodoContext} from "./context"
import {ADD_TODO,MARK_COMPLETE,CLEAR_TODOS} from "./types"
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
        dispatch({type: ADD_TODO , payload: todoName})
    }

    const markComplete = (id) => {
        dispatch({type: MARK_COMPLETE, payload: id})
    }

    const clearTodos = (e) => {
        e.preventDefault();
        dispatch({type: CLEAR_TODOS})
    }


    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo,
            markComplete,
            clearTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}