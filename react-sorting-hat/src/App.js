import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/home";
import Questions from "./components/Questions"
import {Data} from "./Data"

class App extends Component {
  constructor(){
    super();
    this.state = {
      questions: Data
    }
  }
  render() {
    console.log(this.state.questions)
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={(props)=> <Home {...props}/>} />
          <Route path="/questions" exact render={(props)=> <Questions {...props} questions={this.state.questions}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
