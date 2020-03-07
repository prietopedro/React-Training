import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import {Container, IMG, CardContainer, Name, Info, Button} from "./Styling";

export default function Episodes(props) {
  // TODO: Add useState to track data from useEffect
  const [query, setQuery] = useState("");


    console.log(props.filteredData)

  useEffect(() => {
    props.setFilteredData(props.data.filter(character=>{
      return character.name.toLowerCase().includes(query.toLowerCase());
    }))
  }, [query]);
  return (
    <>
    <section className="character-list">
      <SearchForm setQuery={setQuery} />
      <Container>
      {props.filteredData.map((epi)=>(
        <CardContainer key={epi.id}>
          <Name>{epi.name}</Name>
        </CardContainer>
      ))}
      </Container>
    </section>

    <Button className="previous" onClick={()=>{
      props.setPage(props.page-1)
    }}>PREVIOUS</Button>
    <Button className="next" onClick={()=>{
      props.setPage(props.page+1)
    }}>NEXT</Button>
    </>
  )
}