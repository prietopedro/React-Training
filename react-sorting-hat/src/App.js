import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/home";
import Questions from "./components/Questions"
import {Data} from "./Data"

class App extends Component {
  constructor(){
    super();
    this.state = {
      questions: Data,
      points: 0
    }
  }
  getTotalPoints = (num) => {
    this.setState({points: num})
  }
  render() {
    console.log(this.state.points)
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={(props)=> <Home {...props}/>} />
          <Route path="/questions" exact render={(props)=> <Questions {...props} questions={this.state.questions} getTotalPoints={this.getTotalPoints} />} />
        </div>
      </Router>
    );
  }
}

export default App;
