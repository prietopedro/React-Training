import React,{useState,useEffect} from "react";
import Header from "./components/Header.js.js";
import WelcomePage from "./components/WelcomePage";
import {Route} from 'react-router-dom';
import CharacterList from "./components/CharacterList";
import axios from "axios";
import {Button} from "./components/Styling";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes"




export default function App() {
  const [data,setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page,setPage] = useState(1);

  const [episodes,setEpisodes] = useState([]);
  const [episodePage ,setEpisodePage] = useState(1);
  const [filteredEpisodes, setFilteredEpisodes] = useState([])

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response=>{
      setData(response.data.results);
      setFilteredData(response.data.results)
    })
  },[page])

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/episode/?page=${episodePage}`)
    .then(response=>{
      // setData(response.data.results);
      // setFilteredData(response.data.results)
      setEpisodes(response.data.results);
      setFilteredEpisodes(response.data.results)
    })
  },[episodePage])

  return (
    <main>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/Characters" exact render={(props)=>(<CharacterList {...props} data={data} filteredData={filteredData} setPage={setPage} page={page}setFilteredData={setFilteredData} />)} />
      <Route path="/Episodes" render={(props)=>(<Episodes {...props} data={episodes} filteredData={filteredEpisodes} setPage={setEpisodePage} page={episodePage} setFilteredData={setFilteredEpisodes} />)} />
      <Route path="/Locations" component={Locations} />
    </main>
  );
}
