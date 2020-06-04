import React, { Component } from 'react'
import axios from "axios"
// $2a$10$ge0WQjJI65CEreGuoGh53OFrTYSpdKB3q26WE56Im7qSCeoAAXrMy
export default class House extends Component {
    constructor(){
        super();
        this.state = {
            house : ""
        }
    }

    componentDidMount() {
        // if(this.props.points >= 6 && this.props.points <= 10){
        //     this.setState({house: "hufflepuff"})
        // } else if(this.props.points >= 11 && this.props.points <= 15){
        //     this.setState({house: "ravenclaw"})
        // } else if(this.props.points >= 16 && this.props.points <= 20){
        //     this.setState({house: "gryfinndor"})
        // } else{
        //     this.setState({house: "slytherin"})
        // }
        // axios
        // .get(`http://hp-api.herokuapp.com/api/characters/house/${this.props.house}` )
        // .then(res=>{
        //     console.log(res)
        // })
    }
    

    render() {
        return (
            <div>
               <h1>Congratulations, You Now Belong To The <br/>{this.props.house.name} House</h1> 
               <p>{this.props.house.about}</p>
            </div>
        )
    }
}
