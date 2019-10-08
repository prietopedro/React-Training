import React,{useState} from "react";
import {specials} from "../../../data"
import SpecialButton from "./SpecialButton"
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special,SetSpecial] = useState(specials);
  return (
    <div className="Specials">
     {special.map((specialbtn, index)=>{
       return (<SpecialButton key={index} specialbtn = {specialbtn} />)
     })}
    </div>
  );
};

export default Specials;