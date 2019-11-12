import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"

import PrivateRoute from "./components/PrivateRoute"
import FriendList from "./components/FriendList"
import LoginForm from "./components/LogInForm"

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute exact path="/FriendList" component={FriendList} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
