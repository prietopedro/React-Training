import React, { Component } from 'react';
import axios from 'axios'
import {Switch, Route} from "react-router-dom"

import Users from "./Components/Users"
import Search from "./Components/Search"
import UserProfile from "./Components/UserProfile"
import Nav from "./Components/Nav"

export default class App extends Component {
  state = {
    searchValue : "",
    users : [],
    currentUser : []
  }

  changeUser = (str) => {
    this.setState({searchValue: str})
  }

  componentDidMount(){
    axios
      .get("https://api.github.com/users")
      .then(res=>this.setState({ users: res.data }))
      .catch(err=>console.log(err))
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.state.searchValue)
    if(prevState.searchValue !== this.state.searchValue){
      if(this.state.searchValue === ""){
        axios
      .get("https://api.github.com/users")
      .then(res=>this.setState({ users: res.data }))
      .catch(err=>console.log(err))
      }else{
        axios
        .get(`https://api.github.com/search/users?q=${this.state.searchValue}&client_id=bcf2571619e6eabca96e&client_secret=5998e5460fb97e55653c633a1df201338f7c659d`)
        .then(res=>this.setState({users:res.data.items}))
        .catch(err=>console.log(err))
      }
    }
  }
  render() {
    console.log(this.state.users)
    
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props)=><div>
            <Search changeUser={this.changeUser} />
            {this.state.users.length === 0 && <p>No Users Found</p>}
            <Users users={this.state.users} />
          </div>} 
          />
          <Route exact path="/:userName" render={(props)=><UserProfile {...props} />} />

        </Switch>
      </div>
    )
  }
}

