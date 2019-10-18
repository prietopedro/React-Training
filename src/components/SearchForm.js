import React, { useState } from "react";
import {InputField} from "./Styling"

export default function SearchForm(props) {
  
  const onChangeHandler = (e) =>{
    props.setQuery(e.target.value)
  } 

  return (
    <section className="search-form">
      <form>
        <input type="text" onChange={onChangeHandler} placeholder="Search By Name" />
      </form>
    </section>
  );
}
