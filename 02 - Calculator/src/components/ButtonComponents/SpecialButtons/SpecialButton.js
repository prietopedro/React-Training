import React from "react";

const SpecialButton = (props) => {
  return (
      <div onClick={()=>props.specials(props.specialbtn)} className="btn-special">{props.specialbtn}</div>
  );
};

export default SpecialButton;