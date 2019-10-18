import React,{useState,useEffect} from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import {Route} from 'react-router-dom';
import CharacterList from "./components/CharacterList";
import axios from "axios";




export default function App() {
  const [data,setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response=>{
      setData(response.data.results);
      setFilteredData(response.data.results)
    })
  },[])

  return (
    <main>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/characters" exact render={(props)=>(<CharacterList {...props} data={data} filteredData={filteredData} setFilteredData={setFilteredData} />)} />
    </main>
  );
}
