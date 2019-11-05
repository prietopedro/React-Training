import {ADD_TODO} from "./types"

const TodoReducer = (state,action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}

export default TodoReducer