import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm"

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [query, setQuery] = useState("");


  useEffect(() => {
    props.setFilteredData(props.data.filter(character=>{
      return character.name.toLowerCase().includes(query.toLowerCase());
    }))
  }, [query]);
console.log(props.data)
  return (
    <section className="character-list">
      <SearchForm setQuery={setQuery} />
      {props.filteredData.map((character)=>(
        <div key={character.id}>
          <img src={character.image} />
          <h2>{character.name}</h2>
          <p>{character.species}</p>
          <p>{character.gender}</p>
        </div>
      ))}
    </section>
  );
}
