import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Coin from "./components/Coin.jsx"

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useDarkMode from "./components/hooks/useDarkMode"
import "./styles.scss";


const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode, changeColors] = useDarkMode(false);

  
  useEffect(() => {
    axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
    }, []);
    console.log(coinData)
    
  useEffect(()=>{
    let body = document.querySelector("body")
    darkMode ? body.classList.add('dark-mode') : body.classList.remove("dark-mode")
  },[darkMode])


  return (
    <div className="App">
      <Navbar darkMode={darkMode} changeColors={changeColors} />
      <Switch>
        <Route path="/" exact render={(props)=><Charts {...props} coinData={coinData} />} />
        <Route path="/:coin" exact render={(props)=> <Coin {...props}/>} />
        {/* <Charts coinData={coinData} /> */}
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
