import React, { useEffect } from 'react';
import './App.css';
import { Route , Switch } from "react-router-dom"
import { auth , createUserProfileDocument} from './firebase/firebase'

import Homepage from './pages/Homepage/Homepage'
import Shop from "./pages/Shop/Shop"
import SignForm from "./pages/SignForm/SignForm"
import Header from './components/header/Header'


import { connect } from 'react-redux'
import { setCurrentUser } from "./redux/User/UserActions"

function App({setCurrentUser}) {
  useEffect(()=>{
      let unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({...snapShot.data(), id: snapShot.id});
        })
      }
      setCurrentUser(userAuth)
    })
    return function cleanup() {
      unsubscribeFromAuth()
    }
  },[])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignForm}/>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = {
  setCurrentUser
}

export default connect(null,mapDispatchToProps)(App);
