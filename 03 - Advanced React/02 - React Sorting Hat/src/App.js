import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/home";
import Questions from "./components/Questions"
import {Data} from "./Data"
import {Houses} from "./Houses"
import House from "./components/House"

class App extends Component {
  constructor(){
    super();
    this.state = {
      questions: Data,
      points: 0,
      house: {}
    }
  }
  getTotalPoints = (num) => {
    this.setState({points: num})
  }

  getHouse = () => {
    let currentHouse = ""
    if(this.state.points >= 6 && this.state.points <= 10){
      currentHouse = "hufflepuff"
  } else if(this.state.points >= 11 && this.state.points <= 15){
      currentHouse = "ravenclaw"
  } else if(this.state.points >= 16 && this.state.points <= 20){
      currentHouse = "gryfinndor"
  } else{
      currentHouse = "slytherin"
  }
    this.setState({
      house: Houses.find(x=>{
        return x.name.toUpperCase() === currentHouse.toUpperCase()
      })
    })
  }
  componentDidUpdate(previousProps, previousState){
    if(previousState.points !== this.state.points){
      this.getHouse()

  }
}
  render() {
    console.log(this.state.points)
    console.log(this.state.house)
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={(props)=> <Home {...props}/>} />
          <Route path="/questions" exact render={(props)=> <Questions {...props} questions={this.state.questions} getTotalPoints={this.getTotalPoints} />} />
          <Route path="/House" exact render={(props)=> <House {...props} points={this.state.points} house={this.state.house} />} />
        </div>
      </Router>
    );
  }
}

export default App;
