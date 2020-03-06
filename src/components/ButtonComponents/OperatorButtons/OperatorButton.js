import React from "react";

const OperatorButton = (props) => {
  return (
      <div onClick={()=>props.operatorsfun(props.x.value)} className="btn-operators">{props.x.value}</div>
  );
};

export default OperatorButton;
