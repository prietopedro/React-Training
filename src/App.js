import React, { useState , useEffect } from 'react';
import './App.css';
import { Route , Switch } from "react-router-dom"
import { auth , createUserProfileDocument} from './firebase/firebase'

import Homepage from './pages/Homepage/Homepage'
import Shop from "./pages/Shop/Shop"
import SignForm from "./pages/SignForm/SignForm"
import Header from './components/header/Header'

function App() {
  const [ currentUser , setCurrentUser ] = useState(null)

  console.log(currentUser)
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
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignForm}/>
      </Switch>
    </div>
  );
}

export default App;
