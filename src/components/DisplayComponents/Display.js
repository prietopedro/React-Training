import React,{useState} from "react";

const Display = () => {
  const [displayValue, setDisplayValue] = useState(0);
  return (<div className="display">{displayValue}</div>);
};

export default Display