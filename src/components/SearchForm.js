import React, { useState } from "react";
import {InputField, InputContainer} from "./Styling"

export default function SearchForm(props) {
  
  const onChangeHandler = (e) =>{
    props.setQuery(e.target.value)
  } 

  return (
    <InputContainer className="search-form">
      <form>
        <InputField type="text" onChange={onChangeHandler} placeholder="Search By Name" />
      </form>
    </InputContainer>
  );
}
