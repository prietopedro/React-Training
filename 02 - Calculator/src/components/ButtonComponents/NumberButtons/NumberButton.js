import React from "react";
import Display from "../../DisplayComponents/Display"

const NumberButton = (props) => {
  return (
      <div onClick={()=>props.showValue(props.num)} className="btn">
      {props.num}
      </div>
  );
};
export default NumberButton;