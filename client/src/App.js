import React, { Component } from 'react'
import axios from "axios"

import UsersList from "./components/UsersList"

export default class App extends Component {
  constructor(){
    super();
    this.state={
      users: [],
      loading: false,
    }
  }
  
  componentDidMount(){
    this.setState({loading:true})
    axios.get("http://localhost:5000/api/players")
    .then(res=>this.setState({users: res.data, loading: false}))
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
        <UsersList users={this.state.users} loading={this.state.loading} />
      </div>
    )
  }
}
