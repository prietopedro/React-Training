import React, { Component } from "react";
import {connect} from "react-redux"
import "./App.css";
import {smurfsGet} from "../Actions"

import SmurfCard from "./SmurfCard"

class App extends Component {
  componentDidMount(){
    this.props.smurfsGet()
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.props.smurfs.map(smurf=>{
          return (<SmurfCard key={smurf.id} smurf={smurf} />)
        })}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs
})
export default connect(mapStateToProps,{smurfsGet})(App);
