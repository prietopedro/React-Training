import React,{useState,useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import {CardsBigContainer} from "./StyledElements"


function CharactersList(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://swapi.co/api/people/')
        .then(response=>{
            setData(response.data.results)
            console.log(response.data.results)
        })
        .catch(error=>{
            console.log("Sorry You Got An Error")
        })
    },[])

    return(
        <CardsBigContainer>
            {data.map((character,index)=>{
               return(<CharacterCard key={index} character={character} />)
            })}
        </CardsBigContainer>
    )
}

export default CharactersList;