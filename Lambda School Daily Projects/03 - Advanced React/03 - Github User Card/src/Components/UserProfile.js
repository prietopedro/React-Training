import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class UserProfile extends Component {
    state = {
        username: "",
        user: {},
        followers: []
    }
    componentDidMount(){
        this.setState({username: this.props.match.params.userName})
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.match.params.userName !== prevState.username){
            this.setState({username: this.props.match.params.userName})
            axios
        .get(`https://api.github.com/users/${this.state.username}&client_id=bcf2571619e6eabca96e&client_secret=5998e5460fb97e55653c633a1df201338f7c659d`)
        .then(res=>this.setState({ user: res.data }))
        .catch(err=>console.log(err))
        .then(()=>{
            axios
            .get(`${this.state.user.followers_url}&client_id=bcf2571619e6eabca96e&client_secret=5998e5460fb97e55653c633a1df201338f7c659d`)
            .then(res=>this.setState({followers: res.data}))
        })
        }
    }
    render() {
        return (
            <div>
               <h1>{this.state.user.login}</h1>
                <img src={`http://ghchart.rshah.org/3C8CE7/${this.state.user.login}`}></img>
                <h3>Followers</h3>
                {this.state.followers.map((follower,index)=><div><Link to={`/${follower.login}`} key={index}>{follower.login}</Link></div>)}
            </div>
        )
    }
}
