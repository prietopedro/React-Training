import React, {useState} from "react";
import NumberButton from "./NumberButton"
import {numbers} from '../../../data'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file


const Numbers = () => {
  let [num, changeNum] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div className="ButtonContainer">
      {numbers.map((x,i)=>{
        return (<div><NumberButton key={i} x={x} /></div>)
      })}
    </div>
  );
};

export default Numbers;