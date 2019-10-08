import React from "react";

const SpecialButton = ({specialbtn}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="btn">{specialbtn}</div>
    </>
  );
};

export default SpecialButton;