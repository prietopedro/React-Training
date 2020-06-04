import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import {Container, IMG, CardContainer, Name, Info, Button} from "./Styling";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [query, setQuery] = useState("");




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
      {props.filteredData.map((character)=>(
        <CardContainer key={character.id}>
          <IMG src={character.image} />
          <Name>{character.name}</Name>
          <Info>{character.species}</Info>
          <Info>{character.gender}</Info>
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