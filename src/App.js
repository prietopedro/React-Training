import React,{useState} from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [displayValue, setDisplayValue] = useState(0);
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
 function showValue(value){
   if(displayValue == 0){
     setDisplayValue(value)
   } else{
     setDisplayValue(displayValue+value)
   }
 }


function reminder(x,y){
  return x%y;
}
 function specials(value){
   if(value === "C"){
    setDisplayValue(0);
   } else if(value==="+/-"){
     setDisplayValue(displayValue*-1)
   } else if(value==="%"){
      // setDisplayValue("Pick Another Number");
      // if()
   }
 }



  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayValue={displayValue} />
        <div className="buttons">
          <div className="leftbtn">
            <Specials specials={specials}/>
            <Numbers showValue={showValue} />
          </div>
          <div className="rightbtn">
            <Operators />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
