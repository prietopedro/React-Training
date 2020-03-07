import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from "./components/MyForm";
import {Route} from "react-router-dom";
import Welcome from "./components/Welcome"


function App() {
  const [users,setUsers] = useState([])
  return (
    <div className="App">
      <Route path="/" exact render={(props)=> <MyForm users={users} setUsers={setUsers} {...props} />}/>
      <Route path="/Welcome" exact render={(props)=> <Welcome users={users}
      {...props} />}/>
    
    </div>
  );
}

export default App;
