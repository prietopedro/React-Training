import React from 'react';
import './App.css';
import { Route , Switch } from "react-router-dom"

import Homepage from './pages/Homepage/Homepage'
import Shop from "./pages/Shop/Shop"
import SignForm from "./pages/SignForm/SignForm"
import Header from './components/header/Header'

function App() {
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

export default App;
