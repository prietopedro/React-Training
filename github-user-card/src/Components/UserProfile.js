import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class UserProfile extends Component {
    state = {
        username: this.props.match.params.userName,
        user: {},
        followers: []
    }
    componentDidMount(){
        axios
        .get(`https://api.github.com/users/${this.state.username}`)
        .then(res=>this.setState({ user: res.data }))
        .catch(err=>console.log(err))
        .then(()=>{
            axios
            .get(`${this.state.user.followers_url}`)
            .then(res=>this.setState({followers: res.data}))
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.match.params.userName !== prevState.username){
            this.setState({username: this.props.match.params.userName})
            axios
        .get(`https://api.github.com/users/${this.state.username}`)
        .then(res=>this.setState({ user: res.data }))
        .catch(err=>console.log(err))
        .then(()=>{
            axios
            .get(`${this.state.user.followers_url}`)
            .then(res=>this.setState({followers: res.data}))
        })
        }
    }
    render() {
        console.log(this.props.match.params.id)
        console.log(this.state.user)
        console.log(this.state.followers)
        return (
            <div>
               <h1>{this.state.user.login}</h1>
                <h3>Followers</h3>
                {this.state.followers.map((follower,index)=><div><Link to={`/${follower.login}`} key={index}>{follower.login}</Link></div>)}
            </div>
        )
    }
}
