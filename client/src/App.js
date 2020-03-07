import React, { useState } from "react";
import { BrowserRouter as Router, Route , Redirect} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"

import Login from "./components/Login";
import BubblePage from "./components/BubblePage"

import "./styles.scss";

function App() {
  const [token,setToken] = useState(localStorage.getItem("token"))
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={(props) => (!token) ? <Login {...props}/> : <Redirect to="BubblePage" />} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/BubblePage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
