import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList"

const initialData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: initialData
    }

  }

  addTodoItem = (str) => {
    let newObj = {
      task: str,
      id: new Date(),
      completed: false
    }
    this.setState({todos : [...this.state.todos, newObj]})
  }

  clearList = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo=>{
        return todo.completed === false
      }) 
    })
  }


  isCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo=>{
        if (todo.id===id){
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        } else{
          return todo;
        }
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* {this.state.todos.map(todo=>{
          return(<div>{todo.task}</div>)
        })} */}
        <TodoList todos={this.state.todos} isCompleted={this.isCompleted} />
        <TodoForm addTodoItem={this.addTodoItem} clearList={this.clearList} />
      </div>
    );
  }
}

export default App;
