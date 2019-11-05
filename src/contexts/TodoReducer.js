import {ADD_TODO,MARK_COMPLETE,CLEAR_TODOS} from "./types"

const TodoReducer = (state,action) => {
    switch(action.type){
        case ADD_TODO:
            const newTodo = {item: action.payload, completed: false, id: new Date};
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case MARK_COMPLETE:
            const current = state.todos.map(curr => (curr.id === action.payload) ? {...curr, completed: !curr.completed} : curr);
            return{
                ...state,
                todos: current
            };
        case CLEAR_TODOS:
            const filtered = state.todos.filter(todo=>todo.completed !== true)
            return {
                ...state,
                todos: filtered
            }
        default:
            return state
    }
}

export default TodoReducer