import React from 'react';
import './App.css';
import TodoState from "./contexts/TodoState"

import TodoForm from "./components/TodoForm"
import Todos from "./components/Todos"

function App() {
  return (
    <TodoState>
      <div className="App">
        <TodoForm />
        <Todos />
      </div>
    </TodoState>
  );
}

export default App;
