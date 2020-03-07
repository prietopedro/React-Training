import React,{useState,useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import {CardsBigContainer, Button} from "./StyledElements";
import Filter from "./Filter"


function CharactersList(){
    const [data, setData] = useState([]);
    let [page, setPage] = useState(1);

    function nextandPrevious(){
        if(page === 1 ){
            return <Button onClick={()=>setPage(page+1)}>Next</Button> 
        } else if(page > 1 && page < 9){
            return(
                <>
                <Button onClick={()=>setPage(page-1)}>Previous</Button>
                <Button onClick={()=>setPage(page+1)}>Next</Button>
                </>
                )
        } else{
            return(<Button onClick={()=>setPage(page-1)}>Previous</Button>)
        }
    };

    function search(){
        let input = document.querySelector("#search").value.toUpperCase();
        let allCards = document.querySelectorAll(".cards");
        let allCardsArr = Array.from(allCards);
        allCardsArr.forEach((el)=>{
            console.log(el.textContent.toUpperCase())
          })
        // et allNamesArr = l
    }

    useEffect(()=>{
        axios.get(`https://swapi.co/api/people/?page=${page}`)
        .then(response=>{
            setData(response.data.results)
        })
        .catch(error=>{
            console.log("Sorry You Got An Error")
        })
    },[page])

    return(
        <>
        <Filter search={search}/>
        <CardsBigContainer>
            {data.map((character,index)=>{
               return(<CharacterCard key={index} character={character} />)
            })}
        </CardsBigContainer>
        {/* <Button onClick={()=>setPage(page+1)}>Next</Button> */}
        {nextandPrevious()};
        </>
    )
}

export default CharactersList;