import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from "./NumberButton";


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file


const Numbers = (props) => {
  const [numberButton, changeNum] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div className="numbers">
      {numberButton.map((num , index) => (<NumberButton setDisplayValue={props.setDisplayValue} showValue={props.showValue} key={index} index={index} num={num}/>)
      )}
    </div>
  );
};

export default Numbers;